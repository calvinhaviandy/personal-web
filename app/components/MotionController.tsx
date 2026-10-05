"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { usePathname } from "next/navigation";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

type Paint = { target: HTMLElement; rest: gsap.TweenVars; active: gsap.TweenVars };
type Interaction = {
  paints?: Paint[];
  arrow?: HTMLElement | null;
  preview?: HTMLElement | null;
  lift?: boolean;
  press?: boolean;
  focusWithin?: boolean;
  arrowDistance?: number;
};

// Only motion is client-side; the portfolio content remains server-rendered.
export default function MotionController() {
  const pathname = usePathname();

  useGSAP(() => {
    const html = document.documentElement;
    html.setAttribute("data-gsap-ui", "");
    const media = gsap.matchMedia();

    media.add({ always: "all", reduce: "(prefers-reduced-motion: reduce)", hover: "(hover: hover) and (pointer: fine)" }, (context) => {
      const reduce = Boolean(context.conditions?.reduce);
      const canHover = Boolean(context.conditions?.hover);
      const cleanups: (() => void)[] = [];
      const select = <T extends HTMLElement>(selector: string) => Array.from(document.querySelectorAll<T>(selector));
      const listen = (target: EventTarget, type: string, handler: (event: Event) => void, capture = false) => {
        const safe = context.add(`listener${cleanups.length}`, handler) as EventListener;
        target.addEventListener(type, safe, capture);
        cleanups.push(() => target.removeEventListener(type, safe, capture));
      };
      const tween = (target: gsap.TweenTarget, vars: gsap.TweenVars) => {
        gsap.to(target, { duration: reduce ? 0 : .22, ease: "power2.out", overwrite: "auto", ...vars });
      };

      const bind = (element: HTMLElement, options: Interaction) => {
        let hovered = canHover && element.matches(":hover");
        let focused = options.focusWithin ? element.contains(document.activeElement) : element.matches(":focus-visible");
        let pressed = false;
        const update = () => {
          const active = hovered || focused || pressed;
          options.paints?.forEach(({ target, rest, active: highlighted }) => tween(target, active ? highlighted : rest));
          if (options.lift || options.press) {
            tween(element, { y: !reduce && options.lift && active && !pressed ? -2 : 0, scale: !reduce && options.press && pressed ? .985 : 1 });
          }
          const arrowDistance = (options.arrowDistance ?? 3) + (pressed ? 1 : 0);
          if (options.arrow) tween(options.arrow, { x: !reduce && active ? arrowDistance : 0, y: !reduce && active ? -arrowDistance : 0 });
          if (options.preview) tween(options.preview, { y: !reduce && active ? -2 : 0 });
        };
        if (canHover) {
          listen(element, "pointerenter", () => { hovered = true; update(); });
          listen(element, "pointerleave", () => { hovered = false; pressed = false; update(); });
        }
        listen(element, "focusin", () => {
          focused = Boolean(options.focusWithin) || element.matches(":focus-visible");
          update();
        });
        listen(element, "focusout", (event) => {
          const next = (event as FocusEvent).relatedTarget;
          focused = Boolean(options.focusWithin && next instanceof Node && element.contains(next));
          pressed = false;
          update();
        });
        if (options.press) {
          listen(element, "pointerdown", (event) => {
            if ((event as PointerEvent).button !== 0) return;
            pressed = true;
            update();
          });
          const release = () => { if (pressed) { pressed = false; update(); } };
          listen(window, "pointerup", release);
          listen(window, "pointercancel", release);
          listen(window, "blur", release);
          listen(element, "keydown", (event) => { if ((event as KeyboardEvent).key === "Enter") { pressed = true; update(); } });
          listen(element, "keyup", release);
        }
        // Synchronize a focused/hovered link after navigation or media changes.
        if (hovered || focused) update();
      };

      select(".link-card").forEach((card) => {
        const index = card.querySelector<HTMLElement>(".link-card-index");
        const copy = card.querySelector<HTMLElement>(".link-card-copy > span");
        const paints: Paint[] = [{ target: card, rest: { backgroundColor: "#000", color: "#fff" }, active: { backgroundColor: "#fff", color: "#000" } }];
        if (index) paints.push({ target: index, rest: { color: "rgba(255,255,255,.48)" }, active: { color: "rgba(0,0,0,.58)" } });
        if (copy) paints.push({ target: copy, rest: { color: "rgba(255,255,255,.66)" }, active: { color: "rgba(0,0,0,.7)" } });
        bind(card, { paints, arrow: card.querySelector<HTMLElement>(".link-card-arrow"), lift: true, press: true });
      });

      select(".work-card").forEach((card) => bind(card, {
        focusWithin: true,
        paints: [{ target: card, rest: { borderColor: "rgba(255,255,255,.26)" }, active: { borderColor: "rgba(255,255,255,.7)" } }],
      }));
      select(".work-card-main").forEach((card) => bind(card, {
        press: true, arrowDistance: 2, arrow: card.querySelector<HTMLElement>(".work-card-arrow"), preview: card.querySelector<HTMLElement>("[data-preview-lift]"),
      }));

      select(".work-card-external, .archive-link, .contact-link, .detail-action, .next-project").forEach((link) => {
        const primary = link.matches(".archive-link, .contact-link, .detail-action.primary");
        const rest = { backgroundColor: primary ? "#fff" : "#000", color: primary ? "#000" : link.matches(".work-card-external") ? "rgba(255,255,255,.66)" : "#fff" };
        const active = { backgroundColor: primary ? "#000" : "#fff", color: primary ? "#fff" : "#000" };
        const paints: Paint[] = [{ target: link, rest, active }];
        const small = link.querySelector<HTMLElement>("small");
        if (small) paints.push({ target: small, rest: { color: "rgba(255,255,255,.48)" }, active: { color: "rgba(0,0,0,.55)" } });
        bind(link, { paints });
      });
      select(".header-links a").forEach((link) => bind(link, { paints: [{ target: link, rest: { opacity: 1 }, active: { opacity: .62 } }] }));
      select(".site-footer-inner a, .back-link").forEach((link) => bind(link, {
        paints: [{ target: link, rest: { color: link.matches(".back-link") ? "rgba(255,255,255,.66)" : "rgba(255,255,255,.48)" }, active: { color: "#fff" } }],
      }));

      select<HTMLDetailsElement>(".experience-item").forEach((details) => {
        const plus = details.querySelector<HTMLElement>(".experience-plus");
        if (!plus) return;
        gsap.set(plus, { rotation: details.open ? 45 : 0 });
        listen(details, "toggle", () => tween(plus, { rotation: details.open ? 45 : 0, duration: reduce ? 0 : .18 }));
      });

      const portrait = document.querySelector<HTMLElement>(".portrait-orbit");
      if (portrait && !reduce) {
        const loops: gsap.core.Timeline[] = [];
        portrait.querySelectorAll<HTMLElement>(".orbit-rotor").forEach((rotor, index) => {
          const marker = rotor.querySelector<HTMLElement>(".orbit-marker");
          if (!marker) return;
          const duration = index === 0 ? 26 : 34;
          const direction = index === 0 ? 1 : -1;
          const loop = gsap.timeline({ repeat: -1, defaults: { duration, ease: "none" } })
            .fromTo(rotor, { rotation: 0 }, { rotation: 360 * direction }, 0)
            .fromTo(marker, { rotation: 0 }, { rotation: -360 * direction }, 0);
          loop.progress((index === 0 ? 6 : 14) / duration);
          loops.push(loop);
        });
        let hovering = canHover && portrait.matches(":hover");
        let visible = true;
        const sync = () => loops.forEach((loop) => loop.paused(document.hidden || hovering || !visible));
        const planes = portrait.querySelectorAll<HTMLElement>(".orbit-plane");
        if (canHover) {
          listen(portrait, "pointerenter", () => { hovering = true; sync(); tween(planes, { borderColor: "rgba(255,255,255,.55)" }); });
          listen(portrait, "pointerleave", () => { hovering = false; sync(); tween(planes, { borderColor: "rgba(255,255,255,.26)" }); });
        }
        listen(document, "visibilitychange", sync);
        const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
        observer.observe(portrait);
        cleanups.push(() => observer.disconnect());
        sync();
      }

      let scrollTween: gsap.core.Tween | undefined;
      let restoreFocus: (() => void) | undefined;
      const focusTarget = (target: HTMLElement) => {
        restoreFocus?.();
        const previous = target.getAttribute("tabindex");
        if (previous === null) target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        const restore = () => {
          target.removeEventListener("blur", restore);
          if (previous === null) target.removeAttribute("tabindex");
          if (restoreFocus === restore) restoreFocus = undefined;
        };
        restoreFocus = restore;
        target.addEventListener("blur", restore, { once: true });
      };
      listen(document, "click", (event) => {
        const click = event as MouseEvent;
        if (click.defaultPrevented || click.button !== 0 || click.ctrlKey || click.metaKey || click.altKey || click.shiftKey) return;
        const link = click.target instanceof Element ? click.target.closest<HTMLAnchorElement>("a[href]") : null;
        if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
        const url = new URL(link.href, window.location.href);
        if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || url.search !== window.location.search || !url.hash) return;
        let id: string;
        try { id = decodeURIComponent(url.hash.slice(1)); } catch { return; }
        const target = document.getElementById(id);
        if (!target) return;
        click.preventDefault();
        scrollTween?.kill();
        if (window.location.hash !== url.hash) window.history.pushState(null, "", url.pathname + url.search + url.hash);
        // Scroll position is user state: kill on cleanup, but never revert it.
        context.ignore(() => {
          scrollTween = gsap.to(window, {
            duration: reduce ? 0 : .65, ease: "power2.inOut", overwrite: "auto",
            scrollTo: { y: target, offsetY: parseFloat(getComputedStyle(target).scrollMarginTop) || 0, autoKill: true },
            onComplete: () => focusTarget(target),
          });
        });
      }, true);
      cleanups.push(() => scrollTween?.kill());
      cleanups.push(() => restoreFocus?.());

      return () => cleanups.forEach((cleanup) => cleanup());
    });

    return () => {
      media.revert();
      html.removeAttribute("data-gsap-ui");
    };
  }, { dependencies: [pathname], revertOnUpdate: true });

  return null;
}

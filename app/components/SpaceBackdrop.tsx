"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function SpaceBackdrop() {
  const backdropRef = useRef<HTMLDivElement>(null);
  const farRef = useRef<HTMLSpanElement>(null);
  const nearRef = useRef<HTMLSpanElement>(null);
  const firstShootingStarRef = useRef<HTMLSpanElement>(null);
  const secondShootingStarRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const far = farRef.current;
      const near = nearRef.current;
      const firstShootingStar = firstShootingStarRef.current;
      const secondShootingStar = secondShootingStarRef.current;

      if (!far || !near || !firstShootingStar || !secondShootingStar) return;

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const animations: gsap.core.Animation[] = [
          gsap.fromTo(
            far,
            { xPercent: -4, yPercent: -2 },
            {
              xPercent: 4,
              yPercent: 2,
              duration: 70,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            },
          ),
          gsap.fromTo(
            near,
            { xPercent: 5, yPercent: 3 },
            {
              xPercent: -5,
              yPercent: -3,
              duration: 42,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            },
          ),
          gsap.fromTo(
            near,
            { opacity: 0.22 },
            {
              opacity: 0.65,
              duration: 7,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            },
          ),
        ];

        const createShootingStar = (
          star: HTMLSpanElement,
          period: number,
          initialTime: number,
        ) => {
          const timeline = gsap.timeline({ repeat: -1, repeatRefresh: true });

          timeline
            .set(star, { x: 0, y: 0, rotation: 14, opacity: 0 }, 0)
            .fromTo(
              star,
              { x: 0, y: 0 },
              {
                x: () => window.innerWidth + 360,
                y: 180,
                duration: period * 0.13,
                ease: "none",
                immediateRender: false,
              },
              period * 0.69,
            )
            .fromTo(
              star,
              { opacity: 0 },
              {
                opacity: 0.9,
                duration: period * 0.03,
                ease: "none",
                immediateRender: false,
              },
              period * 0.69,
            )
            .fromTo(
              star,
              { opacity: 0.9 },
              {
                opacity: 0,
                duration: period * 0.1,
                ease: "none",
                immediateRender: false,
              },
              period * 0.72,
            )
            .set(star, { opacity: 0 }, period)
            .totalTime(initialTime);

          return timeline;
        };

        const shootingTimelines = [
          createShootingStar(firstShootingStar, 16, 10),
          createShootingStar(secondShootingStar, 21, 1),
        ];
        animations.push(...shootingTimelines);

        const syncVisibility = () => {
          animations.forEach((animation) => animation.paused(document.hidden));
        };
        const refreshViewport = () => {
          shootingTimelines.forEach((timeline) => {
            const time = timeline.totalTime();
            timeline.invalidate().totalTime(time);
          });
        };

        syncVisibility();
        document.addEventListener("visibilitychange", syncVisibility);
        window.addEventListener("resize", refreshViewport);

        return () => {
          document.removeEventListener("visibilitychange", syncVisibility);
          window.removeEventListener("resize", refreshViewport);
        };
      });

      return () => media.revert();
    },
    { scope: backdropRef },
  );

  return (
    <div className="space-backdrop" aria-hidden="true" ref={backdropRef}>
      <span className="star-layer star-layer-far" ref={farRef} />
      <span className="star-layer star-layer-near" ref={nearRef} />
      <span
        className="shooting-star shooting-star-one"
        ref={firstShootingStarRef}
      />
      <span
        className="shooting-star shooting-star-two"
        ref={secondShootingStarRef}
      />
    </div>
  );
}

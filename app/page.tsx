import Image from "next/image";
import Link from "next/link";
import ExperienceList from "@/app/components/ExperienceList";
import SelectedWork from "@/app/components/SelectedWork";
import experiences from "@/public/api/experience.json";

const toolkit = ["TypeScript", "React", "Next.js", "Laravel", "Figma"];

export default function HomePage() {
  return (
    <main id="top">
      <section className="site-shell">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/15 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-black/45 sm:text-xs">
          <span>Full-stack developer / UI designer</span>
          <span>Indonesia · GMT+7</span>
        </div>

        <div className="py-10 sm:py-14 lg:py-16">
          <h1 className="overflow-hidden text-[clamp(4.15rem,16.2vw,14rem)] font-archiabold leading-[0.73] tracking-[-0.085em] text-[#151513]">
            <span className="hero-word">CALVIN</span>
            <span className="hero-word hero-word-delayed">
              HAVIANDY<span className="text-[#ff542e]">.</span>
            </span>
          </h1>
        </div>

        <div className="grid gap-8 border-t border-black/15 py-8 sm:py-10 lg:grid-cols-[0.65fr_1.15fr_0.7fr] lg:items-end lg:gap-12">
          <p className="eyebrow">Independent / 2026</p>
          <p className="max-w-2xl text-2xl font-archiabold leading-[1.12] tracking-[-0.035em] sm:text-3xl lg:text-4xl">
            I take loose ideas and turn them into websites people can actually use.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="#work" className="button-dark w-full">
              See the work <span aria-hidden="true">↓</span>
            </Link>
            <a href="mailto:calvinhaviandy@gmail.com" className="button-line w-full">
              Email me <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <SelectedWork />

      <section id="about" className="site-shell section-space scroll-mt-20">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / About</p>
            <h2 className="section-title">One person, fewer handoffs.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-black/50 sm:text-right">
            Design in Figma. Build in code. Test with real people.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="relative max-w-xl">
            <div className="aspect-[4/5] overflow-hidden bg-[#d8d3c8]">
              <Image
                src="/image/profile/IMG_5059.JPG"
                alt="Calvin Valeon Haviandy"
                width={900}
                height={1125}
                className="h-full w-full object-cover grayscale-[35%]"
              />
            </div>
            <div className="absolute -bottom-5 -right-1 bg-[#ff542e] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white sm:-right-5">
              Available for selected work
            </div>
          </div>

          <div className="flex flex-col justify-between gap-14 lg:py-3">
            <div className="space-y-6 text-xl leading-[1.45] tracking-[-0.015em] text-black/65 sm:text-2xl">
              <p>
                I&apos;m Calvin, a developer who also designs. I can sketch a flow,
                build the interface, wire up the backend, and keep the small details intact.
              </p>
              <p>
                Most of my work lives somewhere between a useful tool and a good-looking
                website. I like clear type, short paths, and code that another person can
                still understand later.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-5">Current toolkit</p>
              <ul className="border-t border-black/15">
                {toolkit.map((tool, index) => (
                  <li
                    key={tool}
                    className="flex items-center justify-between border-b border-black/15 py-3 text-sm"
                  >
                    <span>{tool}</span>
                    <span className="font-mono text-[10px] text-black/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="border-y border-black/15 bg-[#e5e1d7] scroll-mt-20">
        <div className="site-shell section-space">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / Experience</p>
              <h2 className="section-title">What I&apos;ve been doing.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-black/50 sm:text-right">
              Support, product QA, community work, and web development.
            </p>
          </div>
          <ExperienceList items={experiences} />
        </div>
      </section>

      <section id="contact" className="bg-[#ff542e] text-[#171411] scroll-mt-20">
        <div className="site-shell py-20 sm:py-28 lg:py-36">
          <p className="eyebrow text-black/55">04 / Contact</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-5xl text-[clamp(3.4rem,10vw,8.5rem)] font-archiabold leading-[0.82] tracking-[-0.07em]">
                HAVE A GOOD IDEA?
              </h2>
              <p className="mt-8 max-w-lg text-lg leading-7 text-black/65">
                Send the rough version. We can work out the polished one together.
              </p>
            </div>
            <a href="mailto:calvinhaviandy@gmail.com" className="button-dark min-w-48">
              Start a conversation ↗
            </a>
          </div>

          <div className="mt-20 flex flex-col gap-4 border-t border-black/25 pt-6 text-xs uppercase tracking-[0.12em] sm:flex-row sm:items-center sm:justify-between">
            <a
              href="mailto:calvinhaviandy@gmail.com"
              className="break-all transition hover:text-white"
            >
              calvinhaviandy@gmail.com
            </a>
            <div className="flex flex-wrap gap-6">
              <Link href="https://github.com/calvinhaviandy" target="_blank" rel="noreferrer">
                GitHub ↗
              </Link>
              <Link
                href="https://www.linkedin.com/in/calvinhaviandy/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </Link>
              <Link
                href="https://www.instagram.com/calvinhaviandy/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { SocialMedia } from "@/app/types/portos";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export default function Footer({ sm }: { sm: SocialMedia[] }) {
  return (
    <div>
      {/* <VelocityScroll
        className="tracking-tighter text-white/15 p-5"
        defaultVelocity={1}
      >
        Interesed in working with me? Let's talk. If you have any questions or
        want to know more about me, feel free to contact me.
      </VelocityScroll> */}
      <div className="text-center py-8 text-neutral-500 font-outfit space-y-5 pt-20 pb-20">
        <p>Build using Next.js and Tailwind CSS</p>
        <h2 className="text-2xl font-archiabold tracking-tighter">
          Not to worry, hire me when your believe
        </h2>
        <p>Follow or Contact me on :</p>
        <div className="button-wrapping space-x-5 font-outfit flex justify-center">
          <ul className="flex gap-5 text-2xl text-neutral-500">
            {sm.map((item: SocialMedia, i: number) => (
              <li key={i}>
                <Link
                  href={item.link}
                  target="_blank"
                >
                  <Icon icon={item.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

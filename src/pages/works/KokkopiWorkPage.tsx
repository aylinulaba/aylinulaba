import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import Img01 from "../../assets/works/kokkopi/01.png";
import Img02 from "../../assets/works/kokkopi/02.png";
import Img03 from "../../assets/works/kokkopi/03.png";
import Img04 from "../../assets/works/kokkopi/04.png";
import Img05 from "../../assets/works/kokkopi/05.png";
import Img06 from "../../assets/works/kokkopi/06.png";
import Img07 from "../../assets/works/kokkopi/07.png";
import Img08 from "../../assets/works/kokkopi/08.png";
import Img09 from "../../assets/works/kokkopi/09.png";
import Img10 from "../../assets/works/kokkopi/10.png";
import Img11 from "../../assets/works/kokkopi/11.png";
import Img12 from "../../assets/works/kokkopi/12.png";
import Img13 from "../../assets/works/kokkopi/13.png";
import Img14 from "../../assets/works/kokkopi/14.png";
import Img15 from "../../assets/works/kokkopi/15.png";

type MetaLink = {
  label: string;
  text: string;
  href: string;
};

type WorkImage = {
  src: string;
  alt: string;
};

function Divider() {
  return <div className="h-px origin-top scale-y-50 bg-base-950/50" />;
}

export default function AembitWorkPage() {
  const meta: MetaLink[] = [
    { label: "SOURCE", text: "Official site", href: "#" },
    { label: "CLIENT", text: "-", href: "#" }
  ];

  const tags: string[] = ["BRANDING & PRODUCT AND SYSTEM DESIGN"];

  const images: WorkImage[] = [
    { src: Img01, alt: "Kokkopi project image" },
    { src: Img02, alt: "Kokkopi project image" },
    { src: Img03, alt: "Kokkopi project image" },
    { src: Img04, alt: "Kokkopi project image" },
    { src: Img05, alt: "Kokkopi project image" },
    { src: Img06, alt: "Kokkopi project image" },
    { src: Img07, alt: "Kokkopi project image" },
    { src: Img08, alt: "Kokkopi project image" },
    { src: Img09, alt: "Kokkopi project image" },
    { src: Img10, alt: "Kokkopi project image" },
    { src: Img11, alt: "Kokkopi project image" },
    { src: Img12, alt: "Kokkopi project image" },
    { src: Img13, alt: "Kokkopi project image" },
    { src: Img14, alt: "Kokkopi project image" },
    { src: Img15, alt: "Kokkopi project image" }
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT (sticky) */}
        <div className="min-w-0 md:sticky md:top-[150px] md:self-start">
          <h1 className="text-[48px] font-medium leading-none text-base-800">kokköpi</h1>

          <div className="mt-8">
            {/* meta row */}
            <div className="grid grid-cols-2 gap-8">
              {meta.map((m) => (
                <div
                  key={m.label}
                  className={["min-w-0", m.label === "CLIENT" ? "justify-self-end text-right" : ""].join(
                    " "
                  )}
                >
                  <div className="text-12 font-medium uppercase tracking-wide text-base-500">
                    {m.label}
                  </div>
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex text-14 font-extralight text-base-950 transition-colors hover:text-base-950"
                  >
                    {m.text}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Divider />
            </div>

            <div className="mt-4 space-y-2">
              {tags.map((t) => (
                <div
                  key={t}
                  className="text-12 font-medium uppercase tracking-wide text-base-500"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-6 text-15 font-extralight text-base-800">
            <p>
              Kokköpi is a coffee brand that takes coffee seriously but never takes itself 
              too seriously. The story begins in a parallel universe where chickens drink coffee 
              instead of eating corn. This quirky universe flows into every aspect of the brand, 
              from visual identity to packaging design: bold illustrations, unexpected mascots, 
              and a humor-driven personality obsessed with coffee.
            </p>
            <p>
              During the brand identity process, Kokköpi’s voice was built on a playful tone 
              that celebrates the power of coffee with a wink. Product and packaging design carry 
              this spirit through high-contrast typography, vibrant colors, and cartoon-like mascots. 
              The result is more than just coffee—it’s a brand experience that makes coffee lovers smile 
              while breaking away from the monotony of everyday life.
            </p>
            <p>
              <span className="font-medium">Core Stack:</span>{" "}
              Adobe Creative Cloud
            </p>
          </div>

          <div className="mt-10">
            <a
              href="/work"
              className={[
                "group inline-flex items-center gap-2",
                "text-15 font-extralight text-base-950",
                "transition-colors hover:text-base-950",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base-50"
              ].join(" ")}
            >
              <FiArrowLeft className="h-4 w-4 text-base-950 transition-transform duration-150 ease-out group-hover:-translate-x-1" />
              <span>return to selected works</span>
            </a>
          </div>
        </div>

        {/* RIGHT (images) */}
        <div className="min-w-0">
          <div className="space-y-[10px]">
            {images.map((img) => (
              <div key={img.src} className="w-full overflow-hidden bg-base-950">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="block h-auto w-full select-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
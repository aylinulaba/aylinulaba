import { FiArrowLeft } from "react-icons/fi";
import Img01 from "../../assets/works/afgc/01.png";
import Img02 from "../../assets/works/afgc/02.png";
import Img03 from "../../assets/works/afgc/03.png";
import Img04 from "../../assets/works/afgc/04.png";
import Img05 from "../../assets/works/afgc/05.png";
import Img06 from "../../assets/works/afgc/06.png";
import Img07 from "../../assets/works/afgc/07.png";
import Img08 from "../../assets/works/afgc/08.png";
import Img09 from "../../assets/works/afgc/09.png";
import Img10 from "../../assets/works/afgc/10.png";
import Img11 from "../../assets/works/afgc/11.png";
import Img12 from "../../assets/works/afgc/12.png";
import Img13 from "../../assets/works/afgc/13.png";
import Img14 from "../../assets/works/afgc/14.png";
import Img15 from "../../assets/works/afgc/15.png";
import Img16 from "../../assets/works/afgc/16.png";
import Img17 from "../../assets/works/afgc/17.png";
import Img18 from "../../assets/works/afgc/18.png";
import Img19 from "../../assets/works/afgc/19.png";
import Img20 from "../../assets/works/afgc/20.png";
import Img21 from "../../assets/works/afgc/21.png";
import Img22 from "../../assets/works/afgc/22.png";
import Img23 from "../../assets/works/afgc/23.png";
import Img24 from "../../assets/works/afgc/24.png";
import Img25 from "../../assets/works/afgc/25.png";

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

  const tags: string[] = ["BRANDING"];

  const images: WorkImage[] = [
    { src: Img01, alt: "A f*cking good coffee project image" },
    { src: Img02, alt: "A f*cking good coffee project image" },
    { src: Img03, alt: "A f*cking good coffee project image" },
    { src: Img04, alt: "A f*cking good coffee project image" },
    { src: Img05, alt: "A f*cking good coffee project image" },
    { src: Img06, alt: "A f*cking good coffee project image" },
    { src: Img07, alt: "A f*cking good coffee project image" },
    { src: Img08, alt: "A f*cking good coffee project image" },
    { src: Img09, alt: "A f*cking good coffee project image" },
    { src: Img10, alt: "A f*cking good coffee project image" },
    { src: Img11, alt: "A f*cking good coffee project image" },
    { src: Img12, alt: "A f*cking good coffee project image" },
    { src: Img13, alt: "A f*cking good coffee project image" },
    { src: Img14, alt: "A f*cking good coffee project image" },
    { src: Img15, alt: "A f*cking good coffee project image" },
    { src: Img16, alt: "A f*cking good coffee project image" },
    { src: Img17, alt: "A f*cking good coffee project image" },
    { src: Img18, alt: "A f*cking good coffee project image" },
    { src: Img19, alt: "A f*cking good coffee project image" },
    { src: Img20, alt: "A f*cking good coffee project image" },
    { src: Img21, alt: "A f*cking good coffee project image" },
    { src: Img22, alt: "A f*cking good coffee project image" },
    { src: Img23, alt: "A f*cking good coffee project image" },
    { src: Img24, alt: "A f*cking good coffee project image" },
    { src: Img25, alt: "A f*cking good coffee project image" }
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT (sticky) */}
        <div className="min-w-0 md:sticky md:top-[150px] md:self-start">
          <h1 className="text-[48px] font-medium leading-none text-base-800">A f*cking good coffee</h1>

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
              No bullsh*t. Just good coffee. For every damn moment.
            </p>
            <p>
              Born in the heart of New York. A specialty coffee brand that brings 
              coffee back to what it's always been - bold, authentic, and unapologetically real.
            </p>
            <p>
              Take your time. Fu*king enjoy it.
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
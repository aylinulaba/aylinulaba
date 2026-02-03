import { FiArrowLeft } from "react-icons/fi";
import Img01 from "../../assets/works/fleurea/01.png";
import Img02 from "../../assets/works/fleurea/02.png";
import Img03 from "../../assets/works/fleurea/03.png";
import Img04 from "../../assets/works/fleurea/04.png";
import Img05 from "../../assets/works/fleurea/05.png";
import Img06 from "../../assets/works/fleurea/06.png";
import Img07 from "../../assets/works/fleurea/07.png";
import Img08 from "../../assets/works/fleurea/08.png";
import Img09 from "../../assets/works/fleurea/09.png";
import Img10 from "../../assets/works/fleurea/10.png";
import Img11 from "../../assets/works/fleurea/11.png";
import Img12 from "../../assets/works/fleurea/12.png";
import Img13 from "../../assets/works/fleurea/13.png";
import Img14 from "../../assets/works/fleurea/14.png";
import Img15 from "../../assets/works/fleurea/15.png";
import Img16 from "../../assets/works/fleurea/16.png";
import Img17 from "../../assets/works/fleurea/17.png";
import Img18 from "../../assets/works/fleurea/18.png";
import Img19 from "../../assets/works/fleurea/19.png";
import Img20 from "../../assets/works/fleurea/20.png";
import Img21 from "../../assets/works/fleurea/21.png";
import Img22 from "../../assets/works/fleurea/22.png";
import Img23 from "../../assets/works/fleurea/23.png";
import Img24 from "../../assets/works/fleurea/24.png";
import Img25 from "../../assets/works/fleurea/25.png";
import Img26 from "../../assets/works/fleurea/26.png";
import Img27 from "../../assets/works/fleurea/27.png";
import Img28 from "../../assets/works/fleurea/28.png";
import Img29 from "../../assets/works/fleurea/29.png";

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
    { src: Img01, alt: "Fleurea project image" },
    { src: Img02, alt: "Fleurea project image" },
    { src: Img03, alt: "Fleurea project image" },
    { src: Img04, alt: "Fleurea project image" },
    { src: Img05, alt: "Fleurea project image" },
    { src: Img06, alt: "Fleurea project image" },
    { src: Img07, alt: "Fleurea project image" },
    { src: Img08, alt: "Fleurea project image" },
    { src: Img09, alt: "Fleurea project image" },
    { src: Img10, alt: "Fleurea project image" },
    { src: Img11, alt: "Fleurea project image" },
    { src: Img12, alt: "Fleurea project image" },
    { src: Img13, alt: "Fleurea project image" },
    { src: Img14, alt: "Fleurea project image" },
    { src: Img15, alt: "Fleurea project image" },
    { src: Img16, alt: "Fleurea project image" },
    { src: Img17, alt: "Fleurea project image" },
    { src: Img18, alt: "Fleurea project image" },
    { src: Img19, alt: "Fleurea project image" },
    { src: Img20, alt: "Fleurea project image" },
    { src: Img21, alt: "Fleurea project image" },
    { src: Img22, alt: "Fleurea project image" },
    { src: Img23, alt: "Fleurea project image" },
    { src: Img24, alt: "Fleurea project image" },
    { src: Img25, alt: "Fleurea project image" },
    { src: Img26, alt: "Fleurea project image" },
    { src: Img27, alt: "Fleurea project image" },
    { src: Img28, alt: "Fleurea project image" },
    { src: Img29, alt: "Fleurea project image" }
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT (sticky) */}
        <div className="min-w-0 md:sticky md:top-[150px] md:self-start">
          <h1 className="text-[48px] font-medium leading-none text-base-800">Fleurea</h1>

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
              The floral formula for healthy skin.
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
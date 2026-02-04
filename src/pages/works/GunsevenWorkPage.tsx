import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Img01 from "../../assets/works/gunseven/01.jpg";
import Img02 from "../../assets/works/gunseven/02.jpg";
import Img03 from "../../assets/works/gunseven/03.jpg";
import Img04 from "../../assets/works/gunseven/04.jpg";
import Img05 from "../../assets/works/gunseven/05.jpg";
import Img06 from "../../assets/works/gunseven/06.jpg";
import Img07 from "../../assets/works/gunseven/07.jpg";
import Img08 from "../../assets/works/gunseven/08.jpg";
import Img09 from "../../assets/works/gunseven/09.jpg";
import Img10 from "../../assets/works/gunseven/10.jpg";
import Img11 from "../../assets/works/gunseven/11.jpg";
import Img12 from "../../assets/works/gunseven/12.jpg";
import Img13 from "../../assets/works/gunseven/13.jpg";
import Img14 from "../../assets/works/gunseven/14.jpg";
import Img15 from "../../assets/works/gunseven/15.jpg";
import Img16 from "../../assets/works/gunseven/16.jpg";
import Img17 from "../../assets/works/gunseven/17.jpg";
import Img18 from "../../assets/works/gunseven/18.jpg";
import Img19 from "../../assets/works/gunseven/19.jpg";
import Img20 from "../../assets/works/gunseven/20.jpg";
import Img21 from "../../assets/works/gunseven/21.jpg";
import Img22 from "../../assets/works/gunseven/22.jpg";
import Img23 from "../../assets/works/gunseven/23.jpg";
import Img24 from "../../assets/works/gunseven/24.jpg";
import Img25 from "../../assets/works/gunseven/25.jpg";
import Img26 from "../../assets/works/gunseven/26.jpg";
import Img27 from "../../assets/works/gunseven/27.jpg";
import Img28 from "../../assets/works/gunseven/28.jpg";
import Img29 from "../../assets/works/gunseven/29.jpg";

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
    { label: "SOURCE", text: "Official site", href: "https://gunsevensalgam.com.tr/tr" },
    { label: "CLIENT", text: "gunsevensalgam.com.tr", href: "https://gunsevensalgam.com.tr/tr" }
  ];

  const tags: string[] = ["BRANDING & DECISION-DRIVEN DESIGN"];

  const images: WorkImage[] = [
    { src: Img01, alt: "Gunseven project image" },
    { src: Img02, alt: "Gunseven project image" },
    { src: Img03, alt: "Gunseven project image" },
    { src: Img04, alt: "Gunseven project image" },
    { src: Img05, alt: "Gunseven project image" },
    { src: Img06, alt: "Gunseven project image" },
    { src: Img07, alt: "Gunseven project image" },
    { src: Img08, alt: "Gunseven project image" },
    { src: Img09, alt: "Gunseven project image" },
    { src: Img10, alt: "Gunseven project image" },
    { src: Img11, alt: "Gunseven project image" },
    { src: Img12, alt: "Gunseven project image" },
    { src: Img13, alt: "Gunseven project image" },
    { src: Img14, alt: "Gunseven project image" },
    { src: Img15, alt: "Gunseven project image" },
    { src: Img16, alt: "Gunseven project image" },
    { src: Img17, alt: "Gunseven project image" },
    { src: Img18, alt: "Gunseven project image" },
    { src: Img19, alt: "Gunseven project image" },
    { src: Img20, alt: "Gunseven project image" },
    { src: Img21, alt: "Gunseven project image" },
    { src: Img22, alt: "Gunseven project image" },
    { src: Img23, alt: "Gunseven project image" },
    { src: Img24, alt: "Gunseven project image" },
    { src: Img25, alt: "Gunseven project image" },
    { src: Img26, alt: "Gunseven project image" },
    { src: Img27, alt: "Gunseven project image" },
    { src: Img28, alt: "Gunseven project image" },
    { src: Img29, alt: "Gunseven project image" }
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT (sticky) */}
        <div className="min-w-0 md:sticky md:top-[150px] md:self-start">
          <h1 className="text-[48px] font-medium leading-none text-base-800">Günseven</h1>

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
              Founded in 1997 as a small family initiative, this brand carries a powerful story rooted 
              in the black carrot fields of Anatolia. Known as the key ingredient of şalgam suyu 
              (traditional turnip juice), black carrot cultivation became the foundation of the company’s 
              expertise, establishing its reputation as one of the region’s most trusted producers. 
              By shifting to traditional production methods in 2010, the brand reinforced its commitment 
              to local heritage and authenticity.
            </p>
            <p>
              Today, while the brand operates in modern facilities with an annual capacity of 20 million liters, 
              it continues to preserve the timeless recipes passed down through generations. With strong 
              production capabilities in both PET and glass bottles, it ensures quality and accessibility. 
              At the same time, its product portfolio has expanded to include pomegranate sauce, 
              vinegar varieties, lemonade, and rose sherbet — transforming the brand into more than just a 
              producer, but a storyteller that brings culture and identity to every table.
            </p>
            <p>
              <span className="font-medium">Core Stack:</span>{" "}
              Adobe Creative Cloud
            </p>
          </div>

          <div className="mt-10">
            <Link
              to="/work"
              className={[
                "group inline-flex items-center gap-2",
                "text-15 font-extralight text-base-950",
                "transition-colors hover:text-base-950",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base-50"
              ].join(" ")}
            >
              <FiArrowLeft className="h-4 w-4 text-base-950 transition-transform duration-150 ease-out group-hover:-translate-x-1" />
              <span>return to selected works</span>
            </Link>
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
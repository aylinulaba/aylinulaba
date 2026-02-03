import { FiArrowLeft } from "react-icons/fi";
import Img01 from "../../assets/works/nny/01.jpg";
import Img02 from "../../assets/works/nny/02.jpg";
import Img03 from "../../assets/works/nny/03.jpg";
import Img04 from "../../assets/works/nny/04.jpg";
import Img05 from "../../assets/works/nny/05.jpg";
import Img06 from "../../assets/works/nny/06.jpg";
import Img07 from "../../assets/works/nny/07.jpg";
import Img08 from "../../assets/works/nny/08.jpg";
import Img09 from "../../assets/works/nny/09.jpg";

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

  const tags: string[] = ["PRODUCT AND SYSTEM DESIGN"];

  const images: WorkImage[] = [
    { src: Img01, alt: "Nerede Ne Yenir project image" },
    { src: Img02, alt: "Nerede Ne Yenir project image" },
    { src: Img03, alt: "Nerede Ne Yenir project image" },
    { src: Img04, alt: "Nerede Ne Yenir project image" },
    { src: Img05, alt: "Nerede Ne Yenir project image" },
    { src: Img06, alt: "Nerede Ne Yenir project image" },
    { src: Img07, alt: "Nerede Ne Yenir project image" },
    { src: Img08, alt: "Nerede Ne Yenir project image" },
    { src: Img09, alt: "Nerede Ne Yenir project image" },
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT (sticky) */}
        <div className="min-w-0 md:sticky md:top-[150px] md:self-start">
          <h1 className="text-[48px] font-medium leading-none text-base-800">Nerede Ne Yenir?</h1>

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
              Nerede Ne Yenir (“Where to Eat”) is a social-driven restaurant guide and discovery 
              app that allows users to explore dining spots, share experiences, and interact with 
              fellow food enthusiasts. The app combines a comprehensive restaurant database with 
              authentic user reviews, photos, and ratings, enabling people to make dining choices 
              based on real experiences rather than just listings.
            </p>
            <p>
              With powerful filters, location-based recommendations, curated top lists, and 
              personalized suggestions, Nerede Ne Yenir serves as a modern companion for those 
              eager to try new flavors. Its social dimension encourages users to contribute by 
              sharing their own experiences, effectively building a community-powered ecosystem 
              that captures the culinary culture of the city in digital form.
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
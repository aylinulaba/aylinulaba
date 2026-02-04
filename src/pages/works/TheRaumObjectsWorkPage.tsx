import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Img01 from "../../assets/works/trop/01.jpg";
import Img02 from "../../assets/works/trop/02.jpg";
import Img03 from "../../assets/works/trop/03.jpg";
import Img04 from "../../assets/works/trop/04.jpg";
import Img05 from "../../assets/works/trop/05.jpg";
import Img06 from "../../assets/works/trop/06.jpg";
import Img07 from "../../assets/works/trop/07.jpg";
import Img08 from "../../assets/works/trop/08.jpg";
import Img09 from "../../assets/works/trop/09.jpg";

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
    { label: "SOURCE", text: "Official site", href: "https://www.theraumobjects.com/" },
    { label: "CLIENT", text: "theraumobjects.com", href: "https://www.theraumobjects.com/" }
  ];

  const tags: string[] = ["BRANDING & DESIGN TO DELIVERY"];

  const images: WorkImage[] = [
    { src: Img01, alt: "Apollo project image" },
    { src: Img02, alt: "Apollo project image" },
    { src: Img03, alt: "Apollo project image" },
    { src: Img04, alt: "Apollo project image" },
    { src: Img05, alt: "Apollo project image" },
    { src: Img06, alt: "Apollo project image" },
    { src: Img07, alt: "Apollo project image" },
    { src: Img08, alt: "Apollo project image" },
    { src: Img09, alt: "Apollo project image" }
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT (sticky) */}
        <div className="min-w-0 md:sticky md:top-[150px] md:self-start">
          <h1 className="text-[48px] font-medium leading-none text-base-800">The Raum Objects</h1>

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
              The Raum Objects offers a collection of sculptural furniture designed by
              Carolin Balas Pavisic, including four chairs – each embodies a letter
              in the German word "Raum" – and a matching table. The pieces combine
              sleek design with a unique, artistic touch that invites users to interact
              with them creatively.
            </p>
            <p>
              <span className="font-medium">Core Stack:</span>{" "}
              Adobe Creative Cloud, Figma, Docusaurus, Webflow, Spline, CI/CD
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
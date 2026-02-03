import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import Img01 from "../../assets/works/hubspace/01.png";
import Img02 from "../../assets/works/hubspace/02.png";
import Img03 from "../../assets/works/hubspace/03.png";
import Img04 from "../../assets/works/hubspace/04.png";
import Img05 from "../../assets/works/hubspace/05.png";
import Img06 from "../../assets/works/hubspace/06.png";
import Img07 from "../../assets/works/hubspace/07.png";
import Img08 from "../../assets/works/hubspace/08.png";
import Img09 from "../../assets/works/hubspace/09.png";
import Img10 from "../../assets/works/hubspace/10.png";
import Img11 from "../../assets/works/hubspace/11.png";
import Img12 from "../../assets/works/hubspace/12.png";
import Img13 from "../../assets/works/hubspace/13.png";
import Img14 from "../../assets/works/hubspace/14.png";
import Img15 from "../../assets/works/hubspace/15.png";
import Img16 from "../../assets/works/hubspace/16.png";

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
    { label: "SOURCE", text: "Official site", href: "https://afero.io/" },
    { label: "CLIENT", text: "afero.io", href: "https://afero.io/" }
  ];

  const tags: string[] = ["BRANDING & DECISION-DRIVEN DESIGN"];

  const images: WorkImage[] = [
    { src: Img01, alt: "Hubspace project image" },
    { src: Img02, alt: "Hubspace project image" },
    { src: Img03, alt: "Hubspace project image" },
    { src: Img04, alt: "Hubspace project image" },
    { src: Img05, alt: "Hubspace project image" },
    { src: Img06, alt: "Hubspace project image" },
    { src: Img07, alt: "Hubspace project image" },
    { src: Img08, alt: "Hubspace project image" },
    { src: Img09, alt: "Hubspace project image" },
    { src: Img10, alt: "Hubspace project image" },
    { src: Img11, alt: "Hubspace project image" },
    { src: Img12, alt: "Hubspace project image" },
    { src: Img13, alt: "Hubspace project image" },
    { src: Img14, alt: "Hubspace project image" },
    { src: Img15, alt: "Hubspace project image" },
    { src: Img16, alt: "Hubspace project image" }
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT (sticky) */}
        <div className="min-w-0 md:sticky md:top-[150px] md:self-start">
          <h1 className="text-[48px] font-medium leading-none text-base-800">Hubspace</h1>

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
              Hubspace is a smart home application developed by Afero, designed to
              manage devices from different brands through a single hub. Compatible with
              a wide range of products—ranging from smart bulbs to plugs, switches,
              and sensors—Hubspace simplifies setup and control. Users can personalize
              functions such as lighting, energy consumption, and scheduling, 
              while integrations with popular voice assistants like Amazon Alexa and Google Assistant 
              make home automation even more convenient.
            </p>
            <p>
              The foundation of Hubspace lies in Afero’s secure IoT platform, ensuring safe, 
              cloud-based communication between devices while also providing scalability and 
              high performance. With its user-friendly interface, streamlined onboarding, and 
              cross-brand interoperability, Hubspace stands out as a modern solution that makes 
              smart home technology more accessible and widely adoptable.
            </p>
            <p>
              <span className="font-medium">Core Stack:</span>{" "}
              Adobe Creative Cloud, Figma, Docusaurus
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
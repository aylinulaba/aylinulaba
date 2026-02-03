import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import Img01 from "../../assets/works/serviscell/01.jpg";
import Img02 from "../../assets/works/serviscell/02.jpg";
import Img03 from "../../assets/works/serviscell/03.jpg";
import Img04 from "../../assets/works/serviscell/04.jpg";
import Img05 from "../../assets/works/serviscell/05.jpg";
import Img06 from "../../assets/works/serviscell/06.jpg";
import Img07 from "../../assets/works/serviscell/07.jpg";

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
    { label: "SOURCE", text: "Official site", href: "https://serviscell.com.tr/" },
    { label: "CLIENT", text: "serviscell.com.tr", href: "https://serviscell.com.tr/" }
  ];

  const tags: string[] = ["DECISION-DRIVEN DESIGN"];

  const images: WorkImage[] = [
    { src: Img01, alt: "Serviscell project image" },
    { src: Img02, alt: "Serviscell project image" },
    { src: Img03, alt: "Serviscell project image" },
    { src: Img04, alt: "Serviscell project image" },
    { src: Img05, alt: "Serviscell project image" },
    { src: Img06, alt: "Serviscell project image" },
    { src: Img07, alt: "Serviscell project image" }
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT (sticky) */}
        <div className="min-w-0 md:sticky md:top-[150px] md:self-start">
          <h1 className="text-[48px] font-medium leading-none text-base-800">Serviscell</h1>

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
              Serviscell is a comprehensive mobile & web application solution designed to 
              digitize safety, comfort, and management processes in student transportation services. 
              The system offers a wide range of features, including route management, digital student 
              roll-calls, real-time parent notifications (boarding/disembarking, arrival at pickup points, 
              wait times, etc.), live vehicle tracking, voice calls and push notifications. 
              For school administrations, service operators and parents alike, the entire transportation 
              process is transparently monitored and managed both in real time and historically.
            </p>
            <p>
              Beyond software, the Serviscell platform integrates hardware and communication technologies 
              such as GPS, GSM/3G/GPRS, SMS, web and mobile applications to prioritize student safety. 
              It ensures compliance with personal data protection laws, anonymizes sensitive data, 
              records communications securely, and maintains trust across all parties. With modules for 
              route optimization, reporting & analytics, and intuitive dashboards, Serviscell streamlines 
              operations and delivers efficient control for service firms and school administrations alike.
            </p>
            <p>
              <span className="font-medium">Core Stack:</span>{" "}
              Adobe Xd
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
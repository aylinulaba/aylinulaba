import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import Img01 from "../../assets/works/dash0/01.jpg";
import Img02 from "../../assets/works/dash0/02.jpg";
import Img03 from "../../assets/works/dash0/03.jpg";
import Img04 from "../../assets/works/dash0/04.jpg";
import Img05 from "../../assets/works/dash0/05.jpg";
import Img06 from "../../assets/works/dash0/06.jpg";
import Img07 from "../../assets/works/dash0/07.jpg";
import Img08 from "../../assets/works/dash0/08.jpg";
import Img09 from "../../assets/works/dash0/09.jpg";
import Img10 from "../../assets/works/dash0/10.jpg";
import Img11 from "../../assets/works/dash0/11.jpg";
import Img12 from "../../assets/works/dash0/12.jpg";
import Img13 from "../../assets/works/dash0/13.jpg";
import Img14 from "../../assets/works/dash0/14.jpg";
import Img15 from "../../assets/works/dash0/15.jpg";

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
    { label: "SOURCE", text: "Official site", href: "https://www.dash0.com/" },
    { label: "CLIENT", text: "dash0.com", href: "https://www.dash0.com/" }
  ];

  const tags: string[] = ["BRANDING & DESIGN TO DELIVERY"];

  const images: WorkImage[] = [
    { src: Img01, alt: "Dash0 project image" },
    { src: Img02, alt: "Dash0 project image" },
    { src: Img03, alt: "Dash0 project image" },
    { src: Img04, alt: "Dash0 project image" },
    { src: Img05, alt: "Dash0 project image" },
    { src: Img06, alt: "Dash0 project image" },
    { src: Img07, alt: "Dash0 project image" },
    { src: Img08, alt: "Dash0 project image" },
    { src: Img09, alt: "Dash0 project image" },
    { src: Img10, alt: "Dash0 project image" },
    { src: Img11, alt: "Dash0 project image" },
    { src: Img12, alt: "Dash0 project image" },
    { src: Img13, alt: "Dash0 project image" },
    { src: Img14, alt: "Dash0 project image" },
    { src: Img15, alt: "Dash0 project image" },
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT (sticky) */}
        <div className="min-w-0 md:sticky md:top-[150px] md:self-start">
          <h1 className="text-[48px] font-medium leading-none text-base-800">Dash0</h1>

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
              Dash0 is an observability platform built on open standards,
              designed to help developers, SREs (Site Reliability Engineering),
              and platform engineers collect and analyze performance data from distributed
              systems—metrics, logs, traces, and resource context—in a single place.
              By relying on open standards such as OpenTelemetry, PromQL, and Perses,
              the platform simplifies data collection, querying, and visualization,
              enabling a flexible, standards-based approach without vendor lock-in.
              Dash0 aims to turn complex telemetry stacks into actionable insights through
              preconfigured dashboards, alerts, and integrations that allow for fast setup.
            </p>
            <p>
              The solution goes beyond basic data collection by increasing correlation
              between logs, metrics, and traces, making it easier to detect errors,
              performance bottlenecks, and system behavior more quickly. It also allows
              users to migrate existing Prometheus alerts and write flexible queries using PromQL,
              manage dashboards as code, and benefit from transparent pricing and
              resource-centric context. Recently, Dash0 has been expanding its capabilities with
              AI-powered features and intelligent assistants such as Agent0, adding stronger
              analysis and automation capabilities.
            </p>
            <p>
              <span className="font-medium">Core Stack:</span>{" "}
              Adobe Creative Cloud, Figma, Storybook, Docusaurus, 
              Tailwind CSS, JavaScript, React.js, Typescript, Next.js, Sanity, Spline, CI/CD
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
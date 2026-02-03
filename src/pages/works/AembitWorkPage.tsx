import { FiArrowLeft } from "react-icons/fi";
import Img01 from "../../assets/works/aembit/01.png";
import Img02 from "../../assets/works/aembit/02.png";
import Img03 from "../../assets/works/aembit/03.png";
import Img04 from "../../assets/works/aembit/04.png";
import Img05 from "../../assets/works/aembit/05.png";
import Img06 from "../../assets/works/aembit/06.png";
import Img07 from "../../assets/works/aembit/07.png";
import Img08 from "../../assets/works/aembit/08.png";
import Img09 from "../../assets/works/aembit/09.png";

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
    { label: "SOURCE", text: "Official site", href: "https://aembit.io" },
    { label: "CLIENT", text: "aembit.io", href: "https://aembit.io" }
  ];

  const tags: string[] = ["BRANDING & DESIGN TO DELIVERY"];

  const images: WorkImage[] = [
    { src: Img01, alt: "Aembit project image" },
    { src: Img02, alt: "Aembit project image" },
    { src: Img03, alt: "Aembit project image" },
    { src: Img04, alt: "Aembit project image" },
    { src: Img05, alt: "Aembit project image" },
    { src: Img06, alt: "Aembit project image" },
    { src: Img07, alt: "Aembit project image" },
    { src: Img08, alt: "Aembit project image" },
    { src: Img09, alt: "Aembit project image" }
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT (sticky) */}
        <div className="min-w-0 md:sticky md:top-[150px] md:self-start">
          <h1 className="text-[48px] font-medium leading-none text-base-800">aembit</h1>

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
              Aembit is a platform that automates authentication and authorization for microservices,
              APIs, and applications operating in cloud environments. Moving beyond traditional static
              key or certificate approaches, it enables secure and flexible communication between
              services, operating under zero trust principles. Every request is policy-driven,
              ensuring only authorized services can interact.
            </p>
            <p>
              The platform supports multiple cloud providers (AWS, GCP, Azure), integrates with
              Kubernetes, and works seamlessly with CI/CD workflows. Features such as logging,
              monitoring, and policy management give technical teams full control over system
              security.
            </p>
            <p>
              <span className="font-medium">Core Stack:</span>{" "}
              Adobe Creative Cloud, Figma, Storybook, Docusaurus, Metronic UI, Material UI, HTML,
              Tailwind CSS, JavaScript, React.js, Typescript, Postman, CI/CD
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
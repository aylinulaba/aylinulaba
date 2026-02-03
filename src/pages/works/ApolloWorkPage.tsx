import { FiArrowLeft } from "react-icons/fi";
import Img01 from "../../assets/works/apollo/01.png";
import Img02 from "../../assets/works/apollo/02.png";
import Img03 from "../../assets/works/apollo/03.png";
import Img04 from "../../assets/works/apollo/04.png";
import Img05 from "../../assets/works/apollo/05.png";
import Img06 from "../../assets/works/apollo/06.png";
import Img07 from "../../assets/works/apollo/07.png";
import Img08 from "../../assets/works/apollo/08.png";
import Img09 from "../../assets/works/apollo/09.png";
import Img10 from "../../assets/works/apollo/10.png";
import Img11 from "../../assets/works/apollo/11.png";
import Img12 from "../../assets/works/apollo/12.png";
import Img13 from "../../assets/works/apollo/13.png";
import Img14 from "../../assets/works/apollo/14.png";
import Img15 from "../../assets/works/apollo/15.png";
import Img16 from "../../assets/works/apollo/16.png";
import Img17 from "../../assets/works/apollo/17.png";
import Img18 from "../../assets/works/apollo/18.png";
import Img19 from "../../assets/works/apollo/19.png";
import Img20 from "../../assets/works/apollo/20.png";
import Img21 from "../../assets/works/apollo/21.png";
import Img22 from "../../assets/works/apollo/22.png";
import Img23 from "../../assets/works/apollo/23.png";
import Img24 from "../../assets/works/apollo/24.png";
import Img25 from "../../assets/works/apollo/25.png";
import Img26 from "../../assets/works/apollo/26.png";
import Img27 from "../../assets/works/apollo/27.png";
import Img28 from "../../assets/works/apollo/28.png";
import Img29 from "../../assets/works/apollo/29.png";
import Img30 from "../../assets/works/apollo/30.png";
import Img31 from "../../assets/works/apollo/31.png";
import Img32 from "../../assets/works/apollo/32.png";
import Img33 from "../../assets/works/apollo/33.png";
import Img34 from "../../assets/works/apollo/34.png";
import Img35 from "../../assets/works/apollo/35.png";
import Img36 from "../../assets/works/apollo/36.png";
import Img37 from "../../assets/works/apollo/37.png";
import Img38 from "../../assets/works/apollo/38.png";

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
    { label: "SOURCE", text: "Official site", href: "https://www.apollo.io/" },
    { label: "CLIENT", text: "apollo.io", href: "https://www.apollo.io/" }
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
    { src: Img09, alt: "Apollo project image" },
    { src: Img10, alt: "Apollo project image" },
    { src: Img11, alt: "Apollo project image" },
    { src: Img12, alt: "Apollo project image" },
    { src: Img13, alt: "Apollo project image" },
    { src: Img14, alt: "Apollo project image" },
    { src: Img15, alt: "Apollo project image" },
    { src: Img16, alt: "Apollo project image" },
    { src: Img17, alt: "Apollo project image" },
    { src: Img18, alt: "Apollo project image" },
    { src: Img19, alt: "Apollo project image" },
    { src: Img20, alt: "Apollo project image" },
    { src: Img21, alt: "Apollo project image" },
    { src: Img22, alt: "Apollo project image" },
    { src: Img23, alt: "Apollo project image" },
    { src: Img24, alt: "Apollo project image" },
    { src: Img25, alt: "Apollo project image" },
    { src: Img26, alt: "Apollo project image" },
    { src: Img27, alt: "Apollo project image" },
    { src: Img28, alt: "Apollo project image" },
    { src: Img29, alt: "Apollo project image" },
    { src: Img30, alt: "Apollo project image" },
    { src: Img31, alt: "Apollo project image" },
    { src: Img32, alt: "Apollo project image" },
    { src: Img33, alt: "Apollo project image" },
    { src: Img34, alt: "Apollo project image" },
    { src: Img35, alt: "Apollo project image" },
    { src: Img36, alt: "Apollo project image" },
    { src: Img37, alt: "Apollo project image" },
    { src: Img38, alt: "Apollo project image" }
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT (sticky) */}
        <div className="min-w-0 md:sticky md:top-[150px] md:self-start">
          <h1 className="text-[48px] font-medium leading-none text-base-800">Apollo</h1>

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
              Apollo is a B2B data and engagement platform designed to help sales
              and marketing teams reach their target audiences more quickly and accurately.
              By combining up-to-date company and contact data with AI-powered filtering
              and segmentation, the platform enables users to identify and connect with the
              right decision-makers. In addition, it provides direct management of outreach
              efforts through built-in email, dialer, and multi-channel communication features.
            </p>
            <p>
              Leveraging its robust technology stack, Apollo processes large datasets in
              real time and presents them through an intuitive user interface. This optimizes
              sales workflows, ensures teams reach the right people at the right moment,
              and accelerates the overall sales cycle. With its ability to integrate seamlessly
              into CRMs and other business tools, Apollo has become a critical solution within
              the modern sales ecosystem.
            </p>
            <p>
              <span className="font-medium">Core Stack:</span>{" "}
              Adobe Creative Cloud, Figma, Storybook, Tailwind CSS, React.js,
              Typescript, Next.js, Node.js, GraphQL, React Testing Library,
              Rest API, Postman, AWS, SAML, CI/CD
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
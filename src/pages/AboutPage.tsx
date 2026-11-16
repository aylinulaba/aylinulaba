import React from "react";
import { FaLinkedinIn, FaGithub, FaMediumM } from "react-icons/fa";
import { FiMail, FiDownload } from "react-icons/fi";

type SocialItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  tooltip: string;
};

type CoreBlock = {
  title: string;
  items: string[];
};

type ExperienceItem = {
  role: string;
  company: string;
  dates: string;
  skills: string;
};

function Divider() {
  return <div className="h-px origin-top scale-y-50 bg-base-950/50" />;
}

function SocialButton({ item }: { item: SocialItem }) {
  return (
    <div className="group relative inline-flex">
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        aria-label={item.label}
        className={[
          "inline-flex h-12 w-12 items-center justify-center rounded-lg",
          "border border-base-950/50 text-base-800",
          "transition-colors duration-150 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base-50"
        ].join(" ")}
      >
        <span className="inline-flex transition-transform transition-colors duration-150 ease-out group-hover:-translate-y-1 group-hover:text-base-950 group-focus-within:-translate-y-1 group-focus-within:text-base-950">
          {item.icon}
        </span>
      </a>

      <div
        role="tooltip"
        className={[
          "pointer-events-none absolute left-1/2 top-full z-10",
          "mt-2 -translate-x-1/2",
          "rounded-md bg-base-800 px-2 py-1",
          "text-12 font-medium text-base-50",
          "opacity-0 translate-y-1",
          "transition-all duration-150 ease-out",
          "group-hover:opacity-100 group-hover:translate-y-0",
          "group-focus-within:opacity-100 group-focus-within:translate-y-0"
        ].join(" ")}
      >
        {item.tooltip}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const socials: SocialItem[] = [
    {
      label: "LinkedIn",
      tooltip: "LinkedIn",
      href: "https://www.linkedin.com/in/aylinulaba/",
      icon: <FaLinkedinIn className="h-5 w-5" />
    },
    {
      label: "GitHub",
      tooltip: "GitHub",
      href: "https://github.com/aylinulaba",
      icon: <FaGithub className="h-5 w-5" />
    },
    {
      label: "Medium",
      tooltip: "Medium",
      href: "https://medium.com/@aylinulaba",
      icon: <FaMediumM className="h-5 w-5" />
    },
    {
      label: "Email",
      tooltip: "Email",
      href: "mailto:thingbyaylin@aylinulaba.com",
      icon: <FiMail className="h-5 w-5" />
    },
    {
      label: "Resume",
      tooltip: "Resume",
      href: "/resume.pdf",
      icon: <FiDownload className="h-5 w-5" />
    }   
  ];

  const coreLeft: CoreBlock[] = [
    {
      title: "Decision-driven UX",
      items: [
        "UX Research",
        "Affinity Diagramming",
        "Insight Synthesis",
        "User Journeys & Flows",
        "Usability Testing",
        "Information Architecture",
        "Data-informed Design",
        "Interaction Design"
      ]
    },
    {
      title: "Marketing",
      items: [
        "Brand Strategy",
        "Campaign Design",
        "Social Media Design",
        "Landing Page Design",
        "Content Strategy",
        "Marketing Frameworks",
        "Conversion Optimization",
        "Marketing Collateral"
      ]
    }
  ];

  const coreRight: CoreBlock[] = [
    {
      title: "Product & system design",
      items: [
        "UI Design",
        "UX Design",
        "Visual Design",
        "Design Systems",
        "Component Libraries",
        "Prototyping",
        "Motion for Interaction",
        "Brand Principles"
      ]
    },
    {
      title: "Design to delivery",
      items: [
        "UI Development",
        "Development Documentation",
        "Git & CI/CD",
        "Design Handoff",
        "Accessibility (a11y)",
        "Agile Methodologies",
        "AI-Assisted Design",
        "AI Workflow Automation"
      ]
    }
  ];

  const experience: ExperienceItem[] = [
    {
      role: "AI-Driven Designer",
      company: "BlueNet - cliexa",
      dates: "2026-present",
      skills:
        "Building and continuously refining an AI-powered marketing and design framework that supports creative production, from campaign assets and design variations to documentation and automated workflows. Developing integrated systems that enhance consistency, scalability, and efficiency across design and production processes."
    },
    {
      role: "UI / UX Designer",
      company: "BlueCloud - InXpress",
      dates: "2024-2026",
      skills:
        "Led UX-focused product redesigns, translating research and usability insights into improved user flows and interfaces. Built scalable design systems to ensure consistency, streamline cross-functional collaboration, and support ongoing product development."
    },
    {
      role: "Designer & UI Developer",
      company: "broadAngle",
      dates: "2019-2024",
      skills:
        "Designed and developed user interfaces from initial concept to production. Built reusable UI components and maintainable design structures, bridging design and development to deliver consistent, scalable, and user-centered digital products."
    }
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="min-w-0 md:sticky md:top-[150px] self-start">
          <div className="flex flex-wrap gap-4">
            {socials.map((s) => (
              <SocialButton key={s.label} item={s} />
            ))}
          </div>

          <div className="mt-8 space-y-6 text-15 font-extralight text-base-800">
            <p>
              I'm a Designer and UI Developer with over 10 years of experience across branding, marketing, and User Experience (UX) design. I partner with diverse technical and business teams to shape scalable products, from brand identity and marketing campaigns to interfaces and design systems. I build the frameworks and tools behind that work, automating workflows and adding structure and speed to the design process.
            </p>
            <p>
              I care as much about craft as I do about strategy, aligning business goals with user needs and managing stakeholder expectations through every phase of a project. Whether it's a brand system, a product interface, or an automated workflow, I aim for the same thing: design that feels intentional, cohesive, and true to the brand.
            </p>
          </div>
        </div>

        <div className="min-w-0">
          <h2 className="text-20 font-medium text-base-800">CORE</h2>

          <div className="mt-4">
            <div className="md:hidden">
              <Divider />
            </div>
            <div className="hidden md:grid md:grid-cols-2 md:gap-10">
              <Divider />
              <Divider />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="space-y-8">
              {coreLeft.map((block, idx) => (
                <div key={block.title} className="space-y-4">
                  <div className="text-14 font-medium text-base-800">{block.title}</div>
                  <ul className="space-y-1 text-14 font-extralight text-base-800">
                    {block.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  {idx !== coreLeft.length - 1 ? (
                    <div className="md:hidden">
                      <Divider />
                    </div>
                  ) : null}

                  {idx === 0 ? (
                    <div className="hidden md:block">
                      <Divider />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="space-y-8 md:-mt-8">
              <div className="md:hidden">
                <Divider />
              </div>

              {coreRight.map((block, idx) => (
                <div key={block.title} className="space-y-4">
                  <div className="text-14 font-medium text-base-800">{block.title}</div>
                  <ul className="space-y-1 text-14 font-extralight text-base-800">
                    {block.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  {idx === 0 ? <Divider /> : null}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-20 font-medium text-base-800">EXPERIENCE</h2>
            <div className="mt-4">
              <Divider />
            </div>

            <div className="mt-6 space-y-8">
              {experience.map((x, idx) => (
                <div key={x.role} className="space-y-4">
                  <div className="flex items-start justify-between gap-6">
                    <div className="text-14 font-medium text-base-800">{x.role}</div>
                    <div className="text-14 font-extralight text-base-800">
                      {x.company}, {x.dates}
                    </div>
                  </div>

                  <div className="text-14 font-medium text-base-800">
                    Achievements: <span className="font-extralight">{x.skills}</span>
                  </div>

                  {idx !== experience.length - 1 ? <Divider /> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
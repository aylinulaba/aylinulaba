import { Link } from "react-router-dom";

type WorkItem = {
  no: number;
  category: string;
  title: string;
  slug: string;
};

const works: WorkItem[] = [
  { no: 19, category: "BRANDING & DESIGN TO DELIVERY", title: "aembit", slug: "aembit" },
  { no: 18, category: "BRANDING & DESIGN TO DELIVERY", title: "Dash0", slug: "dash0" },
  { no: 17, category: "BRANDING & DESIGN TO DELIVERY", title: "Apollo", slug: "apollo" },
  { no: 16, category: "BRANDING & DESIGN TO DELIVERY", title: "The Raum Objects", slug: "the-raum-objects" },
  { no: 15, category: "BRANDING & DECISION-DRIVEN DESIGN", title: "Hubspace", slug: "hubspace" },
  { no: 14, category: "BRANDING", title: "Koppico", slug: "koppico" },
  { no: 13, category: "BRANDING & PRODUCT AND SYSTEM DESIGN", title: "Komma", slug: "komma" },
  { no: 12, category: "BRANDING", title: "A f*cking good coffee", slug: "a-fucking-good-coffee" },
  { no: 11, category: "BRANDING & DESIGN TO DELIVERY", title: "Berabucks", slug: "berabucks" },
  { no: 10, category: "BRANDING & PRODUCT AND SYSTEM DESIGN", title: "Mediflow", slug: "mediflow" },
  { no: 9, category: "BRANDING & DECISION-DRIVEN DESIGN", title: "Günseven", slug: "gunseven" },
  { no: 8, category: "BRANDING & PRODUCT AND SYSTEM DESIGN", title: "TrackFit", slug: "trackfit" },
  { no: 7, category: "BRANDING", title: "Fleurea", slug: "fleurea" },
  { no: 6, category: "GAME DESIGN", title: "World of Monsters", slug: "world-of-monsters" },
  { no: 5, category: "BRANDING & PRODUCT AND SYSTEM DESIGN", title: "kokköpi", slug: "kokkopi" },
  { no: 4, category: "DECISION-DRIVEN DESIGN", title: "Serviscell", slug: "serviscell" },
  { no: 3, category: "BRANDING", title: "Sodek", slug: "sodek" },
  { no: 2, category: "DECISION-DRIVEN DESIGN", title: "erasmusport", slug: "erasmusport" },
  { no: 1, category: "PRODUCT AND SYSTEM DESIGN", title: "Nerede Ne Yenir?", slug: "nerede-ne-yenir" }
];

export default function WorkPage() {
  return (
    <section className="w-full">
      <h1 className="text-20 font-extralight text-base-800">
        Selected Works
      </h1>

      <div className="mt-10 space-y-7">
        {works.map((w) => (
          <div key={w.no} className="space-y-1.5">
            <div className="text-12 font-medium text-base-500">
              {w.category}
            </div>

            <div className="flex items-baseline gap-3">
              <div className="w-5 shrink-0 text-12 font-medium text-base-950">
                {w.no}
              </div>

              <Link
                to={`/work/${w.slug}`}
                className="text-20 font-medium text-base-800 transition-colors hover:text-base-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                {w.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
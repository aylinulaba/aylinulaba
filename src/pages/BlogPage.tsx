import { Link } from "react-router-dom";

type BlogItem = {
  id: number;
  title: string;
  keywords: string;
  to: string;
};

export default function BlogPage() {
  const posts: BlogItem[] = [
    { id: 4, keywords: "UX, USER-FRIENDLY", title: "Conscious Difficulty", to: "/blog/conscious-difficulty" },
    { id: 3, keywords: "DESIGN, HUMAN-CENTERED DESIGN, DATA-DRIVEN DESIGN, DESIGN PRINCIPLES", title: "Does It Feel Right?", to: "/blog/does-it-feel-right" },
    {
      id: 2,
      keywords: "LIFESTYLE, BUKOWSKI",
      title: "Style Is the Answer to Everything",
      to: "/blog/style-is-the-answer-to-everything"
    },
    { id: 1, keywords: "EXPERIENCE, IDEA", title: "That Thing You Love", to: "/blog/that-thing-you-love" }
  ];

  return (
    <section className="w-full">

      <div className="space-y-6">
        {posts.map((p) => (
          <div key={`${p.id}-${p.to}`} className="space-y-2">
            <div className="text-12 font-medium text-base-500 uppercase tracking-wide">
              {p.keywords}
            </div>

            <div className="flex items-baseline gap-4">
              <div className="text-12 font-medium text-base-950">{p.id}</div>

              <Link
                to={p.to}
                className="text-20 font-medium text-base-800 transition-colors hover:text-base-950"
              >
                {p.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
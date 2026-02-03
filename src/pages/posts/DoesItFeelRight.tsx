import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

type PostMeta = {
  readingTime: string;
  tags: string[];
};

export default function DoesItFeelRight() {
  const meta: PostMeta = {
    readingTime: "7 min",
    tags: ["Design", "Human-Centered Design", "Data-Driven Design", "Design Principles"]
  };

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT (sticky) */}
        <div className="min-w-0 md:sticky md:top-[150px] md:self-start">
          <h1 className="text-[48px] font-medium leading-[1.05] text-base-800">
            Does It Feel Right
          </h1>

          <div className="mt-8 space-y-2 text-14 text-base-800">
            <div>
              <span className="font-medium">Reading time:</span>{" "}
              <span className="font-extralight">{meta.readingTime}</span>
            </div>

            <div>
              <span className="font-medium">Tags:</span>{" "}
              <span className="font-extralight">{meta.tags.join(", ")}</span>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/blog"
              className={[
                "group inline-flex items-center gap-2",
                "text-15 font-extralight text-base-950",
                "transition-colors hover:text-base-950",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base-50"
              ].join(" ")}
            >
              <FiArrowLeft className="h-4 w-4 text-base-950 transition-transform duration-150 ease-out group-hover:-translate-x-1" />
              <span>return to blog posts</span>
            </Link>
          </div>
        </div>

        {/* RIGHT (post body) */}
        <div className="min-w-0">
          <div className="space-y-8 text-[16px] font-extralight leading-relaxed text-base-800">
            <p>
              Design is often taught as a rigid set of rules. At first glance, this makes sense. Even if we call them “rules,” it might be more accurate to think of them as “fundamental principles.”
            </p>

            <p>
              These principles extend far beyond the canvas; they permeate every field of design, from graphic arts to cinema and even architecture.
            </p>

            <p>
              Mastering these fundamentals is key to becoming a better designer. They provide a foundation for beginners who are trying to grasp harmony, balance, and proportion. All of these “rules” offer a framework that helps us produce visually pleasing—some might say “correct”—design solutions.
            </p>

            <p>
              These “rules” existed long before design acquired its modern meaning. They range from the rule of thirds in photography to the golden ratio in architecture and color theory in painting.
            </p>

            <p>
              Initially, these principles emerged from a more holistic source of inspiration, but over time they became increasingly detailed and technical. Today, there seems to be a design rule for almost everything. Most of these rules are defined by criteria such as accessibility, efficiency, and productivity.
            </p>

            <p>
              To a certain extent, this is reasonable. If something “works,” we tend to analyze it systematically and turn it into rules so that it can be replicated in the future and the process can be accelerated.
            </p>

            <p>
              However, over the past decade, for many valid reasons, we have become increasingly dependent on these rules:
            </p>

            <p>
              - Following rules is easy. They provide direction and tools for many people who want to work in design, even if they lack innate talent. Especially for beginners, this is not necessarily a bad thing.
              - Rules function like a recipe for success. It is similar to a “paint by numbers” approach: you complete the picture, but it is not truly yours.
              - Taking refuge in rules offers a false sense of competence and superiority—the kind you feel when you correct someone by saying, “According to Human-Centered Design Principles, section 5, article 174, this is not done that way.” Social media and influencer culture have only amplified this tendency.
            </p>

            <p>
              But what happens when we turn these rules into unquestionable laws? Design becomes dull. At best, it becomes predictable.
            </p>

            <p>
              “Learn the rules, then break them.” This quote, often attributed to Picasso, captures the idea that learning the fundamentals is necessary, but true creativity lies in knowing when and how to disregard them.
            </p>

            <p>
              The answer to all of this lies in using our eyes—and our hearts.
            </p>

            <p>
              Great designers do not merely see; they perceive. They look beyond the surface and sense the emotional impact of their work. A composition placed slightly off-center can create tension; an unconventional color palette can evoke nostalgia. These choices break the rules, yet they feel right because they resonate on a deeper level.
            </p>

            <p>
              This tension between what is “correct” and what “feels right” is especially evident in cinema. On one side, there are films engineered for box-office success, closely following proven formulas. These productions often adhere strictly to established design principles. Think of the ubiquitous orange-and-teal color grading in action films, which leverages color theory to make scenes more striking. Or consider the perfectly timed narrative beats of romantic comedies, carefully arranged to elicit predictable emotional responses from the audience.
            </p>

            <p>
              While these techniques are effective, they can feel manipulative, guiding us along a pre-scripted emotional path. The design is “correct,” but it lacks soul. Such films feel as though they were generated by an algorithm rather than an artist.
            </p>

            <p>
              In a way, we have all become servants of these algorithms. Excessively rigid design rules pull us away from what truly feels right and reduce us to the level of machines. We call this “data-driven design.”
            </p>

            <p>
              On the other side are films devoted entirely to art—works that prioritize personal expression over commercial concerns. Directors such as David Lynch, Wong Kar-wai, and Andrei Tarkovsky are known for their distinctive visual languages.
            </p>

            <p>
              These directors design with their hearts. Drawing on their experiences and personal perspectives, they capture not only images but emotions. By conventional standards, their work may not be “correct,” but for those who connect with it, it feels profoundly right. These films do not merely tell a story; they make the audience experience it viscerally.
            </p>

            <p>
              In an era where algorithms and analytics dictate design rules, heart-driven design is needed more than ever. A/B tests and user data have their place, but they cannot measure the ineffable qualities that make a design truly compelling—charm, wit, or a human touch.
            </p>

            <p>
              This does not mean that design rules should be abandoned entirely. To break the rules effectively, a designer must first know them. Moreover, for those working within predefined systems—such as UX design—the room to bend the rules is limited. The issue is not about turning a square button into a circle simply to showcase “personal style.” The issue is designing from the heart. If it feels right, it probably is. There is never only one way to solve a problem, and that solution does not always have to conform to the “accepted standard.”
            </p>

            <p>
              Naturally, as experience grows, so does trust in one’s intuition—but reaching that point takes years. That, after all, is precisely why rules exist in the first place: to guide us at the beginning of the journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
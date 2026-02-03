import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

type PostMeta = {
  readingTime: string;
  tags: string[];
};

function Divider() {
  return <div className="h-px origin-top scale-y-50 bg-base-950/50" />;
}

export default function ThatThingYouLove() {
  const meta: PostMeta = {
    readingTime: "5 min",
    tags: ["Experience", " Idea"]
  };

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT (sticky) */}
        <div className="min-w-0 md:sticky md:top-[150px] md:self-start">
          <h1 className="text-[48px] font-medium leading-[1.05] text-base-800">
            That Thing You Love
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
              There is something special—almost pure—about experiencing something for the first time entirely on your own.
            </p>

            <p>
              You know what I mean. It might be a book, a game, or a newly opened restaurant.
            </p>

            <p>
              In that first moment, there is only you and the thing itself. No one from the outside tells you what to think or how to feel.
            </p>

            <p>
              Your initial reaction is precious for that very reason, because it is the only truly honest response you give.
            </p>

            <p>
              Then comes the fatal mistake. You take out your phone and start reading what others think. Perhaps you are seeking a human connection—which is perfectly reasonable. Perhaps you are looking for validation of your feelings. Perhaps you want deeper context or meaning. But more often than not, what you find is the slow, almost imperceptible death of your own experience.
            </p>

            <p>
              At first, everything feels great. You are excited because you think you have finally found your people—a community of others who share your interest. But once you start scrolling, you are met with critiques, forums, endless streams of comments. The thing you just fell in love with begins to fracture under the weight of other people’s opinions. That wonderful feeling inside you starts to fade. You are no longer sure.
            </p>

            <p>
              Let me give an example. Imagine you watch a film and absolutely love it—especially the lead actor, who is not very well known but feels charming and genuine to you. Then you go online and read that most people disliked this actor. They point out flaws, claim the performance was terrible overall. What are you supposed to think now? Can you still love the film? Or do you need to go back and reassess it? At this point, doubt creeps into everything, and the deeper you go, the worse it gets.
            </p>

            <p>
              I see this all the time. People like something and immediately look around to ask: “Am I allowed to like this?”
            </p>

            <p>
              The internet has made this far worse. In the past, you had to actively seek out people who would kill the thing you loved. Now they are everywhere. Critics, forums, comment sections, “real fans,” random voices—always ready to jump in with an innocent-sounding “but actually…”
            </p>

            <p>
              And it does not even have to be harsh criticism. A small detail is enough. A tiny plot hole you missed, a minor continuity error in the film, or a problematic comment the actor made on television ten years ago. Once you see it, there is no going back. Your experience is permanently tainted. That is the real tragedy: returning to your original feeling is almost impossible. The love is gone, and it does not come back.
            </p>

            <p>
              I have experienced this many times in my own life. Believe it or not, I experienced it in design communities as well. I loved designing, but the deeper I immersed myself in online design communities, the more distant I became from design. Instead of enjoying the act of creating, I was constantly trying to conform to the community.
            </p>

            <p>
              I felt the same thing with road cycling. I loved riding, but “hardcore cyclists” drained my enthusiasm. The voices saying, “You can’t do that with this,” or “You have to do it this way anyway,” erased that pure love. All I ever wanted was to ride a bike.
            </p>

            <p>
              Do not misunderstand me—I am not against criticism or ideas. Perhaps I am even a voice you should ignore. But the space between you and the thing that moves you, before the weight of the world presses in and distorts it, is something worth protecting.
            </p>

            <p>
              We are social animals, after all; we want to connect and to agree. But sometimes the greatest validation is experiencing something purely on your own terms.
            </p>

            <p>
              I am talking about being able to say: “This matters to me. I do not need to know why, nor do I need anyone else to agree.”
            </p>

            <p>
              So the next time you find something that resonates with you, maybe you should keep it to yourself. Or don’t—but remember this: the moment you start caring about what others think, you have already given up something that was pure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
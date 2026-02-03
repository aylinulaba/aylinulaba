import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

type PostMeta = {
  readingTime: string;
  tags: string[];
};

export default function StyleIsTheAnswerToEverything() {
  const meta: PostMeta = {
    readingTime: "6 min",
    tags: ["Lifestyle", " Bukowski"]
  };

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT (sticky) */}
        <div className="min-w-0 md:sticky md:top-[150px] md:self-start">
          <h1 className="text-[48px] font-medium leading-[1.05] text-base-800">
            Style is the Answer to Everything
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
              “Style is the answer to everything.
              It is a fresh way of approaching something dull or dangerous.
              Doing a dull thing with style is preferable to doing a dangerous thing without it.
              Doing a dangerous thing with style—that is what I call art.
            </p>

            <p>
              Bullfighting can be art.
              Boxing can be art.
              Loving can be art.
              Even opening a can of sardines can be art.
            </p>

            <p>
              Very few people have style.
              Even fewer can maintain it.
              I have seen more style in some dogs than in people,
              though most dogs have no style either.
              Cats, on the other hand, have plenty of it.
            </p>

            <p>
              When Hemingway put his brain against the wall and pulled the trigger—that, too, was style.
              Sometimes people give you style as well.
              Joan of Arc had style.
              John the Baptist.
              Jesus.
              Socrates.
              Caesar.
              García Lorca.
            </p>

            <p>
              I met men with style in prison—
              more than I ever met outside.
              Style is difference; it is the manner of doing, the manner of being done.
              Like six herons standing silently in a puddle of water,
              or you walking naked from the bathroom without noticing me.”
            </p>

            <p>
              This piece belongs to Charles Bukowski. It is one of my favorites. I think this poem may be among the finest pieces ever written. I have read it countless times.
            </p>

            <p>
              Bukowski understood something about style that today’s influencers—and designers—fail to fully grasp: style is not what you wear or how you present your brand; it is how you carry the weight of living.
            </p>

            <p>
              Looking for style in myself or in others is probably a lifelong obsession of mine. That fixation began with skateboarding. Style exists beyond technical complexity.
            </p>

            <p>
              Anyone can learn a kickflip with enough repetition. But those who could infuse that movement with their own spirit, their own flow—that is who we admired. The mathematics of a technically complex trick meant nothing next to the poetry of a simple one.
            </p>

            <p>
              But style is not only about winning; it is also about losing. Style is a matter of stance. It is preserving dignity even while being humiliated. It is finding beauty in the ugliness of danger—while falling down fifteen steps attempting a frontside boardslide. Style is how you fall, how you tumble, how you get back up. Even if you do not land the trick, style is still there.
            </p>

            <p>
              Skateboarders with style are rare, but when you see one, you know it. The flow of the body, the expression on the face, the board seeming to move in slow motion… You cannot quite define it; you simply feel it. It is like a dance.
            </p>

            <p>
              Style is its own victory. It plays by its own rules. It is not decided in PowerPoint presentations, nor created in brainstorming sessions. It cannot be forced. It comes from deep within. It is the voice of the soul—the strength to remain yourself in an age that constantly tries to straighten you out.
            </p>

            <p>
              In this era—crowded with fabricated identities and artificial personas—having style is like finding gold. You cannot buy it. You cannot imitate it. You earn it only by living, by making mistakes, by falling and getting back up. Some say that a person can only have style once they learn to fully accept and love themselves.
            </p>

            <p>
              Style is present in how you load the dishwasher. In the way you put on your pants, in how you spit out toothpaste. But it is also in how you do your work. It is an invisible signature that runs through your entire career.
            </p>

            <p>
              Style is the answer to everything because it is the one thing that cannot be taken from you.
            </p>

            <p>
              What matters is not what you do, but how you do it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
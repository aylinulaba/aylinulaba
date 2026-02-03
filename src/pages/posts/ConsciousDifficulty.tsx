import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

type PostMeta = {
  readingTime: string;
  tags: string[];
};

function Divider() {
  return <div className="h-px origin-top scale-y-50 bg-base-950/50" />;
}

export default function ConsciousDifficulty() {
  const meta: PostMeta = {
    readingTime: "8 min",
    tags: ["UX", "User-Friendly"]
  };

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT (sticky) */}
        <div className="min-w-0 md:sticky md:top-[150px] md:self-start">
          <h1 className="text-[48px] font-medium leading-[1.05] text-base-800">
            Conscious Difficulty
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
              Over the past decade, designers—particularly those working in software and UX—have become almost singularly focused on one goal: making everything easier. User-friendliness has taken precedence over all else. It still does.
            </p>

            <p>
              From operating systems to mobile apps, from games to web services, our default reflex has been the same: simplify the task, eliminate points of friction, never tire the user. The origin of this approach is entirely understandable. Computers were once complex, intimidating tools usable only by specialists. Through design, software moved beyond expert domains and entered everyday life. Today, one does not need to be a nerd to use a computer.
            </p>

            <p>
              The fact that billions of people can access software today owes much to this obsession with simplification. Yet along the way, we also adopted certain assumptions almost without question: the easier something is, the better it is; difficulty is bad; the best interface is one that requires no learning. Have we not been telling each other this for years?
            </p>

            <p>
              When this mindset was extended from everyday software to games, things began to feel somewhat strange.
            </p>

            <p>
              As games became more accessible—with step-by-step tutorials, constant guidance systems, forgiving checkpoints, and adjustable difficulty levels—players began to experience a peculiar sense of emptiness. The satisfaction of truly accomplishing something diminished. Challenges started to feel “watered down.” The profound sense of achievement once produced by clearing a level after hours of struggle was replaced by brief, pleasant, but ultimately forgettable experiences.
            </p>

            <p>
              Older games had a distinct spirit. They were unforgiving. They demanded patience. Often, they were outright frustrating. But precisely for that reason, they were memorable. Many were born from the pure passion of a single developer or a small team. Today, games are shaped by large teams, UX research, and accessibility targets. Yet something interesting happened: moments that once seemed impossible became the very elements that bound players to these games. That is why they are still discussed today. Many are timeless. By contrast, a great number of games released in recent years are forgotten after only a few years.
            </p>

            <p>
              When everything is easy, nothing truly feels valuable.
            </p>

            <p>
              This reflects a fundamental human condition. People value what they work for, struggle with, and endure patiently. The pride of mastering a skill, the sense of growing competence, the feeling of belonging to a community that speaks the same language—none of these emerge in the absence of obstacles to overcome. This is true not only for games but for nearly every aspect of life. Things that require no struggle are usually fleeting.
            </p>

            <p>
              Why did the game industry change? Because growth became its primary objective. Easy games always appeal to broader audiences. Difficult, mentally demanding games remain niche. If growth is the sole metric, this preference makes sense—but it is typically a short-term logic.
            </p>

            <p>
              So what does this have to do with software design?
            </p>

            <p>
              When we look at the evolution of software, we see a similar trend toward excessive simplification. Modern interfaces increasingly shave off depth and complexity, sometimes to the point of underestimating the user. Today, when one sits down at the UX table, the default assumption is often this: “The user will not understand this.”
            </p>

            <p>
              Worse still, this approach creates a self-validating loop.
            </p>

            <p>
              As software thinks and decides on our behalf, our ability to engage with complex systems atrophies. We lose confidence in dealing with difficulty. We become accustomed to experiences that constantly guide us and plan every step for us. As a result, genuine mastery—truly understanding a system—becomes increasingly rare.
            </p>

            <p>
              The irony is that this well-intentioned over-simplification limits both users’ growth and designers’ creative freedom. It traps us within certain patterns. The space to produce new, bold, and different ideas shrinks. We become prisoners of the systems we ourselves have built.
            </p>

            <p>
              But there is light at the end of the tunnel.
            </p>

            <p>
              I believe there is another path. I call it “conscious difficulty”: the idea that difficulty is not a flaw but a feature when applied in the right place. This is not an argument for making everything complex. The issue is knowing what should be difficult, and where. Well-designed complexity creates new possibilities; poorly designed complexity merely exhausts.
            </p>

            <p>
              Difficulty placed in the right context binds users more deeply to the experience. Just as the challenge of old games created loyal players, software tools with a meaningful learning curve can transform ordinary users into true experts over time—and these users genuinely enjoy using the tool.
            </p>

            <p>
              The impact is not visible only in metrics. Power users gather, communities form, and natural brand advocates emerge.
            </p>

            <p>
              Snapchat is a compelling example.
            </p>

            <p>
              Early versions of Snapchat’s interface openly defied classical UX rules. For many, it was confusing, even seemingly unusable. Yet this very difficulty created a sense of belonging among those who understood it. For young users, Snapchat became a digital space from which they could exclude their parents—precisely because parents did not even want to attempt to figure it out.
            </p>

            <p>
              Those who learned Snapchat shared the feeling of “we figured this out.” This collective learning process bound them both to the platform and to each other. What initially appeared to be a problem became a core part of the culture, producing a level of loyalty many companies still aspire to achieve.
            </p>

            <p>
              Let me be clear: I believe foundational tools and everyday productivity software should be simple. But in tools that require creative production or professional expertise, a certain degree of complexity and learning enriches the user. These are not merely tools that get work done; they are experiences that cultivate the individual.
            </p>

            <p>
              Every decision we make as designers has consequences. Sometimes users need guidance. Sometimes they need to be challenged. And sometimes they need a space of freedom that feels uncomfortable at first.
            </p>

            <p>
              Let me illustrate this with a personal example.
            </p>

            <p>
              When I moved from Photoshop to XD, and then quickly from XD to Figma, I experienced a strange sensation: I felt like I was becoming a worse designer—less creative.
            </p>

            <p>
              Figma is extraordinarily efficient for interface design. For the work I do today, it is far more suitable than Photoshop. Yet this efficiency comes with invisible constraints. Figma’s structure subtly pushes design decisions in certain directions. Speed and order are excellent, but they also draw you toward specific patterns.
            </p>

            <p>
              Photoshop, by contrast, is messy, chaotic, and ruleless. But that disorder provides a peculiar sense of freedom. It is an open-ended space where what you do is entirely up to you. It is slower and more demanding, but it often produces more original ideas. Photoshop is a difficult tool. It demands patience. But when you persist, it truly opens different doors.
            </p>

            <p>
              We often say, “Tools do not matter.” In reality, they matter somewhat. The nature of a tool—what it makes easy and what it makes difficult—quietly shapes how we think and what we create, often without us realizing it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
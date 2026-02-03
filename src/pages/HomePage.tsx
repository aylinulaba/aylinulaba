import Illustration from "../assets/illustrations/aylin.svg";

export default function HomePage() {
  return (
    <section className="min-h-[calc(100vh-150px)] w-full">
      <div className="flex min-h-[calc(100vh-150px)] w-full items-center justify-center">
        <figure className="w-full max-w-[520px] md:max-w-[640px] lg:max-w-[760px]">
          <img
            src={Illustration}
            alt="Aylin"
            className="h-auto w-full select-none"
            draggable={false}
            loading="eager"
          />
        </figure>
      </div>
    </section>
  );
}
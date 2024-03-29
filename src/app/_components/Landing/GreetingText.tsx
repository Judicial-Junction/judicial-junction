import clsx from "clsx";
export default function GreetingText() {
  return (
    <section className="w-screen  sm:hidden  md:py-12 lg:py-24 xl:py-32">
      <div className="container px-2 md:px-4">
        <div className="flex flex-col items-center space-y-2 text-center md:space-y-4">
          <div className="space-y-1 md:space-y-2">
            <h1
              className={clsx(
                "text-2xl font-bold tracking-tighter sm:text-4xl md:text-3xl lg:text-6xl/none",
              )}
            >
              Welcome to Digital Adhivakta
            </h1>
            <p className="mx-auto max-w-[500px] text-sm text-zinc-500 dark:text-zinc-400 md:text-xl">
              Revolutionizing the Legal-Tech Space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { title } from "@/app/_components/primitives";

export default function Unauthenticated() {
  return (
    <section className="mt-20 flex items-center justify-center justify-items-center">
      <div className="mt-36 max-w-lg justify-center gap-4 text-center">
        <h1 className={title({ color: "violet" })}>Login&nbsp;</h1>
        <h1 className={title()}>to use this page</h1>
      </div>
    </section>
  );
}

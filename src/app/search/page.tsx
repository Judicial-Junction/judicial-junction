import { Divider } from "@nextui-org/divider";
import SearchText from "./_component/text";
export default function Search() {
  return (
    <section className="mt-20 flex items-center justify-center justify-items-center">
      <div className="mt-15 justify-center  text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-3xl lg:text-6xl/none">
          Search
        </h1>
        <Divider className="my-4 opacity-0" />
        <SearchText />
      </div>
    </section>
  );
}

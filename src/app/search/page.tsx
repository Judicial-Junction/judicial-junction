import { Divider } from '@nextui-org/divider';
import SearchText from './_component/text';
export default function Search() {
  return (
    <section className="flex items-center justify-items-center justify-center mt-20">
      <div className="text-center justify-center  mt-15">
        <h1 className="text-4xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-6xl/none">
          Search
        </h1>
        <Divider className="my-4 opacity-0" />
        <SearchText />
      </div>
    </section>
  );
}

import clsx from "clsx";
import FeaturesDropdownLanding from "./_components/Landing/FeaturesDropdownLanding";
import GreetingText from "./_components/Landing/GreetingText";
import ImageMapCard from "./_components/Landing/ImageMapCard";
import ImageCard from "./_components/Landing/ImageSearchCard";
import TextAnimation from "./_components/Landing/text";
import { subtitle } from "./_components/primitives";
export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center justify-items-center gap-4 py-8 md:py-10">
        <div className="mt-40 hidden text-[19px] sm:flex">
          <TextAnimation />
        </div>
        <div className="mt-8 flex flex-col gap-3 ">
          <GreetingText />
          <div className="mx-auto mt-6 sm:hidden">
            <FeaturesDropdownLanding />
          </div>
          <div className=" mx-auto mt-14 hidden flex-col">
            <h1 className={clsx(subtitle(), "text-center text-xl font-bold")}>
              Our services
            </h1>
            <div className="mt-16 flex gap-24">
              <ImageCard />
            </div>
          </div>
          <div className="mx-auto mt-14 flex flex-col  sm:hidden">
            <h1 className={clsx(subtitle(), "text-center text-xl font-bold")}>
              Our services
            </h1>
            <div className="mt-6 ">
              <ImageCard />
              <hr className=" my-6 border-t-0" />
              <ImageMapCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

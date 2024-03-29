import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import Link from "next/link";
export default function ImageMapCard() {
  return (
    <>
      <Card className="col-span-12 h-[300px] sm:col-span-4">
        <Link prefetch={true} href={"/map"}>
          <CardHeader className="absolute top-1 z-10 flex-col !items-start">
            <p className=" text-tiny font-bold uppercase text-white/60">
              Lawyer search
            </p>
            <h4 className="   ml-16 text-medium font-bold text-black">
              Search lawyers by location
            </h4>
          </CardHeader>

          <Image
            removeWrapper
            as={NextImage}
            alt="Card background"
            className="z-0 h-full w-full object-cover"
            src="/CardImage3.jpeg"
            width="300"
            height="200"
          />
        </Link>
      </Card>
    </>
  );
}

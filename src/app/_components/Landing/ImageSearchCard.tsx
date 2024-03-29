import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import Link from "next/link";
export default function ImageSearchCard() {
  return (
    <>
      <Card className="col-span-12 h-[300px] sm:col-span-4">
        <Link prefetch={true} href={"/search"}>
          <CardHeader className="absolute top-1 z-10 flex-col !items-start">
            <p className="text-tiny font-bold uppercase text-white/60">
              Contextual search
            </p>
            <h4 className="   text-medium font-bold text-amber-400">
              Search previous Indian cases
            </h4>
          </CardHeader>

          <Image
            removeWrapper
            as={NextImage}
            alt="Card background"
            className="z-0 h-full w-full object-cover"
            src="/CardImage1.png"
            width="300"
            height="200"
          />
        </Link>
      </Card>
    </>
  );
}

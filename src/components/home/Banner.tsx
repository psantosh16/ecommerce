"use client";
import Image from "next/image";
import { Button } from "../ui/button";

export default function HomeBanner() {
  return (
    <div className="grid grid-cols-2 justify-items-center bg-amber-100 rounded-sm my-10 select-none w-[80vw] overflow-hidden">
      <div className="flex flex-col justify-center items-start gap-5 lg:p-12 p-4">
        <h1 className="font-semibold lg:text-2xl text-sm">
          Grab upto 50% off on Selected Items. Hurry up! Limited time offer.
        </h1>
        <Button className="rounded-2xl" size={"sm"} onClick={() => {}}>
          Shop Now
        </Button>
      </div>
      <div className="flex justify-center items-end w-[30vw] sm:w-[14vw] lg:w-[14vw]">
        <Image
          src="/images/home-banner.png"
          alt="Offer banner"
          width={300}
          height={300}
          loading="eager"
          priority
        />
      </div>
    </div>
  );
}

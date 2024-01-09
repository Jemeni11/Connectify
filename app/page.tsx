"use client";
import Image from "next/image";
import Link from "next/link";
import Announcement from "@/components/Announcement";
import { Button } from "@/components/ui/button";
import RightArrow from "@/public/angle-circle-right-icon.svg";
import Logo from "@/public/favicon-32x32.png";
import LogoMobile from "@/public/apple-touch-icon.png";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function scrollToNextSection(): void {
  // Calculate the target scroll position based on the current scroll position and viewport height
  const currentScrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  const targetScrollPosition = currentScrollPosition + viewportHeight;

  // Use smooth scrolling for a better user experience
  window.scrollTo({
    top: targetScrollPosition,
    behavior: "smooth",
  });
}

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Announcement />
        <main className="flex min-h-full flex-1 flex-col justify-center bg-white px-4 py-5 md:flex-row md:justify-normal md:px-8">
          <div className="flex w-full flex-col gap-y-4 md:w-1/2 md:justify-center">
            <RoughNotationGroup show={true}>
              <h1 className="mb-4 text-4xl font-bold leading-normal text-duskyRed">
                The <RoughNotation type="circle">NextJS</RoughNotation>-powered{" "}
                <RoughNotation type="highlight" color="#e48d85">
                  PWA
                </RoughNotation>{" "}
                for effortless <RoughNotation type="underline">contact management</RoughNotation>.
              </h1>
            </RoughNotationGroup>
            <p className="text-lg">
              Seamlessly manage and sync your contacts for quick and effortless connections on the web. Elevate your communication
              experience with speed and simplicity.
            </p>
            <div className="flex w-full gap-x-2 sm:w-1/2 lg:gap-x-4">
              <Button className="flex-1 bg-duskyRed text-white hover:bg-[#a13d34]" asChild>
                <Link href="/auth">Get Started</Link>
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => scrollToNextSection()}>
                <span className="mr-2">Learn More</span>
                <Image src={RightArrow} alt="Right Arrow" className="aspect-square h-4" />
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">{/* Image goes here */}</div>
        </main>
      </div>
      <div className="min-h-screen px-4 md:px-8"></div>
    </>
  );
}

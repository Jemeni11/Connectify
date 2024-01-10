"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Announcement from "@/components/Announcement";
import { Button } from "@/components/ui/button";

import RightArrow from "@/public/angle-circle-right-icon.svg";
import Registration from "@/public/add-boy-user-icon.svg";
import List from "@/public/edit-list-icon.svg";
import Search from "@/public/magnifier-glass-icon.svg";
import Details from "@/public/resume-cv-icon.svg";
import ImportExport from "@/public/switch-icon.svg";
import Communication from "@/public/discussion-icon.svg";

import Logo from "@/public/favicon-32x32.png";

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

type featuresGridItemType = { title: string; icon: StaticImageData | any; description: string };

function FeaturesGridItem({ title, icon, description }: featuresGridItemType) {
  return (
    <div className="FeaturesGridItem flex items-start gap-4">
      <span className="shrink-0 p-4">
        <Image src={icon} alt={title} className="h-5 w-5 text-duskyRed md:h-8 md:w-8" />
      </span>
      <div>
        <h3 className="inline-block text-lg font-bold">{title}</h3>
        <p className="inline-block text-base text-[#4b5563]">{description}</p>
      </div>
    </div>
  );
}

const featuresPartOne: featuresGridItemType[] = [
  {
    title: "User Registration",
    icon: Registration,
    description: "Securely create an account and log in to access your contacts.",
  },
  {
    title: "Contact List",
    icon: List,
    description: "Effortlessly view and manage a comprehensive list of your contacts.",
  },
  {
    title: "Contact Search",
    icon: Search,
    description: "Quickly find specific contacts with our robust search functionality.",
  },
  {
    title: "Contact Details",
    icon: Details,
    description: "Access detailed information about each contact, from phone numbers to addresses.",
  },
  {
    title: "Contact Import/Export",
    icon: ImportExport,
    description: "Seamlessly import contacts from external sources and export them in various formats.",
  },
  {
    title: "Contact Communication",
    icon: Communication,
    description: "Stay connected with a single click. Call, email, or message your contacts with the app.",
  },
];

const featuresPartTwo: { title: string; content: string }[] = [
  {
    title: "Contact Sharing",
    content:
      "Share contact information with others effortlessly. Whether it's sending a colleague's contact details to a client or sharing a friend's info with a group, ConnexusLink makes it simple.",
  },
  {
    title: "Contact Notes",
    content:
      "Keep track of important details. Add personal notes or reminders for each contact. Never forget a birthday or an important detail again.",
  },
  {
    title: "Contact Birthdays/Reminders",
    content:
      "Never miss a special day. ConnexusLink helps you remember birthdays, anniversaries, and other important dates. Set reminders and celebrate with your loved ones.",
  },
  {
    title: "Contact Deletion",
    content:
      "Declutter your contacts. Remove outdated or irrelevant contacts easily. ConnexusLink ensures your contact list stays clean and organized.",
  },
  {
    title: "Responsive Design",
    content:
      "Access your contacts from anywhere, on any device. ConnexusLink is fully responsive, ensuring a seamless experience whether you're on your phone, tablet, or desktop.",
  },
  {
    title: "User Settings",
    content: "Tailor ConnexusLink to your preferences. Customize themes, language, and privacy settings to make the app truly your own.",
  },
  {
    title: "User Profile",
    content: "Personalize your profile. Update your information and profile picture to keep your ConnexusLink experience unique.",
  },
  {
    title: "Error Handling and Validation",
    content:
      "Enjoy a hassle-free experience. ConnexusLink is designed with meticulous error handling and validation to ensure smooth interactions and data accuracy.",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Announcement />
        <main className="flex min-h-full flex-1 flex-col justify-center gap-4 bg-white px-4 py-5 md:flex-row md:justify-normal md:px-8">
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
          <div className="w-full md:w-1/2">
            <Image src="https://placehold.co/800x600/png?text=Placeholder+Image" alt="Screenshot of Connectify" width={800} height={600} />
          </div>
        </main>
      </div>
      <div className="min-h-screen px-4 py-6 md:px-8">
        <span className="mb-2 block text-left text-sm font-medium text-duskyRed md:text-center md:text-lg">Everything you need</span>
        <h2 className="mb-4 text-left text-2xl font-bold md:text-center md:text-3xl">No space for a regular contact app? No problem.</h2>
        <p className="mb-4 text-left text-xl font-light md:text-center md:text-2xl">
          Connectify is not your run of the mill contact application — It is a Progressive Web App (PWA).{" "}
        </p>
        <Image
          src="https://placehold.co/600x400/png?text=Placeholder+Image"
          alt="Screenshot of Connectify"
          className="mx-auto"
          width={600}
          height={400}
        />
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {featuresPartOne.map(({ title, icon, description }) => (
            <FeaturesGridItem key={title} title={title} icon={icon} description={description} />
          ))}
        </div>
      </div>
    </>
  );
}

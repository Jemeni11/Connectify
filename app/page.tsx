"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Announcement from "@/components/Announcement";

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import RightArrow from "@/public/angle-circle-right-icon.svg";
import Registration from "@/public/add-boy-user-icon.svg";
import List from "@/public/edit-list-icon.svg";
import Search from "@/public/magnifier-glass-icon.svg";
import Details from "@/public/resume-cv-icon.svg";
import ImportExport from "@/public/switch-icon.svg";
import Communication from "@/public/discussion-icon.svg";
import FooterImage from "@/public/footer.png";

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
      "Share contact information with others effortlessly. Whether it's sending a colleague's contact details to a client or sharing a friend's info with a group, Connectify makes it simple.",
  },
  {
    title: "Contact Notes",
    content:
      "Keep track of important details. Add personal notes or reminders for each contact. Never forget a birthday or an important detail again.",
  },
  {
    title: "Contact Deletion",
    content:
      "Declutter your contacts. Remove outdated or irrelevant contacts easily. Connectify ensures your contact list stays clean and organized.",
  },
  {
    title: "Responsive Design",
    content:
      "Access your contacts from anywhere, on any device. Connectify is fully responsive, ensuring a seamless experience whether you're on your phone, tablet, or desktop.",
  },
  {
    title: "User Profile",
    content: "Personalize your profile. Update your information and profile picture to keep your Connectify experience unique.",
  },
];

const Hashnode = () => (
  <svg className="h-6 w-6" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
    <title>Hashnode</title>
    <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
  </svg>
);

const LinkedIn = () => (
  <svg className="h-6 w-6" fill="currentColor" aria-hidden="true" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Twitter = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
    <title>Twitter</title>
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const GitHub = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
    <title>GitHub</title>
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Announcement />
        <main className="flex min-h-full flex-1 flex-col justify-center gap-4 bg-white px-8 py-5 md:flex-row md:justify-normal md:px-12">
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
          <div className="flex w-full items-center md:w-1/2">
            <Image src="https://placehold.co/800x600/png?text=Placeholder+Image" alt="Screenshot of Connectify" width={800} height={600} />
          </div>
        </main>
      </div>
      <div className="min-h-screen px-8 py-6 md:px-12">
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
      <section className="min-h-screen px-8 py-6 md:px-12">
        <div className="">
          <div>
            <span className="mb-2 block text-left text-sm font-medium text-duskyRed md:text-center md:text-lg">Features for days</span>
            <h2 className="mb-4 text-left text-2xl font-bold md:text-center md:text-3xl">What? You want more? Okay!</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="h-64 sm:h-80 lg:h-full">
              <Image
                alt="TBA"
                src="https://placehold.co/1223x816/png?text=Placeholder+Image"
                className="inset-0 h-full w-full object-contain"
                width={1223}
                height={816}
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <Accordion type="single" collapsible>
                  {featuresPartTwo.map((feature) => (
                    <AccordionItem key={feature.title} value={feature.title}>
                      <AccordionTrigger>{feature.title}</AccordionTrigger>
                      <AccordionContent>{feature.content}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </article>
            </div>
          </div>
        </div>
      </section>
      <div className="px-8 py-10 md:min-h-[50vh] md:px-16 md:py-20">
        <div className="flex h-full w-full flex-col items-center justify-between gap-y-4 text-center md:flex-row md:text-left">
          <div className="flex-1 text-2xl font-bold md:text-5xl">
            <p className="mb-2">Ready to dive in?</p>
            <p>Start using Connectify today!</p>
          </div>
          <Button className="bg-duskyRed text-white hover:bg-[#a13d34]" asChild>
            <Link href="/auth">Get Started</Link>
          </Button>
        </div>
      </div>
      <footer className="min-h-[50vh] bg-white lg:grid lg:grid-cols-5">
        <div className="relative block h-32 lg:col-span-2 lg:h-full">
          <div className="min-h-full w-full bg-duskyRed lg:hidden"></div>
          <Image src={FooterImage} alt="Footer Image" className="absolute inset-0 hidden h-full w-full object-cover lg:block" />
        </div>

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p>
                <span className="text-xs uppercase tracking-wide text-gray-500"> Call us </span>

                <a href="tel:0123456789" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
                  0123456789
                </a>
              </p>

              <ul className="mt-8 space-y-1 text-sm text-gray-700">
                <li>Monday to Friday: 9am - 5pm</li>
                <li>Weekend: 12am - 3pm</li>
              </ul>

              <ul className="mt-8 flex gap-6">
                <li>
                  <a
                    href="https://github.com/Jemeni11"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">GitHub</span>
                    <GitHub />
                  </a>
                </li>

                <li>
                  <a
                    href="https://jemeni11.hashnode.dev"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Hashnode</span>
                    <Hashnode />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/emmanuel-jemeni"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <LinkedIn />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/Jemeni11_"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>
                    <Twitter />
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="font-medium text-gray-900">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      1on1 Coaching
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Company Review
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Accounts Review
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      HR Consulting
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      SEO Optimisation
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      About
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Accounts Review
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-12">
            <div className="sm:flex sm:items-center sm:justify-between">
              <p className="text-xs text-gray-600 transition">
                Built by{" "}
                <a href="https://github.com/Jemeni11/" className="underline underline-offset-4 hover:opacity-75">
                  Emmanuel
                </a>
                . The source code is available on{" "}
                <a href="https://github.com/Jemeni11/Connectify" className="underline underline-offset-4 hover:opacity-75">
                  GitHub
                </a>
                .
              </p>

              <p className="mt-8 text-xs text-gray-600 sm:mt-0">&copy; {new Date().getFullYear()}. Connectify. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import BannerImage from "@/public/bannerImage.png";
import { NotoSansFontClass } from "@/pages/_app";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import type { NextPage } from "next";
import type { Contact } from "@/types/contact";
import KeyFeatures from "@/components/home/KeyFeatures";
import OtherFeatures from "@/components/home/OtherFeatures";

export default function Home() {
  return (
    <>
      <Head>
        <title>ConnexusLink - The Only Contact Manager App You Need!</title>
        <meta name="description" content="Built by Emmanuel C. Jemeni" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center px-[5%] md:px-[7vw]">
        <div className="h-screen">
          <div className="my-4 flex flex-col rounded-2xl bg-gradient-to-t from-[#e7f0f8] to-[#9cb6dd] px-12 py-8 text-black shadow-xl md:h-[calc(100vh_-_8rem)] md:flex-row">
            <div className="flex flex-1 flex-col justify-center md:flex-[2_2_0%]">
              <h1 className="mb-4 text-3xl">The Only Contact Manager App You Need!</h1>
              {/* <p className="text-base">
                ConnexusLink is a simple yet powerful contact management application that allows users to store and organize all of their
                contacts in one place. With ConnexusLink, users can easily add, edit, and search for contacts, as well as view and manage
                their contact information, including phone numbers, email addresses, and physical addresses.
              </p> */}
            </div>
            <div className="flex-1 md:flex-[3_3_0%]">
              {/* <Image alt="Dog call - Phonies by DrawKit Vector Illustrations" src={BannerImage} className="h-[calc(100%_-_4rem)] w-full" /> */}
            </div>
          </div>
          <section className="mt-8 w-full md:mt-28">
            <h2 className="mb-6 w-full border-b border-b-[#007BFF] pb-6 text-center text-3xl text-[#007BFF] sm:text-right sm:text-6xl">
              Welcome!
            </h2>
            <p className="text-center text-2xl">
              Welcome to ConnexusLink, your digital companion for keeping your contacts organized and your connections strong. ConnexusLink
              is more than just a contact app; it's your personal contact management powerhouse. Say goodbye to the chaos of scattered
              contact information and hello to a world where staying in touch with friends and loved ones has never been easier. Explore our
              key features below to discover how ConnexusLink will transform the way you connect.
            </p>
          </section>
          <section className="mt-8 md:mt-28">
            <h2 className="mb-6 border-b border-b-[#007BFF] pb-6 text-center text-3xl text-[#007BFF] sm:text-right sm:text-6xl">
              Key Features
            </h2>
            <KeyFeatures />
          </section>
          <section className="mt-8 md:mt-28">
            <h2 className="mb-6 border-b border-b-[#007BFF] pb-6 text-center text-3xl text-[#007BFF] sm:text-right sm:text-6xl">
              Other Features
            </h2>
            <OtherFeatures />
          </section>
          <section className="mt-8 flex min-h-screen flex-col items-center justify-center text-center md:mt-28">
            <div className="container min-h-full ">
              <h2 className="mb-2 text-3xl font-semibold md:text-4xl">Ready to Get Started?</h2>
              <p className="mb-6 text-lg md:text-xl">Join ConnexusLink today and revolutionize the way you manage your contacts.</p>
              <a
                href="#"
                className="rounded-full bg-white py-2 px-6 text-lg font-semibold text-[#007BFF] transition duration-300 ease-in-out hover:bg-[#0056b3] hover:text-white hover:shadow-lg md:text-xl"
              >
                Let's Go !
              </a>
            </div>
          </section>
          <footer className="py-4">
            <div className="container flex justify-between text-center">
              <p className="text-lg">&copy; 2023 ConnexusLink. All rights reserved.</p>
              <p className="">
                Built by{" "}
                <a href="https://www.github.com/Jemeni11" target="_blank">
                  Emmanuel Jemeni
                </a>
              </p>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}

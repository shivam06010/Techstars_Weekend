"use client";

import React, { FunctionComponent } from "react";
import { Icons } from "../icons";
import { Button } from "@/components/ui/button";
//@ts-ignore
import Google from "@/public/assets/GoogleForStartups_Horizontal1.png";
//@ts-ignore
import gd from "@/public/assets/GD_REGISTRY_POWERED_BY_LOCKUP_3_CMYK_COLOR1.png";
//@ts-ignore
import brex from "@/public/assets/BrexBlack.png";
import merch from "@/public/assets/merch2.jpeg";
import goodies from "@/public/assets/goodies.png";
import godaddy from "@/public/assets/godaddy.png";
import googlecloud from "@/public/assets/googlecloud.png";
import ecell from "@/public/assets/iitbhulogo.png";
import Image from "next/image";
import Link from "next/link";
//@ts-ignore

import { signIn, signOut, useSession } from "next-auth/react";
import {cn} from "@/lib/utils";

interface OwnProps {}

type Props = OwnProps;

const Hero: FunctionComponent<Props> = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 lg:-mt-28  ">
        <a
          href="https://www.ecelliitbhu.com/" target="_blank"
          className="inline-flex justify-between items-center  py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
            <Image
                src={ecell}
                alt={"Ecell"}
                width={50}
                height={100}
                className={cn(
                    "h-auto w-auto object-cover transition-all hover:scale-105"
                )}
            />
          </span>{" "}
          <span className="text-sm font-medium">
            E-CELL IIT BHU
          </span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Innovator to Entrepreneur
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          SEPTEMBER 12-14, 2025, IIT BHU Varanasi
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 ">
          <Link href={"/payment"}>
            <Button size={"lg"} className="text-2xl py-2">
              <Icons.ticket className={"h-5 w-5 mr-2"} />
              Get Ticket
            </Button>
          </Link>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-2xl text-black uppercase">
            What is Startup Weekend
          </span>
          <div className="mt-8 align-baseline">
            <p className="font-medium text-md">Learn how to think, work, and build like a startup in 54 thrilling hours. <b>Techstars Startup Weekend </b>is an exciting and immersive foray into the world of startups. Over an action-packed three days, you’ll meet the very best mentors, investors, co-founders and sponsors to show you how to get more done faster -- and, maybe even start that Business.</p>
            {/*<a*/}
            {/*  href="#"*/}
            {/*  className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"*/}
            {/*>*/}
            {/*  <Image src={Google} alt={"Google"} height={200} width={200} />*/}
            {/*</a>*/}
            {/*<a*/}
            {/*  href="#"*/}
            {/*  className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 border-1"*/}
            {/*>*/}
            {/*  <Image*/}
            {/*    src={gd}*/}
            {/*    alt={"GD"}*/}
            {/*    height={200}*/}
            {/*    width={200}*/}
            {/*    className={"p-4"}*/}
            {/*  />*/}
            {/*</a>*/}
            {/*<a*/}
            {/*  href="#"*/}
            {/*  className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"*/}
            {/*>*/}
            {/*  <Image*/}
            {/*    src={brex}*/}
            {/*    alt={"Brex"}*/}
            {/*    height={200}*/}
            {/*    width={200}*/}
            {/*    className={"p-4"}*/}
            {/*  />*/}
            {/*</a>*/}
          </div>
        </div>
        <div className="mt-20 mb-20 text-center lg:text-6xl font-extrabold sm:text-4xl text-3xl">
          <span>Benefits Of Startup Weekend</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 mx-auto">
          <div className="text-center">
            <Image src={merch} alt={"merch"} className="w-40 h-40 mx-auto" />
            <p className="mt-4 text-xl font-semibold">Merchandise</p>
          </div>
          <div className="text-center">
            <Image src={goodies} alt={"goodies"} className="w-64 h-40 mx-auto" />
            <p className="mt-4 text-xl font-semibold">Goodies</p>
          </div>
          <div className="text-center lg:mt-16 md:mt-10">
            <Image src={brex} alt={"brex"} className=" -mt-4 lg:w-60 lg:h-28 md:h-14 sm:w-48 sm:h-8 w-32 h-10 mx-auto" />
            <p className="mt-4 text-xl font-semibold">Brex Rewards</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-4 mx-auto mt-8">
          <div className="text-center lg:mt-10 md:mt-16">
            <Image src={godaddy} alt={"godaddy"} className="w-60 h-32 mx-auto" />
            <p className="mt-2 text-xl font-semibold">Free GoDaddy domain (.co.in)</p>
          </div>
          <div className="text-center mt-8 ">
            <Image src={googlecloud} alt={"googlecloud"} className="w-48 h-32 mx-auto" />
            <p className="mt-4 text-xl font-semibold">$300 Google Credits</p>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Hero;
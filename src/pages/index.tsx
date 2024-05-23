import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { z } from "zod";

const emailSchema = z.string().email();

export default function Home() {
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    if (email === "") {
      setEmailError(null);
      return;
    }

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setEmailError("Please provide a valid email address");
    } else {
      setEmailError(null);
    }
  };

  return (
    <>
      <Head>
        <title>Base Apparel - COMING SOON!</title>
        <meta name="description" content="base-apparel-coming-soon" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="font-josefin relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-red-50/50 md:flex-row md:justify-between">
        <div className="fixed top-0 z-10 h-28 w-full bg-inherit px-8 py-8 md:h-48 md:bg-transparent md:px-16 md:py-16 lg:px-40">
          <Image
            className="h-10 w-auto"
            src="/images/logo.svg"
            alt="Base Apparel Logo"
            width={200}
            height={50}
          />
        </div>
        <div className="z-5 flex h-screen flex-grow-0 flex-col items-center overflow-auto md:w-full md:items-start md:justify-center md:pl-16 lg:pl-40">
          <Image
            className="mt-28 block w-full md:hidden"
            src="/images/hero-mobile.jpg"
            alt="Hero Image"
            width={300}
            height={400}
          />
          <h1 className="text-desaturated-red mt-16 text-center text-5xl font-thin uppercase tracking-wide md:text-8xl">
            W e &apos; r e
          </h1>
          <p className="text-dark-grayish-red mt-2 text-center text-5xl font-medium uppercase tracking-wide md:text-start md:text-8xl">
            C o m i n g
            <br />S o o n
          </p>
          <p className="text-desaturated-red text-md mt-6 px-14 text-center leading-7 md:max-w-[600px] md:px-0 md:text-start md:text-xl md:leading-9">
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form
            className={`relative mt-10 flex h-16 w-[90%] items-center justify-between rounded-full border-2 md:w-full md:max-w-[600px] ${emailError ? "border-red-500" : "border-desaturated-red/40 active:border-desaturated-red/70"}`}
          >
            <input
              type="email"
              onChange={handleEmailChange}
              name="email"
              placeholder="Email Address..."
              className="text-desaturated-red placeholder-desaturated-red z-0 h-full w-full overflow-clip rounded-full border-none px-4 text-lg placeholder:text-lg"
            />
            {emailError && (
              <Image
                className="absolute right-28 z-20 w-8"
                src="/images/icon-error.svg"
                width={24}
                height={24}
                alt="Error Icon"
              />
            )}
            <button className="from-gradient-start to-gradient-end shadow-desaturated-red absolute right-0 z-10 flex h-full w-[18%] min-w-16 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-2xl md:max-w-24">
              <Image
                className="h-7 w-4"
                src="/images/icon-arrow.svg"
                width={10}
                height={10}
                alt="Arrow Icon"
              />
            </button>
          </form>
          {emailError && (
            <p className="ml-5 mt-2 text-red-500">
              Please provide a valid email
            </p>
          )}
        </div>
        <Image
          className="flex-grow-8 flex-shrink-20 z-20 hidden h-screen w-[40vw] object-cover md:block"
          src="/images/hero-desktop.jpg"
          alt="Hero Image"
          width={800}
          height={400}
        />
      </main>
    </>
  );
}

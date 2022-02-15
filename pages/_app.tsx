import type { AppProps } from "next/app";
import "../styles/globals.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Anurag | AI Enthusiast"
        titleTemplate="Anurag | AI Enthusiast"
        defaultTitle="Anurag | AI Enthusiast"
        description="Hey! I'm Anurag, An AI Enthusiast, Blogger and a Student!"
        openGraph={{
          url: "https://www.anurag.tech/",
          title: "Anurag | Ai Enthusiast",
          description:
            "Hey! I'm Anurag, A AI Developer, Blogger and a Student!",
          images: [
            {
              url: "https://res.cloudinary.com/anurag256k/image/upload/v1644938293/wp10293345-think-plan-execute-wallpapers_zdx8qc.jpg",
              width: 800,
              height: 420,
              alt: "Anurag | AI Enthusiast",
            },
          ],
        }}
        twitter={{
          handle: "@AnuragS24171420",
          site: "@AnuragS24171420",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, anurag, prof.freakenstein, Web Developer, web development, web developer, blogger, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

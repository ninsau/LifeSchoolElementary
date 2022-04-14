import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";

const HeadComponent: NextPage = () => {
  const router = useRouter();
  let urlPath = router.asPath;

  const title: any = {
    "/": "Learn Twi & English With Alice",
    "/about": "About Us",
    "/academics": "Academics",
    "/contact": "Contact Us",
    "/facilities": "Our Facilities",
    "/students": "Our Students",
    "/terms": "Terms & Conditions",
    "/privacy": "Privacy Policy",
  };

  return (
    <>
      <Script
        id="google analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `<!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-2X3P745VQF"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-2X3P745VQF');
      </script>`,
        }}
      />

      <Head>
        <title>
          {title[urlPath]
            ? `${title[urlPath]} | Life School Ghana`
            : "Page Not Found | Life School Ghana"}
        </title>

        <meta
          name="title"
          content={
            title[urlPath]
              ? `${title[urlPath]} | Life School Ghana`
              : "Page Not Found | Life School Ghana"
          }
        />
        <meta
          name="description"
          content="Life School Ghana educates students to be independent, confident, creative and critical thinkers. We offer Primary Years Program and Twi and English Lessons for Adults"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lifeschoolghana.com" />
        <meta
          property="og:title"
          content={
            title[urlPath]
              ? `${title[urlPath]} | Life School Ghana`
              : "Page Not Found | Life School Ghana"
          }
        />
        <meta
          property="og:description"
          content="Life School Ghana educates students to be independent, confident, creative and critical thinkers. We offer Primary Years Program and Twi and English Lessons for Adults"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/deyudesls/image/upload/v1643034956/samples/people/69599A82-C543-46D9-BF14-24E23F3E9807_srec6j.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.lifeschoolghana.com"
        />
        <meta
          property="twitter:title"
          content={
            title[urlPath]
              ? `${title[urlPath]} | Life School Ghana`
              : "Page Not Found | Life School Ghana"
          }
        />
        <meta
          property="twitter:description"
          content="Life School Ghana educates students to be independent, confident, creative and critical thinkers. We offer Primary Years Program and Twi and English Lessons for Adults"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/deyudesls/image/upload/v1643034956/samples/people/69599A82-C543-46D9-BF14-24E23F3E9807_srec6j.webp"
        ></meta>

        <meta
          name="google-site-verification"
          content="gWtfvMPJg5HdjhQJdZSTKrnmJvqvazBUb_V0gmYFMiE"
        />
      </Head>
    </>
  );
};

export default HeadComponent;

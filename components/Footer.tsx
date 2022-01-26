import type { NextPage } from "next";
import { Fragment } from "react";
import { Copyright, navigation } from "../utils/index";
import { useRouter } from "next/router";

const FooterComponent: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <footer className="text-center lg:text-left bg-gray-800 text-gray-400">
        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-400">
          <div className="mr-12 hidden lg:block">
            <span>Get connected with us on WhatsApp:</span>
          </div>
          <div className="flex justify-center">
            <a
              href={"https://api.whatsapp.com/send?phone=‭233242188077‬"}
              target={"_blank"}
              rel={"noreferrer"}
              className="mr-6 text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
            <div className="">
              <h6
                className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="cubes"
                  className="w-4 mr-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                  ></path>
                </svg>
                LIFE SCHOOL Ghana
              </h6>
              <p>
                Life School educates students to be free, creative, and critical
                thinkers. We are committed to the success of all our learners.
              </p>
            </div>
            <div className="mx-20">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Useful links
              </h6>

              {navigation.map((item: any, i: number) => (
                <Fragment key={i}>
                  <p className="mb-4">
                    <a
                      onClick={() => router.push(item.href)}
                      style={{ cursor: "pointer" }}
                      className="text-gray-400"
                    >
                      {item.name}
                    </a>
                  </p>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    </>
  );
};

export default FooterComponent;

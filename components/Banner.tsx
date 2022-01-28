import type { NextPage } from "next";
import { SpeakerphoneIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";

const BannerComponent: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-indigo-600 mx-2 mt-12">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-indigo-800">
                <SpeakerphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">
                  Big news! We have a language programme suited for adults.
                </span>
                <span className="hidden md:inline">
                  Big news! We have a language programme suited for adults.
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <Link href="/academics" passHref>
                <div
                  style={{ cursor: "pointer" }}
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Learn more
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerComponent;

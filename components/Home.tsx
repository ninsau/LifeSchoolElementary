import type { NextPage } from "next";
import Image from "next/image";
import ActionComponent from "./Action";
import BannerComponent from "./Banner";
import MapComponent from "./Map";
import MissionComponent from "./Mission";

const HomeComponent: NextPage = () => {
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Open for Admissions!
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Life School educates students to be free, creative, and critical
                thinkers. We are committed to the success of all our learners.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <Image
                            src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
                            width={200}
                            height={280}
                            alt={"student"}
                            blurDataURL={`https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80`}
                            placeholder="blur"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="https://images.unsplash.com/photo-1472673630503-c6bfba62adbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
                            width={200}
                            height={280}
                            alt={"student"}
                            blurDataURL={`https://images.unsplash.com/photo-1472673630503-c6bfba62adbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80`}
                            placeholder="blur"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="https://images.unsplash.com/photo-1472673630503-c6bfba62adbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
                            width={200}
                            height={280}
                            alt={"student"}
                            blurDataURL="https://images.unsplash.com/photo-1472673630503-c6bfba62adbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
                            placeholder="blur"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            width={200}
                            height={280}
                            alt={"student"}
                            blurDataURL="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            placeholder="blur"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1864&q=80"
                            width={200}
                            height={280}
                            alt={"student"}
                            blurDataURL="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1864&q=80"
                            placeholder="blur"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80"
                            width={200}
                            height={280}
                            alt={"student"}
                            blurDataURL="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80"
                            placeholder="blur"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="https://images.unsplash.com/photo-1588072432733-2b6a4873b187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
                            width={200}
                            height={280}
                            alt={"student"}
                            blurDataURL="https://images.unsplash.com/photo-1588072432733-2b6a4873b187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BannerComponent />
      <MissionComponent />
      <ActionComponent />
      <MapComponent />
    </>
  );
};

export default HomeComponent;

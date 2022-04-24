import type { NextPage } from "next";
import Image from "next/image";
import ActionComponent from "./Action";
import BannerComponent from "./Banner";
import MissionComponent from "./Mission";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";
import VideoComponent from "./Video";

const HomeComponent: NextPage = () => {
  const router = useRouter();
  const MapComponent = dynamic(() => import("./Map"));
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
                Life School Ghana offers:
              </p>
              <ol type="1" className="mt-4 font-medium text-gray-900">
                <li>Language programmes (Twi & English lessons).</li>
                <li>
                  Primary years programme through the lense of Ghana and UK
                  curricular standards.
                </li>
              </ol>
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
                         
                            src="https://res.cloudinary.com/deyudesls/image/upload/v1649713125/samples/people/3D64F0FE-48DD-41AA-B0EC-74BD465C47B5_sboere.webp"
                            width={176}
                            height={246}
                            alt={"student"}
                            blurDataURL={`https://res.cloudinary.com/deyudesls/image/upload/v1649713125/samples/people/3D64F0FE-48DD-41AA-B0EC-74BD465C47B5_sboere.webp`}
                            placeholder="blur"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                         
                            src="https://res.cloudinary.com/deyudesls/image/upload/v1643034957/samples/people/72359897-1A22-46D4-9277-87161880F8E6_jzwb92.webp"
                            width={176}
                            height={246}
                            alt={"student"}
                            blurDataURL={`https://res.cloudinary.com/deyudesls/image/upload/v1643034957/samples/people/72359897-1A22-46D4-9277-87161880F8E6_jzwb92.webp`}
                            placeholder="blur"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                         
                            src="https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_246,q_auto,w_176/v1643034962/samples/people/79F40BF9-6D00-4B1D-AA32-EC8383EE6E90_jd8jrw.webp"
                            width={176}
                            height={246}
                            alt={"student"}
                            blurDataURL="https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_246,q_auto,w_176/v1643034962/samples/people/79F40BF9-6D00-4B1D-AA32-EC8383EE6E90_jd8jrw.webp"
                            placeholder="blur"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                         
                            src="https://res.cloudinary.com/deyudesls/image/upload/v1643034955/samples/people/076F3C25-F20B-476F-9D31-C80EFA2CF135_w6dgpj.webp"
                            width={176}
                            height={246}
                            alt={"student"}
                            blurDataURL="https://res.cloudinary.com/deyudesls/image/upload/v1643034955/samples/people/076F3C25-F20B-476F-9D31-C80EFA2CF135_w6dgpj.webp"
                            placeholder="blur"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                         
                            src="https://res.cloudinary.com/deyudesls/image/upload/v1643034962/samples/people/F62ADC25-39CE-4633-810C-9C4CBC6B8F31_kptoit.webp"
                            width={176}
                            height={246}
                            alt={"student"}
                            blurDataURL="https://res.cloudinary.com/deyudesls/image/upload/v1643034962/samples/people/F62ADC25-39CE-4633-810C-9C4CBC6B8F31_kptoit.webp"
                            placeholder="blur"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                         
                            src="https://res.cloudinary.com/deyudesls/image/upload/v1643034962/samples/people/A4A41CE7-E61F-44E4-A5DB-9F7A89C2E920_srevbf.webp"
                            width={176}
                            height={246}
                            alt={"student"}
                            blurDataURL="https://res.cloudinary.com/deyudesls/image/upload/v1643034962/samples/people/A4A41CE7-E61F-44E4-A5DB-9F7A89C2E920_srevbf.webp"
                            placeholder="blur"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                         
                            src="https://res.cloudinary.com/deyudesls/image/upload/v1643034961/samples/people/29C56FAB-8003-4962-B5FC-7BF53193019D_dbkljh.webp"
                            width={176}
                            height={246}
                            alt={"student"}
                            blurDataURL="https://res.cloudinary.com/deyudesls/image/upload/v1643034961/samples/people/29C56FAB-8003-4962-B5FC-7BF53193019D_dbkljh.webp"
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/contact" passHref>
                  <div
                    style={{ cursor: "pointer" }}
                    className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                  >
                    Contact Us
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoComponent/>
      <BannerComponent />
      <MissionComponent />
      <ActionComponent />
      <MapComponent />
    </>
  );
};

export default HomeComponent;

import type { NextPage } from "next";
import Image from "next/image";
import { features } from "../utils";

const MissionComponent: NextPage = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Mission Statement
            </h2>
            <p className="mt-4 text-gray-500">
              Life School Ghana educates students to be independent, confident,
              creative and critical thinkers. Here are some of the programs we
              offer:
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-640 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <Image
              src="https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_640,q_auto,w_640/v1643034956/samples/people/69599A82-C543-46D9-BF14-24E23F3E9807_srec6j.webp"
              width={640}
              height={640}
              alt={"student"}
              blurDataURL="https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_640,q_auto,w_640/v1643034956/samples/people/69599A82-C543-46D9-BF14-24E23F3E9807_srec6j.webp"
              placeholder="blur"
            />

            <Image
              src="https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_640,q_auto,w_640/v1643034954/samples/people/32DAA3C9-58D2-4776-8679-3717C4A0A9F8_ioi7qf.webp"
              width={640}
              height={640}
              alt={"student"}
              blurDataURL="https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_640,q_auto,w_640/v1643034954/samples/people/32DAA3C9-58D2-4776-8679-3717C4A0A9F8_ioi7qf.webp"
              placeholder="blur"
            />
            <Image
              src="https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_640,q_auto,w_640/v1643034957/samples/people/72359897-1A22-46D4-9277-87161880F8E6_jzwb92.webp"
              width={640}
              height={640}
              alt={"student"}
              blurDataURL="https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_640,q_auto,w_640/v1643034957/samples/people/72359897-1A22-46D4-9277-87161880F8E6_jzwb92.webp"
              placeholder="blur"
            />
            <Image
              src="https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_640,q_auto,w_640/v1643034961/samples/people/BCF78DFA-EFA3-4261-976C-00C84470F214_lfdxgw.webp"
              width={640}
              height={640}
              alt={"student"}
              blurDataURL="https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_640,q_auto,w_640/v1643034961/samples/people/BCF78DFA-EFA3-4261-976C-00C84470F214_lfdxgw.webp"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionComponent;

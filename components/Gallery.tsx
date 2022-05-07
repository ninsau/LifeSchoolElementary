import type { NextPage } from "next";
import Image from "next/image";
import { students, facilities } from "../utils";

const GalleryComponent: NextPage = () => {
  const gallery = [...students, ...facilities];
  return (
    <>
      <>
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {gallery.map((product, i: number) => (
                <div key={i} className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <Image
                      src={product.imageSrc}
                      width={450}
                      height={520}
                      alt={product.imageAlt}
                      blurDataURL={product.imageSrc}
                      placeholder="blur"
                    />
                  </div>
                  {/* <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default GalleryComponent;

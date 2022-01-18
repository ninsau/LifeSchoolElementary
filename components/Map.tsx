import type { NextPage } from "next";

const MapComponent: NextPage = () => {
  return (
    <>
      <div className="hidden max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <iframe
          width="600%"
          height="500"
          src="https://maps.google.com/maps?q=muuston%20beach&t=k&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        ></iframe>
      </div>

      <div className="sm:hidden max-w-7xl mx-auto py-12 px-4 sm:px-6">
        <iframe
          className="md:w-32 lg:w-600"
          src="https://maps.google.com/maps?q=muuston%20beach&t=k&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        ></iframe>
      </div>
    </>
  );
};

export default MapComponent;

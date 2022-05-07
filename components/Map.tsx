import type { NextPage } from "next";

const MapComponent: NextPage = () => {
  return (
    <>
      <div className="hidden max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <iframe
          title="googlemaps"
          width="600%"
          height="500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65280.81513966479!2d-0.42742004179689097!3d5.499034099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbd68352b5105%3A0xb03e0307487c6322!2sKokrobitey%20Apartments!5e1!3m2!1sen!2sus!4v1651931141260!5m2!1sen!2sus"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="sm:hidden max-w-7xl mx-auto py-12 px-4 sm:px-6">
        <iframe
          title="googlemaps"
          className="md:w-32 lg:w-600"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65280.81513966479!2d-0.42742004179689097!3d5.499034099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbd68352b5105%3A0xb03e0307487c6322!2sKokrobitey%20Apartments!5e1!3m2!1sen!2sus!4v1651931141260!5m2!1sen!2sus"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default MapComponent;

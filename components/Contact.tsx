import type { NextPage } from "next";
import ActionComponent from "./Action";
import MapComponent from "./Map";

const ContactComponent: NextPage = () => {
  return (
    <>
      <ActionComponent />
      <MapComponent />
    </>
  );
};

export default ContactComponent;

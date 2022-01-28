import type { NextPage } from "next";
import ActionComponent from "./Action";
import dynamic from "next/dynamic";

const ContactComponent: NextPage = () => {
  const MapComponent = dynamic(() => import("./Map"), {
    loading: () => <ActionComponent />,
  });
  return (
    <>
      <ActionComponent />
      <MapComponent />
    </>
  );
};

export default ContactComponent;

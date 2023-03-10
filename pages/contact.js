import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { RxDotsVertical } from "react-icons/rx";

import GridContainer from "../components/GridContainer/GridContainer";
import FlowField from "../components/FlowField/FlowField";

const ContactPage = () => {
  return (
    <>
      <div className="relative h-[calc(100vh_-_101px)]">
        <GridContainer
          display={<FlowField className="" />}
          content={
            <>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <RxDotsVertical
                size={30}
                className="my-6 md:ml-auto md:mr-0 mx-auto"
              />
              <h1 className="text-3xl">Contact Me!</h1>
            </>
          }
          icons={
            <>
              <BsInstagram size={20} className="cursor-pointer" />
              <BsLinkedin size={20} className="cursor-pointer" />
              <MdOutlineMail size={27} className="cursor-pointer" />
            </>
          }
        />
      </div>
      {/* <Script src="js/flowfield.js" /> */}
    </>
  );
};

export default ContactPage;

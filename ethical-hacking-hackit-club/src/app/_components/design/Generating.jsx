import { loading } from "../../_assets/index";
import Image from "next/image";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <Image className="w-5 h-5 mr-4" src={loading} alt="Loading" />
          <p className="mx-auto font-bold"> I Have Entered Your Systems</p>
    </div>
  );
};

export default Generating;

import Image from "next/image";
import Hooli from "../../public/fa-brands-1.png";
import Lyft from "../../public/fa-brands-2.png";
import PP from "../../public/fa-brands-3.png";
import Stripe from "../../public/fa-brands-4.png";
import Aws from "../../public/fa-brands-5.png";
import Reddit from "../../public/fa-brands-6.png";

const Companies = () => {
  return (
    <div className="lg:mt-12 lg:mx-48 mx-12 py-12 flex lg:flex-row flex-col lg:justify-between gap-y-16 items-center">
      <Image src={Hooli} width={103} height={34} />
      <Image src={Lyft} width={83} height={59} />
      <Image src={PP} width={102} height={75} />
      <Image src={Stripe} width={103} height={42} />
      <Image src={Aws} width={104} height={62} />
      <Image src={Reddit} width={76} height={72} />
    </div>
  );
};

export default Companies;

import Lottie from "lottie-react";
import GiftAnim from "./Gift.json";
const Gift = () => {
  return (
    <Lottie
      animationData={GiftAnim}
      loop={true}
      className="w-full content-center scale-125 pointer-events-none"
    />
  );
};

export default Gift;

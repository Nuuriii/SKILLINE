import Bg from "@/assets/header/orangeBg.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative">
      <Image className="absolute z-[-2]" src={Bg} alt="" />
      <div className={``}>
        <div>kkkkk</div>
      </div>
    </div>
  );
}

import { getLogo } from "@/services/get-logo";
import Image from "next/image";

const Logo = async () => {
  const logoInfo = await getLogo();
  return (
    <div className="flex-shrink-0 flex items-center">
      <Image
        alt="logo image"
        priority
        src={logoInfo.image}
        width={500}
        height={500}
        className="w-[57px] h-[53px]"
      />
      <div>
        <span className="font-bold text-emerald-800 text-[27px] relative -left-[6px] top-[2px] uppercase">
          {logoInfo.title}
        </span>
        <span className="relative -left-31 top-[13px] uppercase text-[11px] font-semibold text-emerald-900">
          {logoInfo.subtitle}
        </span>
      </div>
    </div>
  );
};

export default Logo;

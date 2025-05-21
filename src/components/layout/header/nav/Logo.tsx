import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Image
        alt="log image"
        priority
        src={`http://localhost:1337/uploads/logo1_6cb582cf09.png`}
        width={500}
        height={500}
        className="w-[57px] h-[53px] "
      />
    </div>
  );
};

export default Logo;

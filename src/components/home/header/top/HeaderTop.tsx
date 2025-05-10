import { GetNewsInfo } from "@/services/get-news";
import TextSlider from "./TextSlider";

const HeaderTop = async () => {
  const news = await GetNewsInfo();

  return (
    <div className="bg-emerald-700 text-white text-xs py-1.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-x-4 gap-y-1">
        <TextSlider items={news} className="hidden sm:block" interval={5000} />
        <div>asdsad</div>
      </div>
    </div>
  );
};

export default HeaderTop;

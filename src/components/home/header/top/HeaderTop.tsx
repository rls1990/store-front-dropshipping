import { GetNewsInfo } from "@/services/get-news";
import TextSlider from "./TextSlider";
import { GetSocialNetworks } from "@/services/get-social-networks";
import SocialNetwoksTop from "./SocialNetwoksTop";

const HeaderTop = async () => {
  const news = await GetNewsInfo();
  console.log(news);
  const social_networks = await GetSocialNetworks();

  return (
    <div className="bg-emerald-700 text-white text-xs py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 ">
        <TextSlider items={news} className="hidden md:block" interval={7000} />
        <SocialNetwoksTop items={social_networks} />
        <div>asdsad</div>
      </div>
    </div>
  );
};

export default HeaderTop;

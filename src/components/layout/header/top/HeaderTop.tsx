import TextSlider from "../../../ui/sliders/TextSlider";
import SocialNetwoksTop from "./SocialNetwoksTop";
import { getNewsInfo } from "@/services/get-news";
import { getSocialNetworks } from "@/services/get-social-networks";
import { getContact } from "@/services/get-contact";
import ContactsTop from "./ContactsTop";

const HeaderTop = async () => {
  const news = await getNewsInfo();
  const social_networks = await getSocialNetworks();
  const contacts = await getContact();

  return (
    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-x-3 ">
        <TextSlider items={news} interval={7000} />
        <SocialNetwoksTop
          className="hidden md:inline-flex"
          items={social_networks}
        />
        <ContactsTop items={contacts} />
      </div>
    </div>
  );
};

export default HeaderTop;

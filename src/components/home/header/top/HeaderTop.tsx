import TextSlider from "./TextSlider";

const HeaderTop = () => {
  return (
    <div className="bg-emerald-600 text-white text-xs py-1.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-x-4 gap-y-1">
        <TextSlider
          items={[
            { message: "1.asdasdsadad", icon: "" },
            { message: "2.asdasdsadad", icon: "" },
          ]}
        />
        <div>asdsad</div>
      </div>
    </div>
  );
};

export default HeaderTop;

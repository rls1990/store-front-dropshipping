import { getSliderItemsHero } from "@/services/get-slider-hero-items";
import Container from "../ui/container/Container";
import SliderHero from "../ui/sliders/SliderHero";

const Home = async () => {
  const sliderItemsHero = await getSliderItemsHero();

  return (
    <div>
      <SliderHero items={sliderItemsHero} />
      <Container>Home</Container>
    </div>
  );
};

export default Home;

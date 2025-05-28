import Container from "../ui/container/Container";
import SliderHero from "../ui/sliders/SliderHero";

const Home = () => {
  return (
    <div>
      <SliderHero items={["a", "b", "c"]} />
      <Container>Home</Container>
    </div>
  );
};

export default Home;

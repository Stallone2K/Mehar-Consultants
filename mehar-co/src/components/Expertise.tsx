import Container from "./Container";
import FadeIn from "./FadeIn";
import Card from "./ThreeCol";
function Expertise() {
  return (
    <Container className="px-6 h-screen flex justify-center flex-col items-center">
      <FadeIn>
        <h1 className="text-5xl font-bold ">
          Why Us? <br />
          <span className="text-red-600">Our Expertise.</span>
        </h1>
      </FadeIn>
      <FadeIn>
        <div className="text-center mt-6 flex justify-center items-center gap-6">
          <Card></Card>
        </div>
      </FadeIn>
      <FadeIn>
        <button className="text-md px-8 py-4 bg-black text-white rounded-full mt-6 mb-6 hover:bg-white border-2 hover:text-black">
          Contact Us
        </button>
      </FadeIn>
    </Container>
  );
}

export default Expertise;

import Stairs from "../assets/Stairs.svg";
import SlideIn from "../components/SlideIn";
function Asps() {
  return (
    <div className="w-full bg-[#f2f2f2] ">
      <div className="h-screen flex justify-center items-center mx-auto max-w-[1280px] px-6">
        <img src={Stairs} className="mx-auto" />
        <SlideIn>
          <div className="px-2 flex justify-center items-start flex-col">
            <h2 className="text-5xl font-bold">
              Your Success,Our
              <span className="text-red-600 underline"> Consultation.</span>
            </h2>
            <p className="text-2xl py-6">
              at the heart of every great achievement is a well-crafted plan.
              With our expert consultation, you gain a dedicated partner in
              navigating the path to your success, through consultative ,
              transparent and effective approach.
            </p>
            <button className="text-md px-8 py-4 bg-black text-white rounded-full mt-6 mb-6 hover:bg-[#f2f2f2] border-2 hover:text-black">
              Learn More
            </button>
          </div>
        </SlideIn>
      </div>
    </div>
  );
}

export default Asps;

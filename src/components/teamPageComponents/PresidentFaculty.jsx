import PresidentCard from "./Card/PresidentCard";
import useDetails from "./context/Context";

function PresidentFaculty() {
  const details = useDetails();

  return (
    <div
      id="president"
      className="align-container-center president_eb_ec px-4 sm:px-8 "
    >
      <div className="eb flex flex-col items-center justify-center gap-y-6 w-full max-w-[48rem]">
        <div className="text-[#6C90C2] text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-align-center">
          FACULTY
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-once="true"
        className="flex flex-row lg_flexrow gap-6 sm:gap-6 md:gap-8 justify-start items-start w-full"
        onContextMenu={(e) => e.preventDefault()}
      >
        <PresidentCard
          details={details[0]}
          className="fac w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        />
        <PresidentCard
          details={details[1]}
          className="fac w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        />
      </div>
    </div>
  );
}

export default PresidentFaculty;

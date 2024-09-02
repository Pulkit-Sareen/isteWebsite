import PresidentCard from "./Card/PresidentCard";
import useDetails from "./context/Context";

function PresidentFaculty() {
  const details = useDetails();

  return (
    <div id="president" className="president_eb_ec px-4 sm:px-8">
      <div className="title flex flex-col items-start justify-center w-full gap-y-4">
        <div className="text-[#ACB8CB] font-semibold text-left text-base sm:text-lg">
          ISTE
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="text-[#6C90C2] font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-left">
            PRESIDENT & FACULTY
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-once="true"
        className="president__cards mt-12 sm:mt-24 flex flex-col sm:flex-row flex-wrap gap-8 justify-center items-center w-full"
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* Each card takes full width on small screens and adjusts accordingly */}
        <PresidentCard
          details={details[0]}
          className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0"
        />
        <PresidentCard
          details={details[1]}
          className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0"
        />
      </div>
    </div>
  );
}

export default PresidentFaculty;

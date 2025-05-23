import PlusSvg from "./PlusSvg";

const SectionIntro = ({ index, title, suffix }) => {
  return (
    <div>
      <div className="relative bg-white/15 h-px w-full">
        <PlusSvg className="absolute text-[#F53900] -top-1 -left-1" />
        <PlusSvg className="absolute text-[#F53900] -top-1 -right-1" />
        <PlusSvg className="absolute text-[#F53900] left-1/4 -top-1" />
      </div>

      <div className="relative flex mt-4 justify-between">
        <div className="absolute left-1/4">
          <p className="text-xs text-[#878787] tracking-[0.2em]">( {title} )</p>
        </div>
      </div>
    </div>
  );
};

export default SectionIntro;

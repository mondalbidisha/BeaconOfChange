import { FaUser } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

export const StatsWithIcon = () => {

  return (
    <>
      <div className="flex justify-center gap-8 items-center mt-5 mb-10">
        <div className="flex flex-col items-start gap-2 p-4 border-b border-b-white border-opacity-10 bg-zinc-950 rounded-md h-[200px] w-[300px] outline outline-2 outline-offset-2 outline-slate-100">
          <div className="flex items-center gap-3">
            <div className="bg-zinc-900 w-10 h-10 flex border-b border-b-white border-opacity-10 items-center justify-center rounded-md">
              <FaUser size={20} />
            </div>
            <p className="font-medium text-nowrap">People Affected</p>
          </div>
          <div>
            <p className="text-3xl font-bold">2 Billion</p>
          </div>
          <div>
            <p className="flex items-center gap-1">
              Live in areas of high water stress
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 p-4 border-b border-b-white border-opacity-10 bg-zinc-950 rounded-md h-[200px] w-[300px] outline outline-2 outline-offset-2 outline-slate-100">
          <div className="flex items-center gap-3">
            <div className="bg-zinc-900 w-10 h-10 flex border-b border-b-white border-opacity-10 items-center justify-center rounded-md ">
              <FaArrowTrendUp size={20} />
            </div>
            <p className="font-medium text-nowrap">People Affected</p>
          </div>
          <div>
            <p className="text-3xl font-bold">3 Billion</p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-wrap">
              Suffer due to severe water scarcity every year
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-8 items-center mt-10 mb-5">
        <div className="flex flex-col items-start gap-2 p-4 border-b border-b-white border-opacity-10 bg-zinc-950 rounded-md h-[200px] w-[300px] outline outline-2 outline-offset-2 outline-slate-100">
          <div className="flex items-center gap-3">
            <div className="bg-zinc-900 w-10 h-10 flex border-b border-b-white border-opacity-10 items-center justify-center rounded-md ">
              <FaUser size={20} />
            </div>
            <p className="font-medium text-nowrap">Agriculture and Industry</p>
          </div>
          <div>
            <p className="text-3xl font-bold">90%</p>
          </div>
          <div>
            <p className="flex items-center gap-1">
              Of all water consumption accounted worldwide
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 p-4 border-b border-b-white border-opacity-10 bg-zinc-950 rounded-md  relative grow h-[200px] w-[300px] outline outline-2 outline-offset-2 outline-slate-100">
          <div className="flex items-center gap-3">
            <div className="bg-zinc-900 w-10 h-10 flex border-b border-b-white border-opacity-10 items-center justify-center rounded-md ">
              <FaArrowTrendUp size={20} />
            </div>
            <p className="font-medium text-nowrap">Impact by 2050</p>
          </div>
          <div>
            <p className="text-3xl font-bold">7 Billion</p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-wrap">
              Will face water stress or scarcity conditions
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
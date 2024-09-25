import { useAppSelector } from "../../hooks";
import { StepProp } from "../section/Register";
const Steps = ({ steps }: { steps: StepProp[] }) => {
 
  const currentStep = useAppSelector((store) => store.onboarding.currentStep);
//   console.log(currentStep) 
  return (
    <div className="rounded-lg col-span-full md:col-span-4  p-10 flex flex-row justify-between md:flex-col md:justify-start gap-6 flex-wrap ">
     {steps.map((step,ind) => {
        return(
            <div className="flex flex-col md:flex-row items-center gap-3 " key={ind}>
       
            <div
              className={`w-8  h-8  text-slate-50 border border-slate-50 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
                step.number === currentStep ? "bg-[black] text-white border-2" : ""
              }`}
            >
              {step.number}
            </div>
            <div className="flex-col flex  justify-center">
              <h4 className=" text-sm  text-textBlack ">Step {step.number}</h4>
              <h3 className=" text-sm text-textBlack font-bold">
                {step.title}
              </h3>
            </div>
          </div>
        )
     })}
    </div>
  );
};

export default Steps;

/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  setCurrentStep,
  updateFormData,
} from "../../../redux/slice/onBoardingCricketslice";
import TextInput from "../../FormInputs/TextInput";
import SelectInput from "../../FormInputs/SelectInput";
import NavButtons from "../../FormInputs/NavButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { div } from "framer-motion/client";
import Loader from "../../Loader";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

/* --------- Typescript Props ---------------  */
type Inputs = {
  fullName: string;
  email: string;
  phone: number;
  dob: string;
  location: string;
  country: string;
  gender?: Array<{ id: string; title: string }>;
  confirm?: string;
};

/*----------- Function -------------- */
const ConfirmationReview = () => {
  const currentStep = useAppSelector((store) => store.onboarding.currentStep);
  const formData = useAppSelector((store) => store.onboarding.formData);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { ...formData } });

  const navigate = useNavigate();
  const [isSubmitted, setSubmitted] = useState(false);
  const processData: SubmitHandler<Inputs> = (data) => {
    dispatch(updateFormData(data));

    // dispatch(setCurrentStep(currentStep + 1));
    setSubmitted(true);

    setTimeout(() => {
      toast.success('Submitted Successfully.');  
      navigate("/");
    }, 2000);
  };
  if(!isSubmitted){
    return (
        <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
          <div className="mb-8">
            <h5 className="text-xl md:text-3xl font-bold text-gray-900">
              Confirmation & Review
            </h5>
            <p>Please provide your name,email address,and phone number.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-1">
            {/* ---------- input  ----------  */}
    
            <div
              className={"flex flex-row-reverse gap-3 items-start justify-start"}
            >
              <label
                htmlFor={"confirm"}
                className=" text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2 "
              >
                {
                  "I confirm that the information provided is accurate to the best of my knowledge and consent to the use of my data for further processing."
                }
              </label>
              <div className="mt-2">
                <input
                  {...register("confirm", { required: true })}
                  type={"checkbox"}
                  name={"confirm"}
                  id={"confirm"}
                  //   defaultValue={defaultValue}
                  autoComplete={"confirm"}
                  className=""
                />
                {errors[`confirm`] && (
                  <span className="text-sm text-[red] ">required</span>
                )}
              </div>
            </div>
    
            {/* --------- input end --------- */}
          </div>
    
          <NavButtons />
        </form>
      );
  }
  else{
    return(
        <div className="flex items-center justify-center h-full gap-3 ">
            <Loader2 className="rotate-360 animate-spin"/>
            <p className="font-bold">Submitting...</p>
        </div>
    )
  }
  
};

export default ConfirmationReview;



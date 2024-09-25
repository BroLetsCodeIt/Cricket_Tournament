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





/* --------- Typescript Props ---------------  */
type Inputs = {
    fullName : string ;
    email : string; 
    phone : number ; 
    dob : string ;
    location : string ;
    country : string ;
    gender ?: Array<{id : string , title : string}>
};


/*----------- Function -------------- */
const RulesandRegulation = () => {
  const currentStep = useAppSelector((store) => store.onboarding.currentStep);
  const formData = useAppSelector((store) => store.onboarding.formData);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { ...formData } });

  const processData: SubmitHandler<Inputs> = (data) => {
    dispatch(updateFormData(data));

    dispatch(setCurrentStep(currentStep + 1));
  };


  const matchformat = [
    {
      id: "1",
      title: "T20",
    },
    {
      id: "2",
      title: "One-day",
    },
    {
        id : "3",
        title : "Test"
    }
  ];

  return (
    <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h5 className="text-xl md:text-3xl font-bold text-gray-900">
           Rules & Regulations
        </h5>
        <p>Please provide your name,email address,and phone number.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
      <TextInput
          label="Overs Per Match"
          name="permatch"
          type="number"
          register={register}
          errors={errors}
        />
        <TextInput
          label="No. of Players Allowed in a Team"
          name="noofplayers"
          type="number"
          register={register}
          errors={errors}
        />
      
        <SelectInput
          label="Match Format"
          name="matchformat"
          register={register}
          options={matchformat}
        />
        <div className="flex flex-row gap-3">    
            <p className="bg-[#ded4d4] px-3 rounded-md">Rules File :</p>
            <a href="./sports_rules_cricket.pdf" target="_blank">📩Download</a>
        </div>  
      </div>

      <NavButtons />
    </form>
  );
};


export default RulesandRegulation

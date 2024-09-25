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
    captainname : string;
    teamname : string;
    teamemail : string;
    playerphone : number ;
    noofplayers : number ;
    permatch : number ;
    matchdate : string ;
    matchtime : string;
    gender ?: Array<{id : string , title : string}>
    matchformat : Array<{id : string , title : string}>
    opposingteam : Array<{id : string , title : string}>

};


/*----------- Function -------------- */
const MatchSchedule = () => {
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


  const opposingteam = [
    {
      id: "male",
      title: "Male",
    },
    {
      id: "female",
      title: "Female",
    },
  ];

  return (
    <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h5 className="text-xl md:text-3xl font-bold text-gray-900">
           Match Schedule
        </h5>
        <p>Please provide your name,email address,and phone number.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
      <TextInput
          label="Match Date"
          type="date"
          name="matchdate"
          register={register}
          errors={errors}
          className="w-[100%]"
        />
        <SelectInput
          label="Opposing Team"
          name="opposingteam"
          register={register}
          options={opposingteam}
        />
       <TextInput 
        label="Match Time"
        type="time"
        name="matchtime"
        errors={errors}
        register={register}
       />    
        <TextInput
          label="Location"
          name="location"
          register={register}
          errors={errors}
        />
      </div>

      <NavButtons />
    </form>
  );
};

export default MatchSchedule;

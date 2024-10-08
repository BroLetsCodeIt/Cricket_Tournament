import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  setCurrentStep,
  updateFormData,
} from "../../../redux/slice/onBoardingCricketslice";
import TextInput from "../../FormInputs/TextInput";
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
const TeamRegistration = () => {
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


  

  return (
    <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h5 className="text-xl md:text-3xl font-bold text-gray-900">
           Team Registration
        </h5>
        <p>Please provide your name,email address,and phone number.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <TextInput
          label="Team Name"
          name="teamname"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Team Captain Name"
          name="captainname"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Team Contact Email"
          name="teamemail"
          type="email"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Number of Players"
          name="playerphone"
          type="number"
          register={register}
          errors={errors}
        />
        
        {/* <SelectInput
          label="Select your Gender"
          name="gender"
          register={register}
          options={gender}
        /> */}
        
        {/* <TextInput
          label="Your Country of Residence"
          name="country"
          register={register}
          errors={errors}
        /> */}
      </div>

      <NavButtons />
    </form>
  );
};

export default TeamRegistration;

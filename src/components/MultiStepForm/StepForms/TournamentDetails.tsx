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
const TournamentDetails = () => {
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


  const gender = [
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
           Tournament Details
        </h5>
        <p>Please provide your name,email address,and phone number.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <TextInput
          label="Tournament Name"
          name="fullName"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Organizer Name"
          name="fullName"
          type="text"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Organizer Contact Information"
          name="phone"
          type="number"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Tournament Start Date"
          type="date"
          name="dob"
          register={register}
          errors={errors}
          className="w-[100%]"
        />
        <TextInput
          label="Tournament End Date"
          type="date"
          name="dob"
          register={register}
          errors={errors}
          className="w-[100%]"
        />
        {/* <SelectInput
          label="Select your Gender"
          name="gender"
          register={register}
          options={gender}
        /> */}
        <TextInput
          label="Location / Venue"
          name="location"
          register={register}
          errors={errors}
        />
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

export default TournamentDetails;

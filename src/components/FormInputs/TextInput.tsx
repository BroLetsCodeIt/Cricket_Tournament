import {  FieldErrors } from "react-hook-form";


import { UseFormRegister } from "react-hook-form";

interface FormData {
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
export default function TextInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
  defaultValue = "",
}: {
  label: string;
  name: keyof FormData;
  register: UseFormRegister<FormData>
  errors: FieldErrors;
  isRequired?: boolean;
  type?: string;
  className?: string;
  defaultValue?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2 "
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...register(`${name}`, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete={name}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 dark:focus:ring-slate-500 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100 px-2"
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-[red] ">{label} is required</span>
        )}
      </div>
    </div>
  );
}

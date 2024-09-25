import { UseFormRegister } from "react-hook-form";
/* --------- Typescript Props ---------------  */
interface FormData  {
    fullName : string ;
    email : string; 
    phone : number ; 
    dob : string ;
    location : string ;
    country : string ;
    gender ?: Array<{id : string , title : string}>
};
export default function SelectInput({
  label,
  name,
  register,
  className = "sm:col-span-2",
  options = [],
  multiple = false,
}: {label : string , name : string , register : UseFormRegister<FormData>  , className ?: string , options ?: Array<{id : string , title : string}>, multiple ?: boolean}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`)}
          id={name}
          multiple={multiple}
          name={name}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option.id}>
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
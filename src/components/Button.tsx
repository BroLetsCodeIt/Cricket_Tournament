import { twMerge } from "tailwind-merge"

type ButtonProps = {
    children : React.ReactNode ,
    size ?: "medium" | "large" | "small",
    className ?: string ,
    submit ? : string

}


const Button = ({children ,size= "medium" , className, submit} : ButtonProps) => {

  const sizeClassNames = {
     
    small : "text-xs px-2 py-1",
    medium : "text-md px-5 py-3",
    large : "text-lg px-8 py-4"
  }  
  return (
    <button className={twMerge("text-textBlack bg-white px-4 rounded-lg py-1" , sizeClassNames[size] , className)} type={submit === "submit" ? "submit" : "button"}>
       {children}
    </button>
  )
}

export default Button

import Container from "../Container";
import StepForm from "../MultiStepForm/StepForm";
import Steps from "../MultiStepForm/Steps";
export interface StepProp {
  number : number ;
  title : string;
}



export default function Register () {
  const steps : StepProp[]= [
    {
      number: 1,
      title: "Tournament Details",
    },
    {
      number: 2,
      title: "Team Registration",
    },
    {
      number: 3,
      title: "Match Schedule"
    },
    {
      number: 4,
      title: "Rules & Regulation",
    },
    {
      number : 5 ,
      title : 'Confirmation & Review'
    }
  ];
  return (
    <Container className="max-w-7xl ">
      <div className="mx-auto w-full  p-4 bg-white shadow sm:p-4 md:p-6  grid grid-cols-12 gap-4 min-h-screen ">
        {/* Steps */}
          <Steps steps={steps} />
        {/* Form */}
        <div className="rounded-lg col-span-full md:col-span-8">
          <StepForm />
        </div>
      </div>
    </Container>
  );
}
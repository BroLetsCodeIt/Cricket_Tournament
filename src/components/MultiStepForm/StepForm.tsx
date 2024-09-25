"use client";

import { useAppSelector } from "../../hooks";
import ConfirmationReview from "./StepForms/ConfirmationReview";
import MatchSchedule from "./StepForms/MatchSchedule";
import RulesandRegulation from "./StepForms/RulesandRegulation";
import TeamRegistration from "./StepForms/TeamRegistration";
import TournamentDetails from "./StepForms/TournamentDetails";
// import EducationBackgroundForm from "./StepForms/EducationBackgroundForm";
// import FormConfirmation from "./StepForms/FormConfirmation";
// import PersonalInfoForm from "./StepForms/PersonalInfoForm";
// import PreferredLanguageForm from "./StepForms/PreferredLanguageForm";
// import ProgrammingExperienceForm from "./StepForms/ProgrammingExperienceForm";
// import TechnicalSkillsForm from "./StepForms/TechnicalSkillsForm";



export default function StepForm() {
  const currentStep = useAppSelector((store) => store.onboarding.currentStep);
  function renderFormByStep(step:number) {

    switch(step){
        case 1 : 
          return <TournamentDetails/>;
        case 2 : 
          return  <TeamRegistration/>;
        case 3 : 
          return   <MatchSchedule/>;
        case 4 : 
        return    <RulesandRegulation/>;
        case 5 : 
        return <ConfirmationReview/>
        
    }
    
  }
  return <>{renderFormByStep(currentStep)}</>;
}
import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import ContentMain from '../../components/ContentMain/ContentMain';
import { Route, Routes } from "react-router-dom";
import LearnerLicense from "../../Screens/Learner-driving-license";
import SuspendedLicense from "../../Screens/Suspended-driving-license";
import SchoolBusDriverTraining from "../../Screens/Training-for-school-bus-driver";
import SchoolStudentTraining from "../../Screens/School-students-training-group";
import CollegeOrgTrainingGroup from "../../Screens/College-organization-training–group";
import CollegeOrgTrainingIndivisual from "../../Screens/College-organization-training–indivisual";

const Content = () => {
  return (
    <div className={`${window.innerWidth > 1200 ? 'main-content' : 'main-content1'}`}>
      <ContentTop />
      <ContentMain />
      <Routes>
        <Route path="/learner-driving-license-holder-training" Component={LearnerLicense} />
        <Route path="/suspended-driving-license-holders-training" Component={SuspendedLicense} />
        <Route path="/training-for-school-bus-driver" Component={SchoolBusDriverTraining} />
        <Route path="/school-students-training-group" Component={SchoolStudentTraining} />
        <Route path="/college-organization-training–group" Component={CollegeOrgTrainingGroup} />
        <Route path="/college-organization-training–individual" Component={CollegeOrgTrainingIndivisual} />
      </Routes>
    </div>
  )
}

export default Content

import React, { FC } from "react";
import "./App.css";
import Dashboard from "./admin/pages/Dashboard";
import ManageStakeholderFeedback from "./admin/pages/ManageStakeholderFeedback";
import ManageIAEval from "./admin/pages/ManageIAEval";
import ManageQMSEval from "./admin/pages/ManageQMSEval";
import SFAnalytics from "./admin/pages/SFAnalytics";
import IAEAnalytics from "./admin/pages/IAEAnalytics";
import AcadTablePlan from "./admin/pages/AcadTablePlan";
import AcadTableDo from "./admin/pages/AcadTableDo";
import AcadTableCheck from "./admin/pages/AcadTableCheck";
import AcadTableAct from "./admin/pages/AcadTableAct";
import AdminTablePlan from "./admin/pages/AdminTablePlan";
import AdminTableDo from "./admin/pages/AdminTableDo";
import AdminTableCheck from "./admin/pages/AdminTableCheck";
import AdminTableAct from "./admin/pages/AdminTableAct";
import IATablePlan from "./admin/pages/IATablePlan";
import IATableDo from "./admin/pages/IATableDo";
import IATableCheck from "./admin/pages/IATableCheck";
import IATableAct from "./admin/pages/IATableAct";
import AddForm from "./admin/pages/AddForm";
import QMSChooseType from "./admin/pages/QMSChooseType";
import QMSunitorIA from "./admin/pages/QMSunitorIA";
import AcadPDCA from "./admin/pages/AcadPDCA";
import AdminPDCA from "./admin/pages/AdminPDCA";
import IAPDCA from "./admin/pages/IAPDCA";
import AdminProfile from "./admin/pages/AdminProfile";
import AcademicOrAdmin from "./admin/pages/AcademicOrAdmin";
import AddQuestionSF from "./admin/pages/AddQuestionSF";
import SFCharts from "./admin/pages/SFCharts";
import QMSCharts from "./admin/pages/QMSCharts";
import IACharts from "./admin/pages/IACharts";
import AcadEvalScorePDCA from "./admin/pages/AcadEvalScorePDCA";
import AcadEvalScoreSummaryPlan from "./admin/pages/AcadEvalScoreSummaryPlan";
import AcadEvalScoreSummaryDo from "./admin/pages/AcadEvalScoreSummaryDo";
import AcadEvalScoreSummaryCheck from "./admin/pages/AcadEvalScoreSummaryCheck";
import AcadEvalScoreSummaryAct from "./admin/pages/AcadEvalScoreSummaryAct";
import AdminEvalScorePDCA from "./admin/pages/AdminEvalScorePDCA";
import AdminEvalScoreSummaryPlan from "./admin/pages/AdminEvalScoreSummaryPlan";
import AdminEvalScoreSummaryDo from "./admin/pages/AdminEvalScoreSummaryDo";
import AdminEvalScoreSummaryCheck from "./admin/pages/AdminEvalScoreSummaryCheck";
import AdminEvalScoreSummaryAct from "./admin/pages/AdminEvalScoreSummaryAct";
import IAScorePDCA from "./admin/pages/IAScorePDCA";
import IAEvalScoreSummaryPlan from "./admin/pages/IAEvalScoreSummaryPlan";
import IAEvalScoreSummaryDo from "./admin/pages/IAEvalScoreSummaryDo";
import IAEvalScoreSummaryCheck from "./admin/pages/IAEvalScoreSummaryCheck";
import IAEvalScoreSummaryAct from "./admin/pages/IAEvalScoreSummaryAct";
import ManageUsers from "./admin/pages/ManageUsers";
import QMSAnalytics from "./admin/pages/QMSAnalytics";
import DocumentGrid from "./admin/pages/DocumentGrid";

import Home from "./user-side/pages/Home";
import LandingPage from "./user-side/pages/LandingPage";
import DataPrivacySF from "./user-side/pages/DataPrivacySF";
import DataPrivacyIAE from "./user-side/pages/DataPrivacyIAE";
import DataPrivacyQMS from "./user-side/pages/DataPrivacyQMS";
import StakeholderFeedback from "./user-side/pages/StakeholderFeedback";
import StakeholderFeedback2 from "./user-side/pages/StakeholderFeedback2";
import StakeholderFeedback2ver2 from "./user-side/pages/StakeholderFeedback2ver2";
import StakeholderFeedback3 from "./user-side/pages/StakeholderFeedback3";
import StakeholderFeedback3ver2 from "./user-side/pages/StakeholderFeedback3ver2";
import StakeholderFeedback4 from "./user-side/pages/StakeholderFeedback4";
import IAEval from "./user-side/pages/IAEval";
import IAEval2 from "./user-side/pages/IAEval2";
import IAEval3 from "./user-side/pages/IAEval3";
import IAEval4 from "./user-side/pages/IAEval4";
import UnitorIAQMSForm from "./user-side/pages/UnitorIAQMSForm";
import AcadorAdminForm from "./user-side/pages/AcadorAdminForm";
import AcademicFormPlan from "./user-side/pages/AcademicFormPlan";
import AcademicFormDo from "./user-side/pages/AcademicFormDo";
import AcademicFormCheck from "./user-side/pages/AcademicFormCheck";
import AcademicFormAct from "./user-side/pages/AcademicFormAct";
import AdminFormPlan from "./user-side/pages/AdminFormPlan";
import AdminFormDo from "./user-side/pages/AdminFormDo";
import AdminFormCheck from "./user-side/pages/AdminFormCheck";
import AdminFormAct from "./user-side/pages/AdminFormAct";
import QMSIAPlan from "./user-side/pages/QMSIAPlan";
import QMSIADo from "./user-side/pages/QMSIADo";
import QMSIACheck from "./user-side/pages/QMSIACheck";
import QMSIAAct from "./user-side/pages/QMSIAAct";
import UserProfile from "./user-side/pages/UserProfile";
import Login from "./admin/pages/Login";
import Register from "./admin/pages/Register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNavbar from "./admin/components/SideNavbar";
import SideNavbarUser from "./user-side/components/SideNavbarUser";

const App: FC = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route
            path="/admin/*"
            element={
              <>
                <SideNavbar />
                <div className="p-4 sm:ml-64">
                  <div className="p-2 border-gray-200 border-dashed rounded-lg mt-14">
                    <Routes>
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route
                        path="managestakeholder"
                        element={<ManageStakeholderFeedback />}
                      />
                      <Route path="manageiaeval" element={<ManageIAEval />} />
                      <Route path="manageqmseval" element={<ManageQMSEval />} />
                      <Route path="sfanalytics" element={<SFAnalytics />} />
                      <Route path="iaeanalytics" element={<IAEAnalytics />} />
                      <Route path="addform" element={<AddForm />} />
                      <Route path="acadtableplan" element={<AcadTablePlan />} />
                      <Route path="acadtabledo" element={<AcadTableDo />} />
                      <Route path="acadtablecheck" element={<AcadTableCheck />} />
                      <Route path="acadtableact" element={<AcadTableAct />} />
                      <Route path="admintableplan" element={<AdminTablePlan />} />
                      <Route path="admintabledo" element={<AdminTableDo />} />
                      <Route path="admintablecheck" element={<AdminTableCheck />} />
                      <Route path="admintableact" element={<AdminTableAct />} />
                      <Route path="iatableplan" element={<IATablePlan />} />
                      <Route path="iatabledo" element={<IATableDo />} />
                      <Route path="iatablecheck" element={<IATableCheck />} />
                      <Route path="iatableact" element={<IATableAct />} />
                      <Route path="qmschoosetype" element={<QMSChooseType />} />
                      <Route path="unitoria" element={<QMSunitorIA />} />
                      <Route path="acadoradmin" element={<AcademicOrAdmin />} />
                      <Route path="acadPDCA" element={<AcadPDCA />} />
                      <Route path="adminPDCA" element={<AdminPDCA />} />
                      <Route path="iaPDCA" element={<IAPDCA />} />
                      <Route path="adminprofile" element={<AdminProfile />} />
                      <Route path="addquestionSF" element={<AddQuestionSF />} />
                      <Route path="sfcharts" element={<SFCharts />} />
                      <Route path="iacharts" element={<IACharts />} />
                      <Route path="qmscharts" element={<QMSCharts />} />
                      <Route path="acadscorepdca" element={<AcadEvalScorePDCA />} />
                      <Route path="acadscoreplan" element={<AcadEvalScoreSummaryPlan />} />
                      <Route path="acadscoredo" element={<AcadEvalScoreSummaryDo />} />
                      <Route path="acadscorecheck" element={<AcadEvalScoreSummaryCheck />} />
                      <Route path="acadscoreact" element={<AcadEvalScoreSummaryAct />} />
                      <Route path="adminscorepdca" element={<AdminEvalScorePDCA />} />
                      <Route path="adminscoreplan" element={<AdminEvalScoreSummaryPlan />} />
                      <Route path="adminscoredo" element={<AdminEvalScoreSummaryDo />} />
                      <Route path="adminscorecheck" element={<AdminEvalScoreSummaryCheck />} />
                      <Route path="adminscoreact" element={<AdminEvalScoreSummaryAct />} />
                      <Route path="iascorePDCA" element={<IAScorePDCA />} />
                      <Route path="iascoreplan" element={<IAEvalScoreSummaryPlan />} />
                      <Route path="iascoredo" element={<IAEvalScoreSummaryDo />} />
                      <Route path="iascorecheck" element={<IAEvalScoreSummaryCheck />} />
                      <Route path="iascoreact" element={<IAEvalScoreSummaryAct />} />
                      <Route path="manageusers" element={<ManageUsers />} />
                      <Route path="qmsanalytics" element={<QMSAnalytics />} />
                      <Route path="grid" element={<DocumentGrid />} />
                    </Routes>
                  </div>
                </div>
              </>
            }
          />

          <Route
            path="/*"
            element={
              <>  
              <SideNavbarUser />
                <div className="p-4 sm:ml-64">
                  <div className="p-2 border-gray-200 border-dashed rounded-lg mt-9">
                    <Routes>
                      <Route path="/landingpage" element={<LandingPage />} />
                      <Route path="/stakeholderfeedback" element={<StakeholderFeedback />} />
                      <Route path="/stakeholderfeedback2" element={<StakeholderFeedback2 />} />
                      <Route path="/stakeholderfeedback3" element={<StakeholderFeedback3 />} />
                      <Route path="/stakeholderfeedback2ver2" element={<StakeholderFeedback2ver2 />} />
                      <Route path="/stakeholderfeedback3ver2" element={<StakeholderFeedback3ver2 />} />
                      <Route path="/stakeholderfeedback4" element={<StakeholderFeedback4 />} />
                      <Route path="/iaeval" element={<IAEval />} />
                      <Route path="/iaeval2" element={<IAEval2 />} />
                      <Route path="/iaeval3" element={<IAEval3 />} />
                      <Route path="/iaeval4" element={<IAEval4 />} />
                      <Route path="/dataprivacySF" element={<DataPrivacySF />} />
                      <Route path="/dataprivacyIAE" element={<DataPrivacyIAE />} />
                      <Route path="/dataprivacyQMS" element={<DataPrivacyQMS />} />
                      <Route path="/unitoriaform" element={<UnitorIAQMSForm />} />
                      <Route path="/acadoradminform" element={<AcadorAdminForm />} />
                      <Route path="/academicformplan" element={<AcademicFormPlan />} />
                      <Route path="/academicformdo" element={<AcademicFormDo />} />
                      <Route path="/academicformcheck" element={<AcademicFormCheck />} />
                      <Route path="/academicformact" element={<AcademicFormAct />} />
                      <Route path="/adminformplan" element={<AdminFormPlan />} />
                      <Route path="/adminformdo" element={<AdminFormDo />} />
                      <Route path="/adminformcheck" element={<AdminFormCheck />} />
                      <Route path="/adminformact" element={<AdminFormAct />} />
                      <Route path="/qmsiaplan" element={<QMSIAPlan />} />
                      <Route path="/qmsiado" element={<QMSIADo />} />
                      <Route path="/qmsiacheck" element={<QMSIACheck />} />
                      <Route path="/qmsiaact" element={<QMSIAAct />} />
                      <Route path="/userprofile" element={<UserProfile />} />
                    </Routes>
                    </div>
                    </div>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;

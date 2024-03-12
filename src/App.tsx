import React, { FC } from "react";
import "./App.css";
import Dashboard from "./admin/pages/Dashboard";
import ManageStakeholderFeedback from "./admin/pages/ManageStakeholderFeedback";
import ManageIAEval from "./admin/pages/ManageIAEval";
import ManageQMSEval from "./admin/pages/ManageQMSEval";
import SFAnalytics from "./admin/pages/SFAnalytics";
import IAEAnalytics from "./admin/pages/IAEAnalytics";
import QMSAnalytics from "./admin/pages/QMSAnalytics";
import AddForm from "./admin/pages/AddForm";
import IAChooseType from "./admin/pages/IAChooseType";
import QMSunitorIA from "./admin/pages/QMSunitorIA";
import AcademicOrAdmin from "./admin/pages/AcademicOrAdmin";
import DocumentGrid from "./admin/pages/DocumentGrid";

import Home from "./user-side/pages/Home";
import LandingPage from "./user-side/pages/LandingPage";
import DataPrivacySF from "./user-side/pages/DataPrivacySF";
import DataPrivacyIAE from "./user-side/pages/DataPrivacyIAE";
import DataPrivacyQMS from "./user-side/pages/DataPrivacyQMS";
import StakeholderFeedback from "./user-side/pages/StakeholderFeedback";
import StakeholderFeedback2 from "./user-side/pages/StakeholderFeedback2";
import StakeholderFeedback3 from "./user-side/pages/StakeholderFeedback3";
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


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNavbar from "./admin/components/SideNavbar";
// import SideNavbarUser from "./user-side/components/SideNavbarUser";

const App: FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/admin/*"
            element={
              <>
                <SideNavbar />
                <div className="p-4 sm:ml-64">
                  <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg mt-14">
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
                      <Route path="qmsanalytics" element={<QMSAnalytics />} />
                      <Route path="iachoosetype" element={<IAChooseType />} />
                      <Route path="unitoria" element={<QMSunitorIA />} />
                      <Route path="acadoradmin" element={<AcademicOrAdmin />} />
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
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/landingpage" element={<LandingPage />} />
                      <Route path="/stakeholderfeedback" element={<StakeholderFeedback />} />
                      <Route path="/stakeholderfeedback2" element={<StakeholderFeedback2 />} />
                      <Route path="/stakeholderfeedback3" element={<StakeholderFeedback3 />} />
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
                    </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;

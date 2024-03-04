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

import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import SideNavbar from "./admin/components/SideNavbar";

const AdminLayout = () => (
  <>
    <SideNavbar />
    <div className="p-4 sm:ml-64">  
      <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg mt-14">
        <Outlet /> 
      </div>
    </div>
  </>
);

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="managestakeholder" element={<ManageStakeholderFeedback />} />
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
        </Route>
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import CustomSoftwareDevelopment from "./pages/CustomSoftwareDevelopment";
import WebApplicationDevelopment from "./pages/WebApplicationDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import AIAutomation from "./pages/AIAutomation";
import CloudDevOps from "./pages/CloudDevOps";
import QATestAutomation from "./pages/QATestAutomation";
import RealEstateSolutions from "./pages/RealEstateSolutions";
import FinanceSolutions from "./pages/FinanceSolutions";
import HealthcareSolutions from "./pages/HealthcareSolutions";
import LogisticsSolutions from "./pages/LogisticsSolutions";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import "./index.css";

const path = window.location.pathname.replace(/\/+$/, "") || "/";

let Page = App;

if (path === "/services/custom-software-development") {
  Page = CustomSoftwareDevelopment;
}

if (path === "/services/web-application-development") {
  Page = WebApplicationDevelopment;
}

if (path === "/services/mobile-app-development") {
  Page = MobileAppDevelopment;
}

if (path === "/services/ai-automation") {
  Page = AIAutomation;
}

if (path === "/services/cloud-devops") {
  Page = CloudDevOps;
}

if (path === "/services/qa-test-automation") {
  Page = QATestAutomation;
}

if (path === "/industries/real-estate") {
  Page = RealEstateSolutions;
}
if (path === "/industries/finance") {
  Page = FinanceSolutions;
}
if (path === "/industries/healthcare") {
  Page = HealthcareSolutions;
}
if (path === "/industries/logistics") {
  Page = LogisticsSolutions;
}
if (path === "/about") {
  Page = About;
}
if (path === "/work") {
  Page = Work;
}
if (path === "/contact") {
  Page = Contact;
}
if (path === "/services") {
  Page = Services;
}
if (path === "/industries") {
  Page = Industries;
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);

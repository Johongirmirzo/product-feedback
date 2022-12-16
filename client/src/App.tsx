import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Register = React.lazy(() => import("./pages/Register/Register"));
const AddFeedback = React.lazy(() => import("./pages/AddFeedback/AddFeedback"));
const EditFeedback = React.lazy(
  () => import("./pages/EditFeedback/EditFeedback")
);
const Feedback = React.lazy(() => import("./pages/Feedback/Feedback"));
const Roadmap = React.lazy(() => import("./pages/Roadmap/Roadmap"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const AccountSettings = React.lazy(
  () => import("./pages/Profile/AccountSettings/AccountSettings")
);
const PersonalInfo = React.lazy(
  () => import("./pages/Profile/PersonalInfo/PersonalInfo")
);
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/addFeedback" element={<AddFeedback />} />
              <Route
                path="/editFeedback/:feedbackId"
                element={<EditFeedback />}
              />
              <Route path="/feedback/:feedbackId" element={<Feedback />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/profile" element={<Profile />}>
                <Route index element={<AccountSettings />} />
                <Route path="personalInfo" element={<PersonalInfo />} />
              </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default App;

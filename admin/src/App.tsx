import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const Home = React.lazy(() => import("./Pages/Home/Home"));
const Login = React.lazy(() => import("./Pages/Login/Login"));
const NotFound = React.lazy(() => import("./Pages/NotFound/NotFound"));
const Dashboard = React.lazy(
  () => import("./Pages/Home/MainArea/Feedback/Feedback")
);
const AccountSettings = React.lazy(
  () => import("./Pages/Home/MainArea/AccountSettings/AccountSettings")
);

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Dashboard />} />
              <Route path="settings" element={<AccountSettings />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default App;

/**
 * login
 * logout
 * change feedback status
 * change admin email, password, username
 *
 * Sidebar
 *  Logo
 *  AdminLogout
 *  Dashboard
 *  Settings
 *    ChangeUsername
 *    ChangeEmail
 *    ChangePassword
 * MainArea
 *  Dashboard
 *    FilterFeedback
 *    FeedbackList
 *      FeedbackItem
 *
 *
 *
 *
 */

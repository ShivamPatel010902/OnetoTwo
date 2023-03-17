import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import { Home, Profile, SignIn, Registerfor,PersonalInfo,Religioninfo,Contactinfo,BrowesProfiles} from "@/pages";
import EngagementParty from "./pages/EngagementParty";

function App() {
  const paths = [
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Registerfor />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/browesprofiles",
      element: <BrowesProfiles/>,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/engagementparty",
      element: <EngagementParty />,
    },
    {
      path: "/register/personalinfo",
      element: <PersonalInfo />,
    },
    {
      path: "/register/religioninfo",
      element: <Religioninfo />,
    },
    {
      path: "/register/contactinfo",
      element: <Contactinfo />,
    },
  ]
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <Routes>
        {paths.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;

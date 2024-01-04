import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
    </Route>
    // <Route errorElement={<ErrorPage />}>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Homepage />} />
    //     <Route path="login" element={<Login />} loader={loginLoader} />
    //     <Route path="logout" element={<Logout />} />;
    //     <Route path="signup" element={<Signup />} loader={signupLoader} />
    //     <Route element={<ContestPageLayout />}>
    //       <Route path="contests" element={<Filter />} />
    //       <Route path="challenges" element={<Challenges />} />
    //       <Route path="hackathons" element={<ComingSoonLoader value='Hackathons' />} />
    //       <Route path="internships" element={<ComingSoonLoader value='Internships' />} />
    //       <Route path="jobs" element={<ComingSoonLoader value='Jobs' />} />
    //     </Route>
    //     {/* <Route path="updates" element={<Updates />} /> */}
    //     <Route path="home" element={<Homepage />} />
    //     <Route path="feedback" element={<Feedback />} />
    //     <Route path="contact" element={<About />} />
    //     <Route path="about" element={<About />} />
    //     <Route path="discord" element={<DiscordRedirect />} />
    //     <Route path="contests/:vanity" element={<IndividualCard />} />
    //     <Route path="404" element={<ErrorPage />} />
    //   </Route>
    //   <Route path="/admin" element={<AdminPanelGuard />}>
    //     <Route path="user" element={<UserListPage />}></Route>
    //     <Route path="contest" element={<ContestListPage />}></Route>
    //     <Route path="community" element={<CommunityListPage />}></Route>
    //   </Route>
    //   <Route path="/u" element={<ProtectedRoute />}>
    //     {/* <Route path="dashboard" element={<UserDashboard/>}> */}
    //     <Route path="dashboard">
    //       <Route
    //         index
    //         element={<UserDashboard />}
    //       // loader={userDashPersonalLoader}
    //       // loader={userDashPersonalLoader}
    //       />
    //       <Route
    //         path="account"
    //         element={<UserDashPersonal />}
    //         loader={userDashPersonalLoader}
    //       />
    //       <Route path="ratings" element={<UserDashRatings />} />
    //       <Route
    //         path="github"
    //         element={<UserDashGithub />}
    //         loader={userDashGithubLoader}
    //       />
    //     </Route>
    //   </Route>
    //   <Route
    //     path="/u/:username"
    //     element={<ProfileLayout />}
    //     loader={profileLoader}
    //   >
    //     <Route index element={<NewUserProfile />} />
    //     <Route path="about" element={<div>User about</div>} />
    //     {/* <Route path="resume" element={<Resume />} /> */}
    //     <Route path="socials" element={<div>Socials</div>} />
    //     <Route path="github" element={<div>Github</div>} />
    //     <Route path="ratings" element={<ProfileRatingsPage />}>
    //       <Route path=":platform" element={<PlatformRatings />} />
    //     </Route>
    //   </Route>
    //   <Route path="/u/leaderboard" element={<Leaderboard />} />
    // </Route>,
  )
);
import Snowfall from "react-snowfall";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <div>
        <Snowfall
          snowflakeCount={100}
          speed={[0.2, 1]}
          wind={[0, 1]}
          style={{ position: "fixed", zIndex: 999999 }}
        />
        <RouterProvider router={router} />
      </div>
    </>
  );
}
export default App;

import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Header from "./Header";
import { IoHome } from "react-icons/io5";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import DashboardHome from "./DashboardHome";
import DashboardUsers from "./DashboardUsers";
import DashboardSongs from "./DashboardSongs";
import DashboardAlbums from "./DashboardAlbums";
import DashboardArtists from "./DashboardArtists";
import DashBoardNewSong from "./DashBoardNewSong";
import Alert from "./Alert";
import { useStateValue } from "../context/StateProvider.js";

const Dashboard = () => {
  const [{ alertType }, dispatch] = useStateValue();
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <Header />
      <div className="w-[60%] my-2 p-4 flex items-center justify-evenly">
        <NavLink to={"/dashboard/home"}>
          <IoHome className="text-2xl text-textColor" />
        </NavLink>

        <NavLink
          to={"/dashboard/user"}
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
        >
          Users
        </NavLink>

        <NavLink
          to={"/dashboard/songs"}
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
        >
          songs
        </NavLink>

        <NavLink
          to={"/dashboard/artist"}
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
        >
          artist
        </NavLink>

        <NavLink
          to={"/dashboard/albums"}
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
        >
          albums
        </NavLink>
      </div>

      <div className="my-4 w-full p-4">
        <Routes>
          <Route path="/home" element={<DashboardHome />} />
          <Route path="/user" element={<DashboardUsers />} />
          <Route path="/songs" element={<DashboardSongs />} />
          <Route path="/artist" element={<DashboardArtists />} />
          <Route path="/albums" element={<DashboardAlbums />} />
          <Route path="/newSong" element={<DashBoardNewSong />} />
        </Routes>
        {alertType && <Alert type={alertType} />}
      </div>
    </div>
  );
};

export default Dashboard;

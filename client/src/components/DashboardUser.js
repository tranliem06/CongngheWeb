import React, { useEffect, useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { motion } from "framer-motion";
// import { getAllUsers } from "../api";
// import { actionType } from "../Context/reducer";
// import { useStateValue } from "../Context/StateProvider";
import DashboardUserCard from "./DashboardUserCard";

const DashboardUser = () => {
  //   const [isFocus, setIsFocus] = useState(false);

  //   const [{ allUsers }, dispatch] = useStateValue();

  //   useEffect(() => {
  //     if (!allUsers) {
  //       getAllUsers().then((data) => {
  //         dispatch({
  //           type: actionType.SET_ALL_USERS,
  //           allUsers: data.data,
  //         });
  //       });
  //     }
  //   }, []);

  return (
    <div className="w-full p-4 flex items-center justify-center flex-col">
      <div className="relative w-full py-12 min-h-[400px] overflow-x-scroll scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-400 my-4 flex flex-col items-center justify-start p-4 border border-gray-300 rounded-md gap-3">
        <div className="absolute top-4 left-4">
          <p className="text-xl font-bold">
            <span className="text-sm font-semibold text-textColor">
              Count :{" "}
            </span>
            {/* {filtereUsers ? filtereUsers?.length : allUsers?.length} */}
            10
          </p>
        </div>

        <div className="w-full min-w-[750px] flex items-center justify-between">
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Username</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Password</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Age</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Phone</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Address</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Created</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Role</p>{" "}
        </div>
        {/* {allUsers && !filtereUsers
          ? allUsers?.map((data, i) => (
              <DashboardUserCard data={data} key={data._id} index={i} />
            ))
          : filtereUsers?.map((data, i) => (
              <DashboardUserCard data={data} key={data._id} index={i} />
            ))} */}
      </div>
    </div>
  );
};

export default DashboardUser;

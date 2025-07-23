import React from "react";
import { fetchUserData } from "@/actions/action";
import Image from "next/image";

const profilePage = async () => {
  const userData = await fetchUserData();
  console.log("user", userData);
  return (
    <div className="flex justify-center items-center min-h-[70vh] py-10">
      <div className="rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <Image
            src={userData.profile.profileImage}
            alt="Profile Image"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow mb-4"
          />
          <h2 className="text-xl font-bold mb-1">
            {userData.profile.userName}
          </h2>
          <p>{userData.profile.email}</p>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div>
            <span className="font-semibold">First Name:</span>{" "}
            {userData.user.firstName}
          </div>
          <div>
            <span className="font-semibold">Last Name:</span>{" "}
            {userData.user.lastName}
          </div>
          <div>
            <span className="font-semibold">Clerk ID:</span>{" "}
            <span className="break-all">{userData.user.id}</span>
          </div>
          <div>
            <span className="font-semibold">Created At:</span>{" "}
            {new Date(userData.profile.createdAt).toLocaleString()}
          </div>
          <div>
            <span className="font-semibold">Updated At:</span>{" "}
            {new Date(userData.profile.updatedAt).toLocaleString()}
          </div>
          <div>
            <span className="font-semibold">Last Active At:</span>{" "}
            {userData.user.lastActiveAt
              ? new Date(userData.user.lastActiveAt).toLocaleString()
              : "-"}
          </div>
          <div>
            <span className="font-semibold">Last Sign in At:</span>{" "}
            {userData.user.lastSignInAt
              ? new Date(userData.user.lastSignInAt).toLocaleString()
              : "-"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default profilePage;

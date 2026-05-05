import { fetchUserData } from "@/actions/action";
import Image from "next/image";

const ProfilePage = async () => {
  const userData = await fetchUserData();

  return (
    <div className="flex justify-center items-center min-h-[70vh] py-10">
      <div className="rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <Image
            src={userData.profile.profileImage}
            alt={userData.profile.userName}
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow mb-4"
          />
          <h2 className="text-xl font-bold mb-1">
            {userData.profile.userName}
          </h2>
          <p className="text-muted-foreground">{userData.profile.email}</p>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div>
            <span className="font-semibold">First Name:</span>{" "}
            {userData.profile.firstName}
          </div>
          <div>
            <span className="font-semibold">Last Name:</span>{" "}
            {userData.profile.lastName}
          </div>
          <div>
            <span className="font-semibold">Member Since:</span>{" "}
            {new Date(userData.profile.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
import React from "react";
import { ScreenContent } from "@/shared/ui/ScreenContent";
import { Avatar, ProfileList } from "@/features/profile";
import { useGetUser } from "@/features/profile/lib/hooks/profile";
import { useUserStore } from "@/features/profile/lib/store/UserStore";

const Profile = () => {
  const { data } = useGetUser();
  const update = useUserStore((store) => store.updateUser);

  if (!data) return null;
  update(data.data);
  return (
    <ScreenContent>
      <Avatar user={data.data} />

      <ProfileList />
    </ScreenContent>
  );
};

export default Profile;

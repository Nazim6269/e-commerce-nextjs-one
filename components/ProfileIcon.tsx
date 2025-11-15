"use client";

import Image from "next/image";
import { useState } from "react";
import SettingModal from "./SettingModal";

const ProfileIcon = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <>
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={() => setIsProfileOpen((prev) => !prev)}
      />
      {isProfileOpen && <SettingModal />}
    </>
  );
};

export default ProfileIcon;

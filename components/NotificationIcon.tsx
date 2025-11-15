import Image from "next/image";

const NotificationIcon = () => {
  return (
    <Image
      src="/notification.png"
      alt=""
      width={22}
      height={22}
      className="cursor-pointer"
    />
  );
};

export default NotificationIcon;

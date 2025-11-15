import Image from "next/image";

const DashboardIcon = () => {
  return (
    <div className="flex justify-center items-center gap-1 border border-1 p-2 rounded-sm">
      <Image src="/lock.png" alt="" width={22} height={22} />
      Dashboard
    </div>
  );
};

export default DashboardIcon;

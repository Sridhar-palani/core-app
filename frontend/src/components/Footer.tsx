export const Footer = () => {
  return (
    <div className="bg-gray-800 py-10">
      <div className="container flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          VacationStay.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default function Project() {
  return (
    <>
      <div className="w-full px-72 pt-28">
        <div className="flex h-[500px] w-full flex-col gap-2 lg:h-[340px] lg:flex-row">
          <div className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-lg relative">
            <img
              src="/project-landing-page.png"
              className="object-cover h-full w-full absolute inset-0 rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
              <p className="text-lg">Landing Page</p>
            </div>
          </div>
          <div className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-lg relative">
            <img
              src="/project-pelatihan.png"
              className="object-cover h-full w-full absolute inset-0 rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
              <p className="text-lg">PT INKINDO - Manajemen Pelatihan</p>
            </div>
          </div>
        </div>
        <div className="flex h-[500px] w-full flex-col gap-2 lg:h-[340px] lg:flex-row mt-5">
          <div className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-lg relative">
            <img
              src="/fana-store-ecommerce.png"
              className="object-cover h-full w-full absolute inset-0 rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
              <p className="text-lg">Fana Store E-commerce</p>
            </div>
          </div>
          <div className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-lg relative">
            <img
              src="/project-ats.png"
              className="object-cover h-full w-full absolute inset-0 rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
              <p className="text-lg">PT UMDI - Applicant Tracking System</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

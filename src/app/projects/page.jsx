export default function Project() {
  return (
    <>
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 pt-28">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-lg relative">
            <img
              src="/project-landing-page.png"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
              <p className="text-lg">Personal Blog </p>
            </div>
          </div>
          <div className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-lg relative">
            <img
              src="/project-pelatihan.png"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
              <p className="text-lg">PT INKINDO - Manajemen Pelatihan</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row mt-5">
          <div className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-lg relative">
            <img
              src="/fana-store-ecommerce.png"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
              <p className="text-lg">Fana Store E-commerce</p>
            </div>
          </div>
          <div className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-lg relative">
            <img
              src="/project-ats.png"
              className="object-cover w-full h-full"
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

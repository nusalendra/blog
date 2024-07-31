import { BorderBeam } from "@/components/magicui/border-beam";
import WordRotate from "@/components/magicui/word-rotate";

export default function Home() {
  return (
    <>
      <div className="flex-grow">
        <div className="mt-40 flex justify-center items-center sm:mt-56">
          <div className="text-start pr-8" style={{ width: "500px" }}>
            <h2 className="font-bold text-gray-700 sm:text-sm lg:text-3xl">
              Nusalendra Putra Restu Bumi
            </h2>
            <div className="mt-4 sm:mt-0" style={{ height: "50px" }}>
              <WordRotate
                className="font-normal sm:text-xs lg:text-lg"
                style={{ height: "100%", overflow: "hidden" }}
                words={[
                  "Junior Web Developer",
                  "Current programming language is PHP and Javascript",
                  "Building web apps using Laravel and Reactjs",
                  "I'm 22 years old and still passionate about learning",
                ]}
              />
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-visible"
            style={{ width: "800px" }}
          >
            <img
              src="/logo-homepage.png"
              alt="Hero Image"
              className="hidden w-full rounded-[inherit] border object-contain shadow-lg dark:block"
            />
            <img
              src="/dashboard-light.png"
              alt="Hero Image"
              className="block w-full rounded-[inherit] border object-contain shadow-lg dark:hidden"
            />
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </div>
    </>
  );
}

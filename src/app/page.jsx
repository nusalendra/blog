import { BorderBeam } from "@/components/magicui/border-beam";
import WordRotate from "@/components/magicui/word-rotate";

export default function Home() {
  return (
    <>
      <div className="flex-grow sm:p-5 lg:p-5 xl:p-0">
        <div className="mt-40 lg:flex lg:justify-center lg:items-center sm:mt-24">
          <div className="text-start pr-8" style={{ width: "500px" }}>
            <h2 className="font-bold text-gray-700 sm:text-lg lg:text-3xl">
              Nusalendra Putra Restu Bumi
            </h2>
            <div className="mt-4 sm:mt-0" style={{ height: "50px", overflow: "hidden" }}>
              <WordRotate
                key="word-rotate"
                className="font-normal sm:text-sm lg:text-lg"
                style={{ height: "100%", overflow: "hidden", display: "flex", alignItems: "center" }}
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
            className="relative rounded-lg overflow-hidden w-full lg:w-1/2 lg:mt-0"
          >
            <img
              src="/logo-homepage.png"
              alt="Hero Image"
              className="block w-full rounded-[inherit] border object-contain shadow-lg dark:block"
            />
            <BorderBeam
              size={250}
              duration={12}
              delay={9}
              style={{ position: "absolute", maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

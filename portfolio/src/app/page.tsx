import Image from "next/image";
import codeBackground from "../../assets/code-background.png";
import myPhoto from "../../assets/my-photo.png";
import reactIcon from "../../assets/react.png";
import uiuxIcon from "../../assets/uiux.png";
import videoEditingIcon from "../../assets/video.png";
import { Moon } from "lucide-react";

export default function Home() {
  return (
    <main className=" bg-[#0B1328] min-h-screen select-none p-8">
      <div className="flex flex-col gap-8">
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}

function NavBar() {
  return (
    <div className="flex items-center justify-between mx-6 ">
      <h1 className="font-bold text-2xl tracking-widest text-white ">
      &lt;gal/&gt;
      </h1>
      <div className="text-white flex items-center font-normal text-base gap-6">
        <a href="#hero">About me</a>
        <a href="#skills">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
        <Moon size={18} />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div id="hero" className="relative flex overflow-hidden ">
      <Image
        src={codeBackground}
        style={{ objectFit: "cover", scale: 1.5, zIndex: 0 }}
        alt="Code Background"
        layout="fill"
        className="object-cover"
      />
      <div className="relative flex items-center">
        <Image
          src={myPhoto}
          // sizes="auto"
          style={{
            width: "50%",
            height: "auto",
            paddingTop: 10,
            paddingBottom: 10,
          }}
          alt="my photo"
        />
        <div className="flex flex-col items-end max-w-[50%] gap-3 py-6">
          <h2 className="text-white text-5xl text-right font-extralight">
            Hi!
          </h2>
          <h1 className="bg-[#FFD602] text-right font-bold text-6xl inline-block py-2 px-5">
          I&apos;m Galih Karya
          </h1>
          <p className="text-white text-right font-normal">
            I am an undergraduate student at Computer Engineering Department,
            Telkom University. My academic journey has equipped me with a strong
            foundation in mobile app development and machine learning. The
            project that significantly contributed to my professional growth was
            my final project and internship at PTDI.
          </p>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div id="skills" className="flex flex-col gap-5">
      <h2 className="text-white text-center font-bold text-base">
        WHAT I&apos;M GREAT AT
      </h2>
      <div className="flex items-center gap-6 justify-center">
        <div className="flex items-center gap-4">
          <Image alt="react icon" width={29} height={29} src={reactIcon} />
          <p className="text-white font-light text-sm">Front-end Development</p>
        </div>
        <div className="flex items-center gap-4">
          <Image alt="react icon" width={29} height={29} src={uiuxIcon} />
          <p className="text-white font-light text-sm">UI/UX Design</p>
        </div>
        <div className="flex items-center gap-4">
          <Image
            alt="react icon"
            width={29}
            height={29}
            src={videoEditingIcon}
          />
          <p className="text-white font-light text-sm">Video Editing</p>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2 className="text-white text-center font-bold text-base">
        MY PROJECTS
      </h2>

    </div>
  );
}

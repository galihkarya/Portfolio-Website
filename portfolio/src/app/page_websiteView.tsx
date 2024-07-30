import Image from "next/image";
import codeBackground from "../../assets/code-background.png";
import myPhoto from "../../assets/my-photo.png";
import reactIcon from "../../assets/react.png";
import uiuxIcon from "../../assets/uiux.png";
import videoEditingIcon from "../../assets/video.png";
import { Moon } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 0,
    title: "KuyStudy",
    description:
      'KuyStudy is a concept application for the "learning with teacher" booking system. - GEMASTIK XIV ',
    image: "/assets/Projectimage-4.jpg",
  },
  {
    id: 1,
    title: "E-Commerce",
    description:
      "E-Commerce is a concept of marketplace with a simple-clean design - class assignment",
    image: "/assets/Projectimage-3.jpg",
  },
  {
    id: 2,
    title: "PawMatch",
    description:
      "PawMatch is an platform in a form of Android application for users that have pet and want to match their pets - final class assignment",
    image: "/assets/Projectimage-2.jpg",
  },
  {
    id: 3,
    title: "Persona",
    description:
      "Persona is an Android application that brings personality identification system. - final college assignment",
    image: "/assets/Projectimage-1.jpg",
  },
];

export default function Home() {
  return (
    <main id="main" className=" bg-[#0B1328] min-h-screen select-none ">
      <NavBar />
      <div id="main-content" className="flex flex-col gap-24 p-8">
        <Hero />
        <Skills />
        <Projects />
      </div>
      <Contact />
    </main>
  );
}

function NavBar() {
  return (
    <div className="flex items-center justify-between px-16 py-6">
      <h1 className="font-bold text-2xl tracking-widest text-white ">
        &lt;gal/&gt;
      </h1>
      <div className="text-white flex items-center font-normal text-base gap-6">
        <a href="#hero">About me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
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

function ProjectComponent({ project }: any) {
  // const [i, setI] = useState(0);
  // setI(prevCount => prevCount + 1)
  return (
    <div className=" flex justify-between items-start gap-[8%] ">
      <div className="min-w-[35%] max-w-[40%] ">
        <h3 className="text-white font-medium text-left">
          01 / {project.title}
        </h3>
        <p className="text-white font-extralight text-left">
          {project.description}
        </p>
      </div>
      <div className="flex-shrink-0">
        <Image
          alt={project.title}
          src={project.image}
          width={320}
          height={180}
        />
      </div>
    </div>
  );
}

function Projects() {
  const sortedProjects = projects.sort((a, b) => b.id - a.id);

  return (
    <div id="projects" className="flex flex-col gap-5">
      <h2 className="text-white text-center font-bold text-base">
        MY PROJECTS
      </h2>
      <div className="flex flex-col gap-4 mx-[10%]">
        {sortedProjects.map((project) => (
          <ProjectComponent key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" className="flex flex-col gap-5 bg-[#0D111E] items-center py-6">
      <h2 className="text-white text-center font-bold text-base">CONTACT ME</h2>
      <div className="flex justify-center gap-6">
        <a href="https://www.instagram.com/galihkarya_g/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/Instagram.png"
            alt="instagram"
            width={45}
            height={45}
          />
        </a>
        <a href="https://www.linkedin.com/in/galihkarya/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/LinkedIn.png"
            alt="linkedin"
            width={45}
            height={45}
          />
        </a>
        <a href="mailto:galihkaryagemilang2001@gmail.com" target="_blank" rel="noopener noreferrer">
          <Image src="/assets/Email.png" alt="email" width={45} height={45} />
        </a>
      </div>
      <h3 className="text-white font-thin opacity-50">handcrafted with  ❤️  2024</h3>
    </div>
  );
}

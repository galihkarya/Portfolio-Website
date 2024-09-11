"use client";

import Image from "next/image";
import codeBackground from "../../assets/code-background.png";
import myPhoto from "../../assets/my-photo.png";
import reactIcon from "../../assets/react.png";
import uiuxIcon from "../../assets/uiux.png";
import videoEditingIcon from "../../assets/video.png";
import figmaIcon from "../../assets/figma.png";
import mlIcon from "../../assets/ml.png";

import { Moon, AlignJustify, X } from "lucide-react";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const projects = [
  {
    id: 0,
    title: "KuyStudy",
    description:
      'KuyStudy is a concept application for the "learning with teacher" booking system. - GEMASTIK XIV ',
    image: "/assets/Projectimage-4.jpg",
    tags: [uiuxIcon, figmaIcon],
  },
  {
    id: 1,
    title: "E-Commerce",
    description:
      "E-Commerce is a concept of marketplace with a simple-clean design - class assignment",
    image: "/assets/Projectimage-3.jpg",
    tags: [uiuxIcon, figmaIcon],
  },
  {
    id: 2,
    title: "PawMatch",
    description:
      "PawMatch is an platform in a form of Android application for users that have pet and want to match their pets - final class assignment",
    image: "/assets/Projectimage-2.jpg",
    tags: [reactIcon, uiuxIcon, figmaIcon],
  },
  {
    id: 3,
    title: "Persona",
    description:
      "Persona is an Android application that brings personality identification system using Yolov8 - thesis project",
    image: "/assets/Projectimage-1.jpg",
    tags: [reactIcon, uiuxIcon, figmaIcon, mlIcon],
  },
];

const projectsReversed = [...projects].reverse();

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      <div className="flex items-center justify-between px-10 py-6">
        <h1 className="font-bold text-2xl tracking-widest text-white ">
          &lt;gal/&gt;
        </h1>
        <button onClick={toggleSidebar}>
          <AlignJustify className="md:hidden" color="white" size={20} />
        </button>
        <div className="text-white hidden md:flex flex-row items-center font-normal text-base gap-6">
          <a href="#hero">About me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          {/* <Moon size={20} /> */}
        </div>
      </div>

      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 backdrop-blur-md bg-[#171c2a]/30 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button className=" items-center px-4 py-4" onClick={toggleSidebar}>
          <X size={24} />
        </button>
        <div className="flex flex-col h-[90%]  justify-between ">
          <div>
            <nav className="my-8">
              <a
                href="#hero"
                className="block py-2.5 px-4 hover:bg-gray-700/50"
                onClick={toggleSidebar}
              >
                About me
              </a>
              <a
                href="#skills"
                className="block py-2.5 px-4 hover:bg-gray-700/50"
                onClick={toggleSidebar}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block py-2.5 px-4 hover:bg-gray-700/50"
                onClick={toggleSidebar}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block py-2.5 px-4 hover:bg-gray-700/50"
                onClick={toggleSidebar}
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="px-4">{/* <Moon color="white" size={20} /> */}</div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div id="hero" className="relative flex overflow-hidden">
      <Image
        src={codeBackground}
        style={{ objectFit: "cover", scale: "200%", zIndex: 0 }}
        alt="Code Background"
        layout="fill"
        className="object-cover"
      />
      <div className="relative flex flex-col w-full md:flex-row items-center">
        <motion.div
          className=" aspect-square md:w-[50%] md:h-auto "
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, ease: [0, 0.71, 0.2, 1.01], duration: 1 }}
          viewport={{ once: true }}
        >
          <Image src={myPhoto} width={2235} height={2235} alt="my photo" />
        </motion.div>
        <motion.div
          className=" flex flex-col gap-3 py-6 -mt-[30%] sm:-mt-[25%] md:mt-0 md:justify-center md:items-end md:max-w-[50%] md:relative"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, ease: [0, 0.71, 0.2, 1.01], duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-5xl text-left md:text-right font-extralight">
            Hi!
          </h2>
          <h1 className="bg-[#FFD602] text-center md:text-right font-bold text-5xl py-2 px-5">
            I&apos;m Galih Karya
          </h1>
          <p className="text-white text-center md:text-right font-light text-lg mt-[5%]">
            I am freshgraduate at Computer Engineering Department, Telkom
            University. My academic journey has equipped me with a strong
            foundation in mobile app development and machine learning. The
            project that significantly contributed to my professional growth was
            my thesis project and activities at Intelligence System and Machine
            Learning (I-SMILE) Laboratory.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <motion.div
      id="skills"
      className="flex flex-col gap-5"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, ease: [0, 0.71, 0.2, 1.01], duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-white text-center font-bold text-xl">
        WHAT I&apos;M GREAT AT
      </h2>

      <div className="flex flex-col items-center gap-6 justify-center md:flex-row">
        <div className="flex items-center gap-4">
          <Image alt="react icon" width={36} height={36} src={reactIcon} />
          <p className="text-white font-light text-base">
            Front-end Development
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Image alt="react icon" width={36} height={36} src={uiuxIcon} />
          <p className="text-white font-light text-base">UI/UX Design</p>
        </div>

        <div className="flex items-center gap-4">
          <Image
            alt="react icon"
            width={36}
            height={36}
            src={videoEditingIcon}
          />
          <p className="text-white font-light text-base">Video Editing</p>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectComponent({ project }: any) {
  return (
    <div className=" flex flex-col justify-between items-start gap-2 sm:flex-row">
      <div className="flex flex-col gap-4 sm:min-w-[35%] sm:max-w-[40%] ">
        <h3 className="text-white font-medium text-left sm:text-lg">
          {project.title}
        </h3>

        <Image
          className="aspect-video w-full h-auto sm:hidden sm:h-[180px] sm:w-[320px]"
          alt={project.title}
          src={project.image}
          width={320}
          height={180}
        />

        <p className="text-white font-extralight text-left">
          {project.description}
        </p>

      <div className="flex flex-row gap-4">
        {project.tags.map((tag:any, index:any) => (
          <div key={index} className="w-8 h-8">
            <Image src={tag} alt="icon" width={32} height={32} />
          </div>
        ))}
      </div>

      </div>


      <div className="flex-shrink-0">
        <Image
          className="hidden aspect-video sm:block sm:h-[180px] sm:w-[320px]"
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
  return (
    <motion.div
      id="projects"
      className="flex flex-col gap-5 sm:justify-center "
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, ease: [0, 0.71, 0.2, 1.01], duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-white text-center font-bold text-xl">MY PROJECTS</h2>
      <div className="flex justify-center">
        <div className="flex flex-col gap-16 sm:max-w-[1000px] ">
          {projectsReversed.map((project) => (
            <ProjectComponent key={project.id} project={project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Modal ({ isOpen, onClose, children }:any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};


function Contact() {
  return (
    <motion.div
      id="contact"
      className="flex flex-col gap-5 bg-[#0D111E] items-center py-6"
      // initial={{ opacity: 0, y: 100 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ delay: 0.8, ease: [0, 0.71, 0.2, 1.01], duration: 1 }}
      // viewport={{ once: true }}
    >
      <h2 className="text-white text-center font-bold text-base">CONTACT ME</h2>
      <div className="flex justify-center gap-6">
        <motion.a
          className="rounded-full"
          whileHover={{ boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)" }}
          href="https://www.instagram.com/galihkarya_g/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/Instagram.png"
            alt="instagram"
            width={45}
            height={45}
          />
        </motion.a>
        <motion.a
          className="rounded-full"
          whileHover={{ boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)" }}
          href="https://www.linkedin.com/in/galihkarya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/LinkedIn.png"
            alt="linkedin"
            width={45}
            height={45}
          />
        </motion.a>
        <motion.a
          className="rounded-full"
          whileHover={{ boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)" }}
          href="mailto:galihkaryagemilang2001@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/assets/Email.png" alt="email" width={45} height={45} />
        </motion.a>
      </div>
      <motion.h3
        className="text-white font-thin opacity-50"
        whileHover={{ opacity: 1 }}
      >
        handcrafted with ❤️ 2024
      </motion.h3>
    </motion.div>
  );
}

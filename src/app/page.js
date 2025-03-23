import Image from "next/image";

import Herosection from "./components/Herosection";
import About from "./components/About"
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Project from "./components/Project"
import Proficiency from "./components/Proficiency"
import Herosection2 from "./components/Herosection2";

export default function Home() {
  return (
   <div className=" min-h-screen bg-gradient-to-r from-[#0a192f] to-[#0c1e40] ">
   <Herosection/>
   <Herosection2/>
   <About/>
   <Experience/>
   <Proficiency/>
   <Project/>
   <Contact/>
   </div>
  );
}

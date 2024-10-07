import { FC } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Project from "../../components/Project";
import { DUMMY_PROJECTS } from "../../constants/projectList";

import Avatar1 from "../assets/avatar_1.jfif";
import Avatar2 from "../assets/avatar_2.jfif";
import ProfilelPhoto from "../assets/profile_photo.png";
const descAbout = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";
const testimonials = [
  { avatar: Avatar1, 
    name: "Ayush Raj", 
    role:"VP of Marketing @ Webflow",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " 
  },
  { avatar: Avatar2,
    role:"Founder @ CopyPossy",
    name: "Alex Cattoni",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " },
]
const LandingPage: FC = () => {
  return (
    <>
   
       
   <section id="cover" className="min-h-full">
      <Header  bgColor="bg-gray-400" />
      <Hero profilePhoto={ ProfilelPhoto } profileCaption="flow Developer - UI/UX Designer"  profileGreet="Hello, I'm Ayush" />
      </section>
      <section id="about" className="relative bg-neutral-400">
        <Banner title="About" description={descAbout}/>
      </section>
      <section id="work" className="relative bg-neutral-400 ">
        <Banner title="Recent Work" elementContent={<Project projects={DUMMY_PROJECTS}/>}/>
        <Gallery items={DUMMY_PROJECTS}/>
        <Banner title="Testimonials" description={testimonials}/>
      </section>

      <Footer mode="cover" profilePhoto={ProfilelPhoto}/>
    </>
  );
}

export default LandingPage;
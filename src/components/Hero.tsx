import { FC } from "react";
import profileEmoticon from "../assets/hand_wave.png"
// Declare specify link photo
interface HeroProps{
    profilePhoto:string;
    profileCaption:string;
    profileGreet:string;
}

// Declare props as it needs to pass the value of its param
const Hero :FC <HeroProps> = ({profilePhoto, profileCaption,  profileGreet}) => {
return (


 <div className="flex-1 flex items-center justify-center bg-gray-400">
 <div className="relative  md:mt-0 pt-0 mt-0 mb-0">
   <img src={profilePhoto} className="w-full h-auto" />
   <div className="absolute inset-x-0  top-2/4 flex items-center justify-center">
     <p className="text-4xl sm:text-6xl md:text-7xl  font-bold text-neutral-400 whitespace-nowrap">
       {profileCaption}
     </p>
   </div>
 </div>
 <div className="absolute inset-x-0  top-2/4 flex  justify-end  ">
   <div className="button-greet absolute">
   <img src={profileEmoticon} className="w-auto h-auto items-center" />
   </div>
   <div className="button-greet-text absolute">
   <img src={profileEmoticon} className="w-auto h-auto items-left" />
   <div className="text-neutral-400 text-bold text-3xl justify-start gap-x-2">   { profileGreet}</div>

   </div>
   </div>
</div>

);
};
export default Hero;



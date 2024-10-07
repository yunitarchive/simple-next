import { FC } from "react";
import Link from "./Link";
const katalogSocialLinks = [
  {
   "label":"Linkedin",
    "url":"https://in.linkedin.com/in/ayush-barnwal-25796a1b3"
},
{
  "label":"Instagram",
   "url":"https://www.instagram.com/ayushbarnwal.here/"
},
{
  "label":"Twitter",
   "url":"https://x.com/theayushbarnwal"
},
{
  "label":"Webflow",
   "url":"https://ayush-barnwal.webflow.io/"
},{
  "label":"Figma",
   "url":"https://ayush-barnwal.webflow.io/#about"
},
];

interface FooterProps{
  mode?:string
  profilePhoto?:string
}
const Footer: FC<FooterProps> = ({mode,profilePhoto}) => {
  let footerElement;
  if(mode === 'cover'){
    footerElement = (
      <div className="space-y-0">
        <footer className="flex justify-between py-8 px-8 bg-black-400">
          <div className="flex gap-x-10 ml-10 py-0">
            <ul className="list-none">
              <li className="sm:text-2xl md:text-3xl text-neutral-400">
                {"Have something in mind?"}
              </li>
              <li className="sm:text-2xl md:text-3xl text-neutral-400">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-400 p-2 rounded-full">
                    <img className="w-[40px] h-[40px] rounded-full mb-0" src={profilePhoto} />
                  </div>
                  <span>{"let’s build it together"}</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex gap-x-10 mr-20 py-0 justify-end">
            <div className="my-3 md:mb-0">
              <button className="w-40 bg-white hover:bg-black-600 text-black-400 font-medium py-4 px-4 rounded-full">
                {"Get in touch"}
              </button>
            </div>
          </div>
        </footer>
        <footer className="flex justify-between p-4 px-8 mb-0 bg-black-400">
          <div className="flex gap-x-10 ml-10 py-0">
            <p className="my-3 text-neutral-400">
              Build with 💖 by Brightscout & Ayush
            </p>
          </div>
          <div className="flex gap-x-10 mr-5 py-0 justify-end">
            <div className="my-3 md:mb-0">
              <Link mode="horizontal" color="text-neutral-400" katalogLinks={katalogSocialLinks} />
            </div>
          </div>
        </footer>
      </div>


    );
  }else{
    footerElement = (
    <footer className="flex justify-between p-4 px-8 mb-0   bg-black-400">
    <div className="flex gap-x-10 ml-10 py-0">
           <p className="my-3 text-neutral-400">
          Build with 💖 by Brightscout & Ayush 
          </p>
    </div>
    <div className="flex gap-x-10 mr-10 py-0 justify-end">
      <div className="my-3 md:mb-0">
          <Link mode="horizontal" color="text-neutral-400" katalogLinks={katalogSocialLinks}/>
      </div>
    </div>
  </footer>
    );
  }
  return (
    footerElement


  );
}

export default Footer;


import { FC, ReactNode } from "react";


interface Testimonial {
  avatar?: string; 
  name: string;    
  text: string; 
  role:string;   
}


interface BannerProps {
  title: string;
  description?: string | Testimonial[]; 
  elementContent?: ReactNode;
}

const Banner: FC<BannerProps> = ({ title, description, elementContent }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="md:flex md:space-y-0 space-y-4 space-x-4 items-start">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-medium">{title}</h2>
        </div>
        <div className="md:w-1/2 space-y-4">
     
          {typeof description === 'string' && <p className="text-lg">{description}</p>}

          {Array.isArray(description) && (
            <div className="space-y-8">
              {description.map((testimonial, index) => (
                <div key={index} className="flex items-start space-x-3 mb-4">
                
                  <div className="flex-1">
                    <p className="text-lg text-black-600">{testimonial.text}</p>
                    <div className="flex items-center mt-3">

                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={`${testimonial.name}'s avatar`}
                          className="w-10 h-10 rounded-full object-cover mr-2"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-neutral-400 flex items-center justify-center text-white mr-2">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                      <ul className="list-none">
                      <li className="text-md font-semibold">{testimonial.name}</li>
                      <li className="text-sm font-light">{testimonial.role}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

         
          {elementContent}
        </div>
      </div>
    </div>
  );
};

export default Banner;

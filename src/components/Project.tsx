import { FC } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

interface ProjectProps {
    name: string;
    roles: string[];
    link: string;
    end_date: string; 
  }
  
  interface ProjectsListProps {
    projects: ProjectProps[];
  }
const Project: FC<ProjectsListProps> = ({projects})=>{
  // Helper function to parse DD/MM/YYYY
    const parseDate = (dateString: string): Date => {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day); // month is 0-indexed in JS Date
  };

   // Get the current year and calculate the previous year
   const currentYear = new Date().getFullYear();
   const previousYear = currentYear - 1;
 
   // Filter projects that ended in the previous year
   const filteredProjects = projects.filter((project) => {
    const projectEndYear = parseDate(project.end_date).getFullYear();
     return projectEndYear === previousYear;
   });
    return (
        <div className="space-y-0">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.name}>
            <div className="flex items-center justify-between">
       
             
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{project.name}</h2>
                <p className="text-gray-600">{project.roles.join(", ")}</p>
              </div>
                   
              <a
              href={project.link}
              className="bg-neutral-400 hover:bg-black-400 p-4 rounded-full flex items-center justify-center border border-black"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "48px", height: "48px" }} 
            >
            
              <ArrowUpRightIcon className="w-5 h-4 text-black-400 hover:text-neutral-400"  />
              
            </a>
            </div>
         
            <hr className="border-t border-black-400 my-2" />
          </div>
          ))
        ) : (
          <p>No projects found for the previous year.</p>
        )}
      </div>
    )
};

export default Project
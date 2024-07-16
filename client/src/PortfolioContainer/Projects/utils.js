import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import ImageSix from "../../images/image6.jpg";



export const portfolioData = [
  {
    sectionId: 2,
    projectName: "Personal Portfolio",
    projectLink: "https://meghna-personal-portfolio-5s7k.vercel.app/", //project link here based on you choice
    image: ImageOne,
    technologies: ["React", "Node.js", "HTML5", "CSS3"],

  
  },
  {
    sectionId: 2,
    projectName: "A Social Network App",
    projectLink: "https://drive.google.com/file/d/1I_7DwdlgnpLkbT3relhwXfeLR7o5BLN8/view", //project link here based on you choice

    // projectLink: "http://64.227.136.230", //project link here based on you choice
    image: ImageTwo,
    technologies: ["React", "Next.js", "Node.js",  "MongoDB","Socket.io" ],

  },
  {
    sectionId: 2,
    projectName: "Employee Management System",
    projectLink: "https://drive.google.com/file/d/11U5kQ6hIlEgDMlP2zzw77J-DsA1pkJnz/view?usp=drive_link", //project link here based on you choice
    image: ImageThree,
    technologies: ["Angular", "TypeScript", "JSON", "Bootstrap"],

  },
  {
    sectionId: 3,
    projectName: "Book-Readers Website",
    projectLink: "https://meghnabansod26.github.io/Readers-Website/", //project link here based on you choice
    image: ImageFour,
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

  },
  {
    sectionId: 3,
    projectName: "Travelholics Website",
    projectLink: "https://meghnabansod26.github.io/Travelholics/", //project link here based on you choice
    image: ImageFive,
    technologies: ["HTML5", "CSS3"],
  },
  {
    sectionId: 1,
    projectName: "Explore All Projects",
    projectLink: "https://github.com/meghnabansod26", //project link here based on you choice
    image: ImageSix,
    technologies: ["Github"],
  }
];

export const filterOptions = [
  {
    label: "All",
    id: 1,
  },
  {
    label: "Developement",
    id: 2,
  },
  {
    label: "Design",
    id: 3,
  },
];

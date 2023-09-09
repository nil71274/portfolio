
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    sakasi,
    bootstrap,
    cravings,
    tindog,
    weatherapp,
  } from "../assets";
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Digital Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    }
  ];
  
  const experiences = [
    {
      title: "Full stack Developer Intern",
      company_name: "RISEUP by Sakasi",
      icon: sakasi,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2023",
      points: [
        "Developing and maintaining THEBODYHUT.IN website using Node.Js and other related technologies.",
        "Collaborating with designer, product manager to create high-quality output.",
        "Created Coupon code banners for webpage and instagram.",
        "Implementing responsive design."
      ],
    }
  ];
  
  const projects = [
    {
      name: "Crawings: Cooking Blog",
      description:
        "Cravings is a recipe website where multiple varieties are available. This is full stack website build with NodeJs, mongodb. Frontend of website is build using bootstrap and tailwind CSS.",
      tags: [
        {
          name: "Node.Js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: cravings,
      source_code_link: "https://fine-gray-alligator-kilt.cyclic.cloud/",
    },
    {
      name: "TinDog Clone",
      description:
        "In this project I applied my frontend skills and build a clone application. Here I used Bootstrap and advanced CSS for better viewing experience. It is responsive and viewable on mobile, tablet and desktop.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        }
      ],
      image: tindog,
      source_code_link: "https://nil71274.github.io/TinDog-Clone/",
    },
    {
      name: "Weather App",
      description:
        "A weather app is a web application designed to provide users with up-to-date weather information and forecasts for their typed location. This app is commonly available for smartphones and desktop computers.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://weatherforcastbynil.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };
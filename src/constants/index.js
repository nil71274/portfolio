
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
    finessefleet,
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
      title: "Software Engineer Intern",
      company_name: "FinesseFleet",
      icon: finessefleet,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Ongoing...",
      points: [
        "I spearheaded the creation of a robust MVP for an LMS by leveraging Next.js and Node.js. Our stack included Next.js for seamless server-side rendering, while Node.js powered the backend logic.",
        "To enhance performance and scalability, we incorporated Redis as our in-memory database, allowing for efficient caching and real-time data retrieval.",
        "For multimedia content management, we seamlessly integrated Cloudinary, enabling smooth image and video uploads, transformations, and delivery.",
        "To facilitate secure and seamless payments, we harnessed the power of Razorpay, ensuring smooth transactions for course enrollments."
      ],
    },
    {
      title: "Full stack Developer Intern",
      company_name: "RISEUP by Sakasi",
      icon: sakasi,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2023",
      points: [
        "During my internship at thebodyhut.in, I had an enriching experience working with cutting-edge technologies.",
        "Our stack included Node.js, Express.js, and MongoDB. As part of the team, I contributed to building a robust user management system.",
        "One of my key achievements was creating a seamless coupon code system, allowing users to redeem discounts effortlessly.",
        "Additionally, I developed an inventory section within the admin panel, streamlining product management.",
        "The dynamic combination of Node.js, EJS for templating, and MongoDB for data storage empowered us to deliver a reliable and scalable solution. "
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
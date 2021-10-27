// Skills Icons
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import databaseIcon from './images/database.svg'

// Social Icon
import githubIcon from "./images/github.svg"
import instagramIcon from "./images/instagram.svg"
import linkedinIcon from "./images/linkedin.svg"

import AscensionLogo from "./images/experience/AscensionLogo.png";
import TrumanLogo from "./images/experience/truman_logo.webp";
import FPTLogo from "./images/experience/fpt_logo.webp";

import dir from "./images/projects/dir.webp";
import rgb from "./images/projects/rgb.webp";
import gomoku from "./images/projects/gomoku.png";
import hac from "./images/projects/hac.png";
import req from "./images/projects/req.webp";
import stock from "./images/projects/stock.webp";



export default {
  //   Header Details ---------------------
  name: "Thao Phung",
  headerTagline: [
    "Software Engineer",
  ],
  //   Header Paragraph
  headerParagraph:
    "Aspiring Software Engineer / Computer Science undergraduate who is eager to learn and apply new technologies to solve real-world problems.",

  //Contact Email
  contactEmail: "thao.tp.phung@gmail.com.com",

  // End Header Details -----------------------

  // Experience Section --------------------
  experiences: [
    {
      company: "Ascension Technologies",
      title: "Software Developer Intern (Incoming)",
      location: "St.Louis, MO",
      startDate: "May 2021",
      endDate: "Aug 2021",
      logo: AscensionLogo,
      responsibilities: [
        "Develop cloud-native applications using Java/Spring Boot microservices on GCP",
        "Break down requirements into independent coding tasks",
        "Create unit and integration tests to test and regress software",
        "Participate in design and code reivew",
        "Participate in Agile routines and ceremonies; daily standups, sprint planning, sprint de- mos/retrospectives",
      ],
    },
    {
      company: "Truman State University",
      title: "Calculus Tutor",
      location: "Kirksville, MO",
      startDate: "Aug 2018",
      endDate: "Dec 2018",
      logo: TrumanLogo,
      responsibilities: [
        "Demonstrated foundation of Mathematics and communication skills by assisting students in tackling Calculus problems",
        "Raised students’ grade by an average of 30% in Calculus courses",
      ],
    },
    {
      company: "FPT Software",
      title: "Java Developer Intern",
      location: "Hanoi, Vietnam",
      startDate: "May 2018",
      endDate: "Aug 2018",
      logo: FPTLogo,
      responsibilities: [
        "Sharpened Java programming, front-end web development, and SQL skills through an intensive training program",
        "Led a team of four, tracked progress, finalized projects, and submitted the final products to the project manager",
      ],
    }
  ],

  // Work Section ------------------------
  projects: [
    {
      title: "Stock Tracker and Visualizer", //Project Title - Add Your Project Title Here
      para:
        "A web application to track stocks, manage portfolios and visualize stock data; research the stock market (most active, most gainer, most loser,..) and set price alerts", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:stock,
      demoLink: "https://stockoverflow-stockapp.herokuapp.com/",
      codeLink: "https://github.com/thaotpphung/stockoverflow",
    },
    {
      title: "RGB Color Guessing Game", //Project Title - Add Your Project Title Here
      para:
        "A RESTful gaming website for players to guess correct color that matches given RGB code, earn points and advances to next level.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: rgb,
      demoLink: "",
      codeLink: "https://github.com/thaotpphung/RGB-wiz",
    },
    {
      title: "Truman Override Request Tracking System", //Project Title - Add Your Project Title Here
      para:
        "A web-based system to aid administrators of Truman Computer Science, Mathematics and Statistics departments with class override requests.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: req,
      demoLink: "",
      codeLink: "",
    },
    {
      title: "Directory Synchronization Tool", //Project Title - Add Your Project Title Here
      para:
        "A desktop application to synchronize directories between two computers, used as a backup tool.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: dir,
      demoLink: "",
      codeLink: "https://github.com/thaotpphung/directory-synchronization-app",
    },
    {
      title: "High Availability Cluster", //Project Title - Add Your Project Title Here
      para:
        "An application layer protocol over UDP to facilitate High Availability Cluster (HAC).",
        tech: "Java UDP OOP Client Server Multithreading.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: hac,
      demoLink: "",
      codeLink: "https://github.com/thaotpphung/HAC",
    },
    {
      title: "Gomoku", //Project Title - Add Your Project Title Here
      para:
        "Implementation of the strategy board game Gomoku, employing Minimax approach with Alphabeta pruning for optimization.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: gomoku,
      demoLink: "",
      codeLink: "https://github.com/thaotpphung/gomoku",
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      title: "Programming Languages",
      img: codeIcon,
      para:
        "Java, Javascript/ES6, C++, Python, SQL/NoSQL",
    },
    {
      title: "Web Technologies",
      img: jsIcon,
      para:
        "React, Nodejs, Expressjs, Spring Boot, Material-UI, Bootstrap, jQuery, Socket.io, AJAX, JSON, HMTL, CSS",
    },
    {
      title: "Databases/Tools",
      img: databaseIcon,
      para:
        "MySQL, MongoDB, PostgreSQL, Heroku, Netlify, Git",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Any questions? Reach out to me and I will get back to you shortly",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://https://github.com/thaotpphung" },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/_thaophung__/",
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/thaotpphung/",
    },
  ],

  // End Contact Section ---------------
}


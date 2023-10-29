const logotext = "₰";
const meta = {
    title: "Bhavesh Patidar | Product Designer",
    description: "I’m Bhavesh Patidar",
};

import profile from "./assets/images/profile.jpg";
const introdata = {
    title: "I’m Bhavesh Patidar",
    animated: {
        first: "I love Craft",
        second: "I Craft Culture",
        third: "I want to be Culture",
    },
    description: "A seasoned product designer with a passion for creating innovative and user-centered solutions that bridge functionality with aesthetic appeal.",
    your_img_url:profile,
};

const dataabout = {
    title: "A bit about my self",
    aboutme:" 'An adept product designer skilled in translating complex problems into elegant, intuitive designs through a meticulous process of research, prototyping, and iteration'. 'Experienced in the end-to-end product design process, from conceptualization and wireframing to collaborating with cross-functional teams for successful product launches' "
};
const worktimeline = [
    // {
//         jobtitle: "Designer of week",
//         where: "YAdfi",
//         date: "2020",
//     },
//     {
//         jobtitle: "Designer of week",
//         where: "Jamalya",
//         date: "2019",
//     },
//     {
//         jobtitle: "Designer of week",
//         where: "ALquds",
//         date: "2019",
//     },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

import art1 from "../src/assets/images/art1.jpg";
import art2 from "../src/assets/images/art2.jpg";
import mickey from "../src/assets/images/mickey.jpg";
import mickey2 from "../src/assets/images/mickey2.jpg";
import plane from "../src/assets/images/plane.jpg";
import rabbit from "../src/assets/images/rabbit.jpg";
import rabbit2 from "../src/assets/images/rabbit2.jpg";
import sculpture from "../src/assets/images/sculpture.jpg";
import sculpture2 from "../src/assets/images/sculpture2.jpg";



const dataportfolio = [{
        img: plane,
        description: "",
        link: "#",
    },
    {
        img: art2,
        description: "",
        link: "#",
    },
    {
        img:art1,
        description: "",
        link: "#",
    },
    {
        img: rabbit,
        description: "",
        link: "#",
    },
    {
        img: sculpture,
        description: "",
        link: "#",
    },
    {
        img: mickey,
        description: "",
        link: "#",
    },
    {
        img: sculpture2,
        description: "",
        link: "#",
    },
   
];

const contactConfig = {
    YOUR_EMAIL: " bhaveshpatidar336@gmail.com ",
    YOUR_FONE: "+91-7225088017",
    description:"If you have any design-related queries or seek to discuss product design strategies, please feel free to contact me. I'm here to assist you in crafting innovative and user-centric solutions.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "#",
    facebook: "#",
    linkedin: "https://www.linkedin.com/in/bhavesh-patidar-3a3870249?",
    twitter: "#",
    insta: "https://instagram.com/bhavesh_o2?igshid=OGQ5ZDc2ODk2ZA==",

};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
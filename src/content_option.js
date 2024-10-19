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
    your_img_url: profile,
};

const dataabout = {
    title: "A bit about my self",
    aboutme: " 'An adept product designer skilled in translating complex problems into elegant, intuitive designs through a meticulous process of research, prototyping, and iteration'. 'Experienced in the end-to-end product design process, from conceptualization and wireframing to collaborating with cross-functional teams for successful product launches' "
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


//art
import art from "../src/assets/images/artImges/art.jpg";

//sculpture
import sculpture from "../src/assets/images/sculptureImges/sculpture.jpg";
import SculSide from "../src/assets/images/sculptureImges/SculSide.JPG";
import SculFront from "../src/assets/images/sculptureImges/SculFront.JPG";
import SculDark from "../src/assets/images/sculptureImges/SculDark.JPG";
import SculBack from "../src/assets/images/sculptureImges/SculBack.JPG";

//candel
import candel from "../src/assets/images/candelImages/candle.jpg"
import CandelBack from "../src/assets/images/candelImages/CandelBack.JPG"
import candelTop from "../src/assets/images/candelImages/candelTop.JPG"
import CandelZoom from "../src/assets/images/candelImages/candelZoom.JPG"
import candelRear from "../src/assets/images/candelImages/CandelRear.JPG"

//micky
import mickey from "../src/assets/images/mickyImages/mickey.jpg";
import mickyFull from "../src/assets/images/mickyImages/mickyFull.JPG";
import mickyFullLength from "../src/assets/images/mickyImages/mickyFullLength.JPG";
import mickyZoom from "../src/assets/images/mickyImages/mickyZoom.JPG";
import mickyZoomOpen from "../src/assets/images/mickyImages/mickyZoomOpen.JPG";

//rabbit
import rabbit from "../src/assets/images/rabbitImages/rabbit.jpg";
import rabbitBack from "../src/assets/images/rabbitImages/rabbitBack.JPG";
import rabbitDark from "../src/assets/images/rabbitImages/rabbitDark.JPG";
import rabbiteSide from "../src/assets/images/rabbitImages/rabbiteSide.JPG";
import rabbitFront from "../src/assets/images/rabbitImages/rabbitFront.JPG";
import rabbitGold from "../src/assets/images/rabbitImages/rabbitGold.JPG";
import rabbitSide from "../src/assets/images/rabbitImages/rabbitSide.JPG";

// plane
import plane from "../src/assets/images/planeImages/plane.jpg";
import palneSideView from "../src/assets/images/planeImages/palneSideView.JPG";
import planeBackSide from "../src/assets/images/planeImages/planeBackSide.JPG";
import planeTopView from "../src/assets/images/planeImages/planeTopView.JPG";
import planeWheel from "../src/assets/images/planeImages/planeWheel.JPG";
import planeZoomFront from "../src/assets/images/planeImages/planeZoomFront.JPG";

const planeImages = [palneSideView,planeBackSide,planeTopView,planeWheel,planeZoomFront];
const rabbitImages = [rabbitSide,rabbitGold,rabbitDark,rabbitFront,rabbiteSide,rabbitBack];
const mickeyImages = [mickyZoomOpen,mickyFullLength,mickyZoom,mickyFull];
const candelImges = [CandelBack,candelTop,CandelZoom,candelRear];
const sculptureImges = [SculSide,SculFront,SculDark,SculBack];
const artImages = [art]; 



const dataportfolio = [{
    img: plane,
    description: "Wood Plane",
    note: {
        concept: "Wood",
        material: "Wood",
        processs: "HANDmade",
    },
    images: planeImages,
},
{
    img: candel,
    description: "candel",
    note: {
        concept: "",
        material: "",
        processs: "",
    },
    images: candelImges,
},
{
    img: art,
    description: "art",
    note: {
        concept: "",
        material: "",
        processs: "",
    },
    images: artImages,
},
{
    img: rabbit,
    description: "Rabit",
    note: {
        concept: "",
        material: "",
        processs: "",
    },
    images: rabbitImages,
},
{
    img: sculpture,
    description: "sculpture",
    note: {
        concept: "",
        material: "",
        processs: "",
    },
    images: sculptureImges,
},
{
    img: mickey,
    description: "Micky Mouse",
    note: {
        concept: "",
        material: "",
        processs: "",
    },
    images: mickeyImages,
},
];

const contactConfig = {
    YOUR_EMAIL: " bhaveshpatidar336@gmail.com ",
    YOUR_FONE: "+91-7225088017",
    description: "If you have any design-related queries or seek to discuss product design strategies, please feel free to contact me. I'm here to assist you in crafting innovative and user-centric solutions.",
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
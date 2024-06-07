import React,{useContext} from "react";
import html from "../../public/html.jpeg";
import css from "../../public/css.jpeg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import react from "../../public/react.jpg";
import Bootstrap from "../../public/bootstrap.jpeg";
import Node from '../../public/node.jpg';
import TailwindCss from '../../public/tailwind.jpeg';
import C from '../../public/c.jpeg';
import Github from '../../public/Git.jpeg';
import Firebase from '../../public/firebase.jpeg';
import Vite from '../../public/vite.svg';
import Redux from '../../public/redux.jpg';
import myContext from '../context/data/myContext'

function Skills() {

    const context = useContext(myContext)
    const { mode } = context

    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "Html5",
        },
        {
            id: 2,
            logo: css,
            name: "CSS",
        },
        {
            id: 3,
            logo: java,
            name: "Java",
        },
        {
            id: 4,
            logo: javascript,
            name: "JavaScript",
        },
        {
            id: 5,
            logo: oracle,
            name: "Oracle",
        },
        {
            id: 6,
            logo: react,
            name: "React",
        },
        {
            id: 7,
            logo: Bootstrap,
            name: "Bootstrap",
        },
        {
            id: 8,
            logo: Node,
            name: "Node",
        },
        {
            id: 9,
            logo: TailwindCss,
            name: "TailwindCss",
        },
        {
            id: 10,
            logo: C,
            name: "C",
        },
        {
            id: 11,
            logo: Github,
            name: "Git&Github",
        },
        {
            id: 12,
            logo: Vite,
            name: "Vite",
        },
        {
            id: 13,
            logo: Firebase,
            name: "Firebase",
        },
        {
            id:14,
            logo:Redux,
            name:"Redux"
        }

    ];
    return (
        <div
            name="Skills"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
        >
            <div>
                <h1 className="text-3xl font-bold mb-5" style={{ color: mode === 'dark' ? 'white' : '', }}>My Skills</h1>
                <p className=" " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    I've more than 1 years of experiance in below technologies.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-8">
                    {cardItem.map(({ id, logo, name }) => (
                        <div
                            className="custom-shadow flex flex-col items-center justify-center border-[2px] rounded-lg  md:w-[150px] md:h-[150px]  p-1 cursor-pointer"
                            key={id}
                            data-aos="flip-left"
                            data-aos-duration="1000"
                        >
                            <img src={logo} className="w-[100px] h-[100px]" alt="" />
                            <div>
                                <div className="" style={{ color: mode === 'dark' ? 'white' : '', }}>{name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
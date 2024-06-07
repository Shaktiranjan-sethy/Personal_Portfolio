import React, { useContext } from "react";
import myContext from '../context/data/myContext'

function About() {

    const context = useContext(myContext)
    const { mode } = context

    return (
        <div
            name="About"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
            data-aos="zoom-in" data-aos-duration="1000"
        >
            <div>
                <h1 className="text-3xl font-bold mb-5" style={{ color: mode === 'dark' ? 'white' : '', }}>About</h1>
                <p style={{ color: mode === 'dark' ? 'white' : '', }}>
                    I'm a motivated and versatile individual always eager to take an new chanllenges with a position for learning .I am dedicated to delivering high-quality results with a Positive attitude and growth mindset. I've worked on a variety of web projects,ranging from personal blogs to e-commerce platforms.
                </p>
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Education
                </h1>
                <span style={{ color: mode === 'dark' ? 'white' : '', }}>
                    MCA-[Nalanda Institue Of Technology,Bhubaneswar,Odisha][2022-24]<br />
                    Bsc(Chemistry)-[Baba Bhairabananda Autonomous College,Jajpur,Odisha][2019-22]<br />
                    12th-[Narasingh Choudhury Higher Secondary School,Jajpur,Odisha][2017-19]<br />
                    10th-[Jenapur High School,Jajpur,Odisha][2016-17]
                </span>
                <br />
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Skills & Expertise
                </h1>
                <span style={{ color: mode === 'dark' ? 'white' : '', }}>
                    As a frontend developer, I possess a strong command of HTML, CSS, and JavaScript, enabling me to create dynamic and visually appealing websites. I'm proficient in popular frontend framework such as React.js, allowing me to build interactive user interfaces with ease. With experience in responsive design, I ensure that websites I develop are accessible and optimized for all devices. I'm skilled in version control using tools like Git&Github and adept at debugging and problem-solving to deliver high-quality code. My understanding of UI/UX design principles helps me create intuitive and engaging user experiences. Constantly learning and adapting to new technologies, I am committed to staying at the forefront of frontend development to deliver innovative solutions.
                </span>
                <br />
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Professional Experience
                </h1>
                <span style={{ color: mode === 'dark' ? 'white' : '', }}>
                    I have worked as an Internship at TechZex Software Pvt Ltd on frontend devlopement and collaborated with the devlopement team to create responsive and user friendly websites interfaces using frontend technologies. [Sep 2023 - Feb 2024]
                </span>
                <br />
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Achievements
                </h1>
                <span style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Highlight diverse expertise acquired through NPTEL certifications in Cloud Computing, Internet of Things (IoT), and Data Mining.
                </span>
                <br />
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Mission Statement
                </h1>
                <p style={{ color: mode === 'dark' ? 'white' : '', }}>
                    My mission is to leverage my skills and creativity to deliver
                    innovative frontend devlopement solutions that exceed client expectations and
                    contribute positively to the digital landscape. I am committed to
                    continuous learning and growth, always seeking new challenges and
                    opportunities to expand my horizons.
                </p>
            </div>
        </div>
    );
}

export default About;
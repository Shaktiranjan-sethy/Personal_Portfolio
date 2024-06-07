import React, { useContext } from "react";
import card1 from "../../public/card1.png";
import card2 from "../../public/card2.webp";
import card3 from "../../public/card3.png";
import card4 from "../../public/card4.png";
import card5 from "../../public/card5.webp";
import card6 from "../../public/card6.webp";
import card7 from "../../public/card7.png";
import card8 from "../../public/card8.jpg";
import card9 from "../../public/card9.jpeg";
import card10 from "../../public/card10.png";
import myContext from '../context/data/myContext'

function PortFolio() {

    const context = useContext(myContext)
    const { mode } = context

    const cardItem = [
        {
            id: 1,
            logo: card1,
            name: "Online Shopping App",
            link: "https://github.com/Shaktiranjan-sethy/React_Ecommerce_Web_App",
            desc:"The main objective of this project is to create a user-friendly and feature-rich e-commerce website using React for user interface and Firebase for backend-as-a-service with functionality inspired by Flipkart and Amazon. This includes providing user authentication, real-time database, seamless shopping experience, robust product search and filtering options, secure payment gateways with efficient order management and admin dashboard management systems."
        },
        {
            id: 2,
            logo: card2,
            name: "E-commerce web",
            link: "https://www.example.com",
            desc:"The main objective of ShopEase is to create a seamless and interactive shopping experience by dynamically displaying product cards on the homepage and providing an intuitive add-to-cart functionality. Users can effortlessly add products to their cart, where they can adjust the quantity of each item. As users increment or decrement the product quantities, the total price and quantity are simultaneously updated in real-time, ensuring a smooth and responsive shopping experience."
        },
        {
            id: 3,
            logo: card3,
            name: "Weather App",
            link: "https://github.com/Shaktiranjan-sethy/javascript-projects/tree/main/WeatherApp",
            desc:"WeatherWise is a user-friendly weather application designed to provide accurate and up-to-date weather information. The app features a clean and intuitive interface, allowing users to easily access current weather conditions, hourly forecasts, and extended forecasts for any location. With WeatherWise, users can stay informed about temperature, humidity, wind speed, and other crucial weather metrics."
        },
        {
            id: 4,
            logo: card4,
            name: "Currency Convertor",
            link: "https://github.com/Shaktiranjan-sethy/javascript-projects/tree/main/CurrencyConverter",
            desc:"CurrencyConverter is a web application designed to provide real-time currency conversion between various global currencies. The app features a clean and intuitive interface, allowing users to quickly and accurately convert amounts between different currencies. With up-to-date exchange rates, CurrencyConverter ensures users get the most accurate conversions."
        },
        {
            id: 5,
            logo: card5,
            name: "Dice Game",
            link: "https://github.com/Shaktiranjan-sethy/React_Projects/tree/main/DiceGame",
            desc:"DiceRoller is an exciting web-based dice game built using React. The game offers a simple and entertaining experience where users can roll virtual dice and compete for the highest score. With colorful graphics and smooth animations, DiceRoller provides an immersive gaming experience for players of all ages. The game tracks scores and displays the results in real-time, adding an element of competitiveness and fun."
        },
        {
            id: 6,
            logo: card6,
            name: "Mega Blog",
            link: "https://github.com/Shaktiranjan-sethy/React_Projects/tree/main/12MegaBlog",
            desc:"MegaBlog is a cutting-edge web application developed using HTML5, CSS, JavaScript, and ReactJS for the frontend, with Appwrite serving as the robust backend infrastructure. It is a comprehensive platform that empowers users to create, share, and discover engaging content seamlessly. MegaBlog offers a multitude of features tailored to enhance the user experience, including account creation, image uploading, editing capabilities, and a community-driven image gallery."
        },
        {
            id: 7,
            logo: card7,
            name: "Mini SocialMedia App",
            link: "https://www.example.com",
            desc:"SocialHub is a dynamic social media application built using HTML5, CSS, JavaScript, ReactJS, Firebase, and Bootstrap. It offers users a seamless platform for sharing moments, connecting with friends, and engaging with content in real-time. With robust user authentication and Firebase backend integration, SocialHub ensures a secure and reliable experience for users."
        },
        {
            id: 8,
            logo: card8,
            name: "Todo",
            link: "https://github.com/Shaktiranjan-sethy/React_Projects/tree/main/11reduxToolkitTodo",
            desc:"TodoList is a user-friendly Todo application developed using React. It provides a simple and intuitive interface for users to manage their tasks efficiently. With features such as task creation, completion tracking, and filtering options, TodoList helps users stay organized and productive. The application utilizes React's component-based architecture and state management capabilities to ensure a seamless and responsive user experience."
        },
        {
            id: 9,
            logo: card9,
            name: "Foody Zone",
            link: "https://github.com/Shaktiranjan-sethy/React_Projects/tree/main/FoodyZone",
            desc:"FoodyZone is a dynamic web application developed using React, designed to help users discover new and exciting food options. With its intuitive interface and advanced filtering functionality, FoodyZone empowers users to explore a wide range of cuisines, dietary preferences, and restaurant options. Whether users are looking for a specific dish, cuisine type, or dietary restriction, FoodyZone provides personalized recommendations to suit their preferences."
        },
        {
            id: 10,
            logo: card10,
            name: "Expense Tracker",
            link: "https://www.example.com",
            desc:"Expense Tracker is an intuitive expense tracking web application developed using React and Ant Design. It provides users with a comprehensive platform to manage their finances effectively, allowing them to track income and expenses, visualize spending patterns with line charts and pie charts, export transactions to CSV files, and more. With its responsive design and user-friendly interface, ExpenseX ensures a seamless experience across devices, enabling users to stay in control of their finances anytime, anywhere."
        },

    ];
    return (
        <div
            name="Portfolio"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
        >
            <div>
                <h1 className="text-3xl font-bold mb-5" style={{ color: mode === 'dark' ? 'white' : '', }}>PortFolio</h1>
                <span className=" underline font-semibold" style={{ color: mode === 'dark' ? 'white' : '', }}>Featured Projects</span>
                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 sm:ml-4 gap-5 lg:my-5 my-8">
                    {cardItem.map(({ id, logo, name, link,desc }) => (
                        <div
                            className="row lg:w-[300px] sm:w-[280px] w-[280px] mx-auto rounded-lg  p-1 gap-2"
                            key={id}
                            data-aos="flip-right"
                            data-aos-duration="1000"
                        >
                            <img
                                src={logo}
                                className="lg:w-[260px] lg:h-[240px] sm:w-[240px] sm:h-[220px] p-1 border-[3px] lg:mx-3 sm:mx-4 shadow-lg my-2"
                                alt=""
                            />
                            <div className="layer">
                                <h5>{name}</h5>
                                <p>{desc}</p>
                                <button className="text-gray-700 underline"><a href={link}>Source code</a></button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PortFolio;
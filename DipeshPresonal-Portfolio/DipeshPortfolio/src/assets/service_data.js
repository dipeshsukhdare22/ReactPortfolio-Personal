import { FaCode, FaLaptopCode, FaServer, FaExchangeAlt, FaShoppingCart, FaDatabase } from 'react-icons/fa';

const servicesData = [
    {
        id: 1,
        icon: FaCode, // Assign icon directly without JSX syntax
        title: "Web Development",
        description: "Building responsive and engaging websites using HTML, CSS, and JavaScript, ensuring compatibility across devices and platforms."
    },
    {
        id: 2,
        icon: FaLaptopCode,
        title: "Frontend Development",
        description: "Developing visually appealing front-end interfaces using React.js and Bootstrap for interactive user experiences."
    },
    {
        id: 3,
        icon: FaServer,
        title: "Backend Development",
        description: "Building robust backend systems using Node.js, Express, and MongoDB to manage databases and APIs effectively."
    },
    {
        id: 4,
        icon: FaExchangeAlt,
        title: "API Integration",
        description: "Implementing secure API integrations to connect applications seamlessly, ensuring smooth data flow and communication between systems."
    },
    {
        id: 5,
        icon: FaShoppingCart,
        title: "E-Commerce Website",
        description: "Developing full-featured e-commerce platforms with product management, shopping cart functionality, and secure payment gateways."
    },
    {
        id: 6,
        icon: FaDatabase,
        title: "Database Management",
        description: "Designing, managing, and optimizing databases using MySQL and MongoDB for efficient data storage and retrieval."
    }
];

export default servicesData;

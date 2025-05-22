import React from 'react';
import './../styles/QuantitySection.css';
import globeIcon from './../assets/QuantitySection/globe.JPG';
import hatIcon from './../assets/QuantitySection/hat.JPG';
import usersIcon from './../assets/QuantitySection/users.JPG';

const quantityData = [
    {
        imgSrc: globeIcon,
        alt: "Globe Icon",
        count: "13000 +",
        label: "Units Delivered",
        className: "quantity-box blue-box" // More specific class names
    },
    {
        imgSrc: hatIcon,
        alt: "Hat Icon",
        count: "1500 +",
        label: "Under-Construction",
        className: "quantity-box brown-box" // Corrected 'brwon' to 'brown'
    },
    {
        imgSrc: usersIcon,
        alt: "Users Icon",
        count: "15000 +",
        label: "Happy Clients",
        className: "quantity-box blue-box"
    }
];

const QuantitySection = () => {
    return (
        <section className="quantity section-padding"> {/* Added section-padding */}
            {quantityData.map((item, index) => (
                <div className={item.className} key={index}>
                    <img src={item.imgSrc} alt={item.alt} className="quantity-icon"/>
                    <h2>{item.count}</h2>
                    <p>{item.label}</p>
                </div>
            ))}
        </section>
    );
};

export default QuantitySection;
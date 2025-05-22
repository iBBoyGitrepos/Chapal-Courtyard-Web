import React from 'react';
import './../styles/IconsSection.css';
import experienceIcon from './../assets/IconsSection/EXPERIENCE.JPG';
import innovationIcon from './../assets/IconsSection/Capture.JPG'; // Assuming Capture.JPG is for innovation
import leadershipIcon from './../assets/IconsSection/LEADERSHIP.JPG';

const iconData = [
    {
        imgSrc: experienceIcon,
        alt: "Experience Icon",
        title: "EXPERIENCE",
        text: "A reputation for experience and commitment, and a passion for improving people's lives."
    },
    {
        imgSrc: innovationIcon,
        alt: "Innovation Icon",
        title: "INNOVATION",
        text: "At Chapal we work tirelessly to provide facilities and amenities that far exceed expectations."
    },
    {
        imgSrc: leadershipIcon,
        alt: "Leadership Icon",
        title: "LEADERSHIP",
        text: "From director to construction worker, all our member of staff have been inspired by the values and example set by the founding Chapal Builders."
    }
];

const IconsSection = () => {
    return (
        <section className="icons section-padding"> {/* Added section-padding */}
            {iconData.map((item, index) => (
                <div className="icons_child" key={index}>
                    <img src={item.imgSrc} className="icon-image" alt={item.alt} />
                    <div className="icon-text-content">
                        <h1>{item.title}</h1>
                        <p>{item.text}</p> {/* Removed py-0 as padding is better handled in CSS */}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default IconsSection;
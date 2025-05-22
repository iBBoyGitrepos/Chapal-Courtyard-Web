import React from 'react';
import './../styles/PicturesSection.css';

// No need to import individual picture backgrounds if they are set in CSS
// Import the banner image for the top banner if it's dynamic or needed elsewhere
import bannerImage from './../assets/PicturesSection/banner1.webp';


const pictureData = [
    { cssClass: "pic1", title: "CHAPAL COURTYARD,", location: "UNIVERSITY ROAD, SCHEME 33" },
    { cssClass: "pic2", title: "CHAPAL LUXURY VILLAS,", location: "NEAR DREAM WORLD RESORT" },
    { cssClass: "pic3", title: "CHAPAL NAVINTA MALL,", location: "OFF SHAHRAH-E-FAISAL" },
    { cssClass: "pic4", title: "CHAPAL SKYMARK,", location: "NEAR KARCHI CLUB" },
    { cssClass: "pic5", title: "CHAPAL UPTOWN,", location: "NEAR GULSHAN-E-MAYMAR" },
    { cssClass: "pic6", title: "CHAPAL NAVINTA RESIDENCES,", location: "OFF SHAHRAH-E-FAISAL" }
];

const PicturesSection = () => {
    return (
        <section className="pictures">
            <div className="banner-top" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="black-banner-overlay"> {/* Changed class for clarity */}
                    <h2>Our Latest Projects</h2>
                    <p>We are experts in providing better building solutions!</p>
                </div>
            </div>

            <div className="pic_holder section-padding"> {/* Added section-padding */}
                {pictureData.map((pic, index) => (
                    <div className={`pictur-item ${pic.cssClass}`} key={index}> {/* Changed class to pictur-item */}
                        <h3><span>{pic.title}</span> {pic.location}</h3>
                        <button className="btn-view-project">View Project</button> {/* Changed class for clarity */}
                    </div>
                ))}
            </div>

            <div className="text-center all-projects-button-container">
                <button className="allprojecs">VIEW ALL PROJECTS</button>
            </div>
        </section>
    );
};

export default PicturesSection;
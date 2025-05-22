import React from 'react';
import './../styles/SinceSection.css';
import bulldingImg from './../assets/SinceSection/bullding.jpg';
// year-icon.png is used as a background image in CSS

const SinceSection = () => {
    return (
        <section className="since section-padding"> {/* Added section-padding for consistent spacing */}
            <div className="since_box">
                <div className="since_image_container"> {/* Renamed for clarity with CSS */}
                    <div className="s_image text-center py-4">
                        <p>Since</p>
                        <h1 className="pink">1968</h1>
                        <p className="blue">Build for Life</p>
                    </div>
                    <h2 className="py-5">Leading the <span className="pink">—</span> way <br /> in building</h2>
                </div>
                <p>In the year 1968, four brothers in Karachi came together with a shared vision, a solid set of principles
                    and hands-on industry experience to lay the foundations for building a real estate development empire:
                    The Chapal Group.</p>
            </div>
            <img src={bulldingImg} className="since-building-img" alt="Modern building" />
        </section>
    );
};

export default SinceSection;
// --- START OF FILE src/components/Footer.jsx ---
import React, { useState } from 'react';
import './../styles/Footer.css';
import logoLightFooter from './../assets/Footer/logo-light.gif';
import mediaIcon from './../assets/Footer/media-icon.jpg';


const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        alert('Form submitted! (Check console for data). Implement actual submission logic.');
        setFormData({ name: '', email: '', message: '' });
    };

    const exploreLinks = ['Home', 'About Us', 'Projects', 'Web Tour', 'Chapal TV', 'Blog', 'Career', 'Contact Us'];
    const projectLinks = [
        'Chapal Grande Vista', 'Chapal Navinta Residences', 'Chapal Navinta Mall', 'Chapal Courtyard', 
        'Chapal Courtyard 2', 'Chapal Uptown', 'Chapal Skymark', 'Chapal Luxury Villas', 'Delivered Projects'
    ];

    return (
        <footer className="footer section-padding">
            <div className="footer-grid">
                <div className="footer-column follow-us">
                    <img className="footer-logo" src={logoLightFooter} alt="Chapal Builders Logo Light" />
                    <p>In the year 1968, four brothers in Karachi came together with a shared vision, a solid set of
                        principles and hands-on industry experience to lay the foundations for building a real estate
                        development empire: The Chapal Group.</p>
                    <hr />
                    <h3>Follow us</h3>
                    <img className="social-media-icons" src={mediaIcon} alt="Social media icons" />
                </div>

                <div className="footer-column explore-our-site">
                    <h3>EXPLORE OUR SITE</h3>
                    <ul>
                        {exploreLinks.map(link => <li key={link}><a href="#">{link}</a></li>)}
                    </ul>
                </div>

                <div className="footer-column latest-projects">
                    <h3>Latest Projects</h3>
                    <ul>
                        {projectLinks.map(link => <li key={link}><a href="#">{link}</a></li>)}
                    </ul>
                </div>

                <div className="footer-column get-in-touch">
                    <h3>Get In Touch</h3>
                    <form onSubmit={handleSubmit} className="footer-form">
                        <input
                            className="form-control-footer" 
                            id="user-name"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control-footer"
                            id="user-email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <textarea
                            className="form-control-footer"
                            id="user-message-footer"
                            name="message"
                            placeholder="Message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                        ></textarea>
                        <button type="submit" className="blue_button_footer">Submit</button>
                    </form>
                </div>
            </div>
            <hr className="footer-divider"/>
            <div className="copyright-section">
                <span>© 2024 Chapal Builders . All rights reserved.</span>
                <span> By mimAR Studios (SMC-Pvt) Ltd ®</span>
            </div>
        </footer>
    );
};

export default Footer;
// --- END OF FILE src/components/Footer.jsx ---
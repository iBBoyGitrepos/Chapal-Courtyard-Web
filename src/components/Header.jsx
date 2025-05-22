import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './../styles/Header.css'; // Component-specific CSS

// Import images
import banner1 from './../assets/Header/banner1.webp';
import banner2 from './../assets/Header/banner2.png';
import banner3 from './../assets/Header/banner3.webp';
import banner4 from './../assets/Header/banner4.webp';
import banner5 from './../assets/Header/banner5.webp';
import banner6 from './../assets/Header/banner6.webp';


const Header = () => {
    const carouselItemsData = [
        {
            imgSrc: banner1, // Use imported image variable
            alt: "Chapal Skymark",
            whiteHeading: "Chapal Skymark",
            yellowHeading: "",
            paragraph: "Chapal Skymark, one of the tallest Residential tower of Pakistan. A 50 Storey luxury residential tower to be raised on Karachi‘s soil is truly reaching out of the stars, both in terms of the architectural brilliance and the lifestyle it has to offer.",
            bookNowText: "Book Now"
        },
        {
            imgSrc: banner3,
            alt: "Chapal Navinta Mall",
            whiteHeading: "Chapal Navinta Mall",
            yellowHeading: "",
            paragraph: "Chapal brings to you Chapal Navinta Mall that has been designed to become the iconic shopping destination of Karachi located at the populated area of Saddar near Atrium Cinemas.",
            bookNowText: "Book Now"
        },
        {
            imgSrc: banner2,
            alt: "Chapal Grande Vista",
            whiteHeading: <>Chapal Grande Vista<br/>(Coming Soon)</>,
            yellowHeading: "",
            paragraph: "Chapal Grande Vista is an exclusive gated community created whole-heartedly for residents who are in search of a sense of community, prestige, lifestyle and security. A project that combines the best in design that consists of three stately residential towers. Every tower boasts of covered car parking floors with amenities and facilities.",
            bookNowText: "Book Now"
        },
        {
            imgSrc: banner4,
            alt: "Chapal Courtyard 2",
            whiteHeading: "Chapal Courtyard 2",
            yellowHeading: "Delivered in 2023",
            paragraph: "Chapal brings Chapal Courtyard-2, a residential building with commercial showroooms on the ground floor, is an extension of Chapal’s successful bungalows and apartments project Chapal Suncity. The building is designed to fulfill your everyday needs.",
            bookNowText: "Book Now"
        },
        {
            imgSrc: banner5,
            alt: "Chapal Uptown",
            whiteHeading: "Chapal Uptown",
            yellowHeading: "Delivered in 2022",
            paragraph: "Chapal brings to you Chapal Uptown, safe and secured gated community. With various sizes of houses.",
            bookNowText: "Book Now"
        },
        {
            imgSrc: banner6,
            alt: "Chapal Luxury Villas",
            whiteHeading: "Chapal Luxury Villas",
            yellowHeading: "",
            paragraph: "Chapal brings to you Chapal Luxury Villas, safe and secured gated community. With various sizes of houses, the community offers much more than one can even think of.",
            bookNowText: "Book Now"
        }
    ];

    return (
        <Carousel id="carouselExampleCaptions" interval={5000}>
            {carouselItemsData.map((item, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100 carousel-image" // Added carousel-image class for styling
                        src={item.imgSrc}
                        alt={item.alt}
                    />
                    <Carousel.Caption className="d-none d-md-block text-start custom-carousel-caption">
                        <h1 className="white_heading">{item.whiteHeading}</h1>
                        {item.yellowHeading && <h1 className="yellow_heading">{item.yellowHeading}</h1>}
                        <p className="paragraph">{item.paragraph}</p>
                        <h3>{item.bookNowText}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Header;
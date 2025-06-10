import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, A11y, Autoplay } from 'swiper/modules';

const Portfolio = () => {
  const projects = [
    {
      title: "Volleyball Club @ The Botanist",
      description: "03/06/2025",
      image: "/portfolio/volleyball2/1.JPG",
      link: "../portfolio",
    },
    {
      title: "Shooting Club @ Powderham Castle",
      description: "02/06/2025",
      image: "/portfolio/shootingclub2/1.JPG",
      link: "../portfolio",
    },
    {
      title: "Soul Choir @ Bootlegger",
      description: "28/05/2025",
      image: "/portfolio/soul3/1.JPG",
      link: "../portfolio",
    },
    {
      title: "Soul Choir @ The Monkey Suit",
      description: "24/03/2025",
      image: "/portfolio/soul2/1.JPG",
      link: "",
    },
    {
      title: "Contemporary Choir @ The Mint Methodist Church",
      description: "22/03/2025",
      image: "/portfolio/contemporary/1.JPG",
      link: "",
    },
    {
      title: "BFS Future Leaders Summit @ Great Hall, Exeter University",
      description: "21/03/2025",
      image: "/portfolio/BFS/1.JPG",
      link: "",
    },
    {
      title: "Law Society @ Deer Park",
      description: "20/03/2025",
      image: "/portfolio/law2/1.JPG",
      link: "",
    },
    {
      title: "Exeter University Basketball v Taunton Tornadoes",
      description: "08/03/2025",
      image: "/portfolio/basketball/1.JPG",
      link: "",
    },
    {
      title: "Volleyball Club @ Hubbox",
      description: "03/12/2024",
      image: "/portfolio/volleyball/1.JPG",
      link: "",
    },
    {
      title: "Shooting Club @ Reed Hall",
      description: "02/12/2024",
      image: "/portfolio/shootingclub/1.JPG",
      link: "",
    },
    {
      title: "Law Society @ Exeter Castle",
      description: "08/12/2024",
      image: "/portfolio/law/1.JPG",
      link: "",
    },
    {
      title: "Soul Choir @ Bootlegger",
      description: "15/11/2024",
      image: "/portfolio/soul/1.JPG",
    },
    {
      title: "Computer Science Society @ Topsham Brewery",
      description: "28/05/2024",
      image: "/portfolio/compsci/1.JPG",
      link: "",
    },
    
    
    
  ];

  return (
    <div className="py-16 text-center">
      <section id="Galleries">
        <div className="max-w-6xl mx-auto p-6 relative">
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !text-teal-900 !text-3xl z-10" />
          <div className="swiper-button-next !text-teal-900 !text-3xl z-10" />

          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop
            autoplay={{
              delay: 3000,     // 3 seconds
              disableOnInteraction: false, // Keeps autoplay even after user interaction
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center gap-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full md:w-3/4 aspect-3/2 object-cover shadow-md"
                  />
                  <div>
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                    {/* <a href={project.link}>
                      <button className="mt-4 px-4 py-2 text-white rounded-md bg-black hover:bg-gray-800 cursor-pointer">
                        See more
                      </button>
                    </a>*/}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
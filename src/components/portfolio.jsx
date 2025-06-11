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
      image: "https://lh3.googleusercontent.com/pw/AP1GczNrMgihW6rFHpzNCxjjtBleBb3QxN08EjA_2iCG7Uzq-MNOX8RaeeDNGr73rc9QAou5ihs4zQi74xOFvOtwBX0mnheu_XStYcWVYXvUsibvnPCrDORJnvVoeF_L6uqXD8BjDsDpNsRKVEjezhVZ12pz=w1590-h1060-s-no-gm?authuser=0",
      link: "",
    },
    {
      title: "Shooting Club @ Powderham Castle",
      description: "02/06/2025",
      image: "https://lh3.googleusercontent.com/pw/AP1GczOCP5qi-JsS0UrIJ2NrPHSIBmSogWNkbqAmsCIXsVujDCv9V90puuX15A9xBCF3J-uXJzMi5G2B5ElcPTsAlNWpE7c8l7M2c1psY4N_wStovF0mGNX_h-kqzYmAaYDt4EnZt5rx06-CFg9S4Vfnfh5S=w1590-h1060-s-no-gm?authuser=0",
      link: "",
    },
    {
      title: "Soul Choir @ Bootlegger",
      description: "28/05/2025",
      image: "https://lh3.googleusercontent.com/pw/AP1GczNFmCxzWcS36f84zP3apvG_GOTaqwsc328h7S7IqoXU7Wyafp22BuFheMcHuLbWGLJm-cwegDGKwY4wrbCBpe503BCVNsIPG_XplLgl9XZSUpS4mUMrOAxVwdWOTXexTfV6ayCwJmWhlcOrRE7zTkVL=w1590-h1060-s-no-gm?authuser=0",
      link: "",
    },
    {
      title: "Soul Choir @ The Monkey Suit",
      description: "24/03/2025",
      image: "https://lh3.googleusercontent.com/pw/AP1GczOk7IfpAid-wDUnoUdffPoyS9nLELCxnulILs1g-0WIGMf9RGK62BskGkhaBuVC6PT0I8rWYYZvYfJirOj34UFcWlXW9KGgmFJ1Y1a4Y1xTTgHHWf9lKIZuO2KgTan_0eMEHBNsqgUoggA2Hnnf3dmx=w1590-h1060-s-no-gm?authuser=0",
      link: "",
    },
    {
      title: "Contemporary Choir @ The Mint Methodist Church",
      description: "22/03/2025",
      image: "https://lh3.googleusercontent.com/pw/AP1GczOyd90JtlbI5Cp5VtsDxukm0RwPrsPJFAWCtX93e0NdxqPPoFP4yUPLUAjCTfSr76Risbtb_B1VpLNbDUEhUGGTltx2D0gsfLXrXBPhFDeyM0dB6PkTPzN68K-V62tvv6leErNOHVv8tHkwv6jJ1VpK=w1590-h1060-s-no-gm?authuser=0",
      link: "",
    },
    {
      title: "BFS Future Leaders Summit @ Great Hall, Exeter University",
      description: "21/03/2025",
      image: "https://lh3.googleusercontent.com/pw/AP1GczMKy2kr5m4F9RhaD-1xzvCdN75RdCfKDAazRH2uwX9kv4wqVnrjNKbaKrCbszR04jMYZZ3ucISdE9dGKU8AEYAmnYtnldWI-Ah2w2xNm57-ugg0uRsLAYd-GdEDg60GZDhCURAJZvyPjZCSBCY8FIVC=w1590-h1060-s-no-gm?authuser=0",
      link: "",
    },
    {
      title: "Law Society @ Deer Park",
      description: "20/03/2025",
      image: "https://lh3.googleusercontent.com/pw/AP1GczNtqrOHDl-Wx5jgKpyIvTk1RysfBTxDQFYk4-5DFVby4yQH4TMHbkzgSsOKfPR_NFSK5_tyUGchvbvc4IFAU8Y9-NgDY08F3mKR3I76Tv1yVt4l11lFMf74SfwZYM-jU5VDYEhkHgQpImh5RRW7vgtd=w1590-h1060-s-no-gm?authuser=0",
      link: "",
    },
    {
      title: "Exeter University Basketball v Taunton Tornadoes",
      description: "08/03/2025",
      image: "https://lh3.googleusercontent.com/pw/AP1GczNI1Hrab2St4yH7bKtRGSQ-TknO0Y7HIQZuDgulS_3p3izg1E71lkrFpc5XXvqJb-t8HhuPs_uNtpQr5P4QbL99vj-nOfXRvbpAfjdJjK5U3QxyJXAcmM5AcaiVMF923EPr2HJSzczLtuLUD8EJWa7e=w1590-h1060-s-no-gm?authuser=0",
      link: "",
    },
    {
      title: "Law Society @ Exeter Castle",
      description: "08/12/2024",
      image: "https://lh3.googleusercontent.com/pw/AP1GczPH5yXeu9F7_D4BXDVYCRlSzBGEk9LQVxJsp5Pa4ig2Hd5hf-io_yjc1o0-byQ63cha2MkAoczv7ottDBYuv0AbwwziRobO-tmRWIxrowo70QvRx681MYqEMsHo9W8kdrq0s9dAeT4bGKIozwoFwGHE=w1590-h1060-s-no-gm?authuser=0",
      link: "",
    },
    {
      title: "Volleyball Club @ Hubbox",
      description: "03/12/2024",
      image: "https://lh3.googleusercontent.com/pw/AP1GczPhJRwAYbOqWfMfj1eqdCb7DAWQscH8XsIzpdv5TEOWWv5A1lgNa7awsm0DR0iNBKNrZ6y40aPWhDyV7kDIo3sZji_8r9agbvh3UK99KwIDqbEKfZI9p562nQ7L-sabeKY3dus0l3monsmbMsAjlIL7=w1590-h1060-s-no-gm?authuser=0",
      link: "",
    },
    {
      title: "Shooting Club @ Reed Hall",
      description: "02/12/2024",
      image: "https://lh3.googleusercontent.com/pw/AP1GczNbwN1kPtmLqx-Pv081yElqX5NcpUlShMV8u3_229ZPbLxXto6xEJ0bpRCVyNwyiZAovWwkULOv6Y7KuR7qcciFvoaGvaHOln2H-7taQNv_ySxnMXGL9FTjgMS3I7X0SJckNkzLrNAc2yfleb6uu5ef=w1590-h1060-s-no-gm?authuser=0",
      link: "",
    },
    {
      title: "Soul Choir @ Bootlegger",
      description: "15/11/2024",
      image: "https://lh3.googleusercontent.com/pw/AP1GczOnucpsYe2-KpIpb-97X-rmtTGq7uFoXdYv-0PFb0wMXbL-scG0EMbxxCyoosc1au_6mKi_oyUS8_qwsr_KNfaJzgNmk33I8Da-X5pSbX17DTipplFwQzmvrgGtEF7kNr74n0de36XleZ3gQ3M9OmiU=w1590-h1060-s-no-gm?authuser=0",
    },
    {
      title: "Computer Science Society @ Topsham Brewery",
      description: "28/05/2024",
      image: "https://lh3.googleusercontent.com/pw/AP1GczP7c6-XXCJlQHs-yeyQMhWeyTx-ZmnoBKaGdJRoUu_bu5gD7zkDdSwx2lB_K8y904azyMy4bk-Xl1tSmC_OLb6tTsbnBv02MmCT6dRBtIJO4BECTuhXhPr7kX4yZMIA8cZGl4QvdUNEM-ShNFn7Jq9m=w1590-h1060-s-no-gm?authuser=0",
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
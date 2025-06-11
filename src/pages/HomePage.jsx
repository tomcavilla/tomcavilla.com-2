import React from "react";
import Portfolio from "../components/portfolio";
import Gallery from "../components/gallery";

function HomePage() {
  return (
    <div className="bg-neutral-100 font-sans text-black min-h-screen relative">
      {/* Background image behind all content */}
      <img
        src="/main.jpg"
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-80"
      />

      <header className="fixed top-0 left-0 w-full z-20 flex justify-between items-center p-6 border-b border-neutral-300 text-sm uppercase bg-white bg-opacity-90 backdrop-blur-md">
        <div className="font-semibold">
          <a href="#home" className="hover:underline">
            Tom Cavilla
          </a>
        </div>

        <nav className="space-x-4 hidden md:flex">
          <a href="#portfolio" className="hover:underline">
            Portfolio
          </a>
          <a href="#personal" className="hover:underline">
            Personal
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </header>

      <main className="pt-24 relative z-10">
        {/* Hero section */}
        <section
          id="home"
          className="flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-20 py-10 text-white relative min-h-[100vh]"
        >
          <div className="max-w-xl space-y-6 -mt-30">
            <h1 className="text-4xl md:text-5xl font-medium leading-tight">
              Hello, my name is{" "}
              <span className="text-white font-bold">Tom Cavilla</span>.<br />
              I'm a <span className="font-bold">Photographer</span> based in
              Exeter, UK.
            </h1>
            <p className="text-base text-white">
              I love to capture every emotion at every event, from sports to
              concerts and black tie events.
            </p>
            <a
              href="#portfolio"
              className="inline-block bg-teal-900 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition"
            >
              View Portfolio
            </a>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="px-6 md:px-20 py-20 bg-white min-h-[60vh]"
          aria-label="Portfolio"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-black">
            Events Portfolio
          </h2>
          <Portfolio />
        </section>

        {/* Personal Section */}
        <section
          id="personal"
          className="px-6 md:px-20 py-20 bg-neutral-100 min-h-[60vh]"
          aria-label="Personal Work"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-black">
            Personal Work
          </h2>
          <Gallery />
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="px-6 md:px-20 py-20 bg-white min-h-[60vh]"
          aria-label="About Me"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-black">
            Contact Me
          </h2>
          <p className="max-w-3xl mx-auto text-center text-gray-700">
            If you have an exciting project or event that you would me to shoot,
            please feel free to reach out. I would love to hear from you and see how I can
            help capture your moments. You can contact me via email at{" "}
            <a href="mailto:contact@tomcavilla.com"className="text-teal-900 underline hover:text-teal-700 transition">contact@tomcavilla.com</a>
          </p>
          <p className="max-w-3xl mx-auto text-center text-gray-700 py-8">You can also follow me on Instagram for both personal and event pictures <a href="https://www.instagram.com/tomcavilla"className="text-teal-900 underline hover:text-teal-700 transition">@tomcavilla</a>.</p>
        </section>
      </main>

    </div>
  );
}

export default HomePage;

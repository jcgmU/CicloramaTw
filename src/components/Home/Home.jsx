import React from "react";
import { Link } from "react-router-dom";
import Logo from "/assets/images/logo.svg";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import WordRotate from "@/components/ui/word-rotate";
import TextReveal from "@/components/ui/text-reveal";
import Footer from "../Footer/Footer";
import * as motion from "motion/react-client";
import ButtonDark from "../Buttons/ButtonDark";
import ContactInfoButton from "../Buttons/ContactInfoButton";

const logos = [
  { src: "/assets/images/Mazda.svg", alt: "Mazda" },
  { src: "/assets/images/WarnerBros.svg", alt: "Warner Bros" },
  { src: "/assets/images/Ford.svg", alt: "Ford" },
  { src: "/assets/images/Max.svg", alt: "Max" },
];

const LogoCard = ({ src, alt }) => {
  return (
    <div className="w-[200px] mr-12 flex-shrink-0">
      <img src={src} alt={alt} className="w-full" />
    </div>
  );
};

const Home = () => {
  return (
    <div className="w-full relative">
      {/* Sección 1: Logo */}
      <section className="h-screen grid place-items-center">
        <div className="max-w-[1500px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <img src={Logo} alt="Ciclorama Logo" className="w-[300px]" />
          </motion.div>
        </div>
      </section>

      {/* Sección 2: Información */}
      <section className="min-h-screen bg-light text-dark flex items-center py-12">
        <div className="max-w-[1500px] mx-auto px-12 grid grid-cols-1 md:grid-cols-[3fr,1fr] gap-8 items-center w-full">
          {/* Div que contiene el h1*/}
          <div className="md:col-span-1 w-full">
            <TextReveal
              text="Nos dedicamos a hacer tus proyectos realidad"
              className="w-full text-8xl text-left text-black"
            />
          </div>
        </div>
      </section>

      {/* Sección 3: Proyectos (Marquee Repetidos, Título y Detalles Abajo) */}
      <section className="min-h-screen flex items-center bg-[#212121] text-[#e8e8e8] py-12">
        <div className="max-w-[1500px] mx-auto px-12 w-full">
          <h2 className="text-7xl mb-8 text-left">Últimos Proyectos</h2>

          <Marquee pauseOnHover repeat={2} className="[--duration:18s]">
            {[
              {
                name: "Bogotá Eats",
                image: "/assets/images/imgProjects/Bogotaeats.png",
                details: ["Experiencial", "Directo", "Diverso"],
              },
              {
                name: "Coffee Fest",
                image: "/assets/images/imgProjects/CoffeeFest.webp",
                details: ["Tradicional", "Sencillo", "Cultural"],
              },
              {
                name: "Papá de los Asados",
                image: "/assets/images/imgProjects/papaDeLosAsados.png",
                details: ["Minimalista", "Rústico", "Auténtico"],
              },
            ].map((project) => (
              <div
                key={project.name}
                className="flex flex-col items-center justify-center min-w-[300px] p-4 gap-4 mx-6"
              >
                {/* Imagen */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-[300px] h-[300px] object-cover rounded-lg"
                />

                {/* Título y detalles DEBAJO de la imagen */}
                <h3 className="text-4xl font-bold text-center">
                  {project.name}
                </h3>
                <WordRotate
                  className="text-2xl text-center gap-2 whitespace-nowrap"
                  words={project.details}
                />
              </div>
            ))}
          </Marquee>

          <div className="mt-12 text-center">
            <Link to="/work">
              <ButtonDark>Ver más proyectos</ButtonDark>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección 4: Marcas */}
      <section className="min-h-screen bg-[#e0e0e0] grid place-items-center py-12">
        <div className="max-w-[1500px] mx-auto px-0">
          <h2 className="text-6xl mb-40 text-dark text-center">
            Marcas con las que hemos trabajado
          </h2>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg mt-11">
            {/* Primera fila de logos con Marquee */}
            <Marquee pauseOnHover className="[--duration:20s]">
              {logos.map((logo, index) => (
                <LogoCard key={`brand-top-${index}`} {...logo} />
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#e0e0e0]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#e0e0e0]" />
          </div>
        </div>
      </section>

      {/* Sección 5: Contacto */}
      <section className="min-h-screen grid place-items-center py-12 bg-[#212121]">
        <div className="max-w-[1500px] mx-auto grid grid-cols-5 grid-rows-5 gap-4 p-12 mg top-5">
          {/* Título */}
          <div className="col-span-3 row-span-2 row-start-2">
            <h1 className="text-[80px] text-light text-left">
              ¿Listo para trabajar juntos?
            </h1>
          </div>

          {/* Información de contacto */}
          <div className="col-span-3 col-start-1 row-start-4">
            <div className="flex flex-col md:flex-row gap-4">
              <ContactInfoButton>
                Email: contacto@ciclorama.com
              </ContactInfoButton>
              <ContactInfoButton>Teléfono: +1 234 567 890</ContactInfoButton>
            </div>
          </div>

          {/* Botón de contacto */}
          <div className="col-start-5 row-start-3 flex justify-end items-start">
            <ButtonDark>¡Hablemos!</ButtonDark>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

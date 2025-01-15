import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import WordRotate from "@/components/ui/word-rotate";
import TextReveal from "@/components/ui/text-reveal";

const logos = [
  { src: "src/assets/images/Mazda.svg", alt: "Mazda" },
  { src: "src/assets/images/WarnerBros.svg", alt: "Warner Bros" },
  { src: "src/assets/images/Ford.svg", alt: "Ford" },
  { src: "src/assets/images/Max.svg", alt: "Max" },
];

const LogoCard = ({ src, alt }) => {
  return (
    <div className="w-[200px] mr-12 flex-shrink-0">
      <img src={src} alt={alt} className="w-full" />
    </div>
  );
};

const ButtonLight = ({ children, className = "" }) => (
  <button
    className={`px-6 py-3 rounded-2xl bg-light text-stone-500 font-extrabold text-[17px] relative overflow-hidden transition-all duration-250 shadow-lg hover:text-dark group ${className}`}
  >
    {children}
    <span className="absolute inset-0 w-0 bg-dark rounded-2xl transition-all duration-250 group-hover:w-full -z-10" />
  </button>
);

const ButtonDark = ({ children, className = "" }) => (
  <button
    className={`px-6 py-3 rounded-2xl bg-dark text-light font-extrabold text-[17px] relative overflow-hidden transition-all duration-250 shadow-lg hover:text-dark group ${className}`}
  >
    {children}
    <span className="absolute inset-0 w-0 bg-light rounded-2xl transition-all duration-250 group-hover:w-full -z-10" />
  </button>
);

const ContactInfoButton = ({ children }) => (
  <button className="text-[#e1e1e1] text-lg font-extrabold uppercase relative overflow-hidden transition-all duration-400 hover:text-white group">
    {children}
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-400 group-hover:w-full group-hover:left-0" />
  </button>
);

const Home = () => {
  return (
    <div className="w-full relative">
      {/* Sección 1: Logo */}
      <section className="h-screen grid place-items-center">
        <div className="max-w-[1350px] mx-auto">
          <img src={Logo} alt="Ciclorama Logo" className="w-[300px]" />
        </div>
      </section>

      {/* Sección 2: Información */}
      <section className="min-h-screen bg-light text-dark flex items-center py-12">
        <div className="max-w-[1350px] mx-auto px-12 grid grid-cols-1 md:grid-cols-[3fr,1fr] gap-8 items-center w-full">
          {/* Div que contiene el h1 y el p */}
          <div className="md:col-span-1 w-full">
            <TextReveal
              text="Nos dedicamos a hacer tus proyectos realidad"
              className="w-full text-8xl text-left text-black"
            />
          </div>
        </div>
      </section>

      {/* Sección 3: Proyectos */}
      <section className="min-h-screen flex items-center bg-[#212121] text-[#e8e8e8] py-12">
        <div className="max-w-[1350px] mx-auto px-12 grid grid-cols-1 gap-8 w-full">
          <h2 className="text-7xl my-8 text-left">Últimos Proyectos</h2>

          {[
            {
              name: "Bogotá Eats",
              image: "src/assets/images/imgProjects/Bogotaeats.png",
              details: ["Experiencial", "Directo", "Diverso"],
            },
            {
              name: "Coffee Fest",
              image: "src/assets/images/imgProjects/CoffeeFest.webp",
              details: ["Tradicional", "Sencillo", "Cultural"],
            },
            {
              name: "Papá de los Asados",
              image: "src/assets/images/imgProjects/papaDeLosAsados.png",
              details: ["Minimalista", "Rústico", "Auténtico"],
            },
          ].map((project, index, arr) => (
            <div key={project.name} className="w-full">
              {/* Título */}
              <div className="text-5xl text-left mb-6 pl-20">
                {project.name}
              </div>

              {/* Contenedor Flex para Imagen y Detalles */}
              <div className="flex flex-wrap items-center gap-8 pl-20">
                {/* Imagen a la Izquierda */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-[400px] h-[400px] object-cover rounded-lg object-center"
                />

                {/* Rotación de Detalles a la Derecha */}
                <div className="flex-1 pr-5">
                  <WordRotate
                    className="text-right text-8xl  gap-2 whitespace-nowrap pr-40"
                    words={project.details}
                  />
                </div>
              </div>

              {/* Separador (hr) para los primeros dos proyectos */}
              {index < arr.length - 1 && (
                <hr className="w-full h-px bg-[#e0e0e0] border-0 my-8 mb-5" />
              )}
            </div>
          ))}
          <hr className="w-full h-px bg-[#e0e0e0] border-0 my-8 mb-5" />
          <div className="flex justify-center ml-20">
            <Link to="/work" className="my-8 mb-5 ">
              <ButtonLight>Ver más proyectos</ButtonLight>
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
        <div className="max-w-[1350px] mx-auto grid grid-cols-5 grid-rows-5 gap-4 p-12 mg top-5">
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
            <Link to="/contact">
              <ButtonLight>Contáctanos</ButtonLight>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#212121] text-[#888888] py-8">
        <div className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          <img src={Logo} alt="Ciclorama Logo" className="w-[100px]" />

          {/* Contenedor adicional para centrar el texto */}

          <p className="text-sm text-right">
            © 2024 Ciclorama. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

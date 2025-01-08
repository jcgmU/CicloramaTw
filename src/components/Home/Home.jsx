// src/components/Home/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { cn } from "@/lib/utils";
// Importa el Marquee desde Magic UI (asumiendo que colocaste el componente ahí)
import Marquee from "@/components/ui/marquee";

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
    className={`px-6 py-3 rounded-2xl bg-light text-dark font-extrabold text-[17px] relative overflow-hidden transition-all duration-250 shadow-lg hover:text-light group ${className}`}
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
        <div className="max-w-[1500px] mx-auto">
          <img src={Logo} alt="Ciclorama Logo" className="w-[300px]" />
        </div>
      </section>

      {/* Sección 2: Información */}
      <section className="min-h-screen bg-light text-dark flex items-center py-12">
        <div className="max-w-[1500px] mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          <div className="max-w-[60%] md:max-w-full">
            <h1 className="text-5xl text-left text-dark">
              Nos dedicamos a hacer realidad tus proyectos audiovisuales
            </h1>
            <p className="text-lg text-left text-dark mt-4">
              Descubre aquí cómo logramos que otros hagan posible sus proyectos.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <Link to="/about">
              <ButtonLight>Conoce más</ButtonLight>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección 3: Proyectos */}
      <section className="min-h-screen flex items-center bg-[#212121] text-[#e8e8e8] py-12">
        <div className="max-w-[1500px] mx-auto px-12 grid grid-cols-1 gap-8 w-full">
          <h2 className="text-5xl my-8 text-left">Últimos Proyectos</h2>

          {[
            {
              name: "Bogota Eats",
              image: "src/assets/images/imgProjects/Bogotaeats.png",
              details: ["Sencillo", "Directo", "Diverso"],
            },
            {
              name: "Coffee Fest",
              image: "src/assets/images/imgProjects/CoffeeFest.webp",
              details: ["Tradicional", "Minimalista", "Cultural"],
            },
            {
              name: "Papa de los Asados",
              image: "src/assets/images/imgProjects/papaDeLosAsados.png",
              details: ["Rustico", "Experiencial", "Autentico"],
            },
          ].map((project, index, arr) => (
            <div key={project.name} className="w-full">
              {/* Título */}
              <div className="text-4xl text-left mb-6">{project.name}</div>

              {/* Contenedor Flex para Imagen y Detalles */}
              <div className="flex flex-wrap items-center gap-8">
                {/* Imagen a la Izquierda */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-[400px] h-[400px] object-cover"
                />

                {/* Detalles a la Derecha */}
                <div className="text-end  text-7xl flex flex-col gap-2 flex-1 pr-5">
                  {project.details.map((detail) => (
                    <p key={detail} className="whitespace-nowrap">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>

              {/* Separador (hr) para los primeros dos proyectos */}
              {index < arr.length - 1 && (
                <hr className="w-full h-px bg-[#e0e0e0] border-0 my-8 mb-5" />
              )}
            </div>
          ))}

          <div className="flex justify-start">
            <Link to="/work" className="my-8">
              <ButtonDark>Ver más proyectos</ButtonDark>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección 4: Marcas */}
      <section className="min-h-screen bg-[#e0e0e0] grid place-items-center py-12">
        <div className="max-w-[1500px] mx-auto p-12">
          <h2 className="text-4xl mb-12 text-dark text-center">
            Marcas con las que hemos trabajado
          </h2>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
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
            <Link to="/contact">
              <ButtonDark>Contáctanos</ButtonDark>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#212121] text-[#888888] py-8">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          <img src={Logo} alt="Ciclorama Logo" className="w-[100px]" />

          {/* Contenedor adicional para centrar el texto */}
          <div className="flex justify-center">
            <p className="text-sm text-center">
              © 2024 Ciclorama. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

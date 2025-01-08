// src/components/Contact/Contact.jsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Aquí puedes manejar el envío del formulario (e.g., enviar a un API)
    console.log(data);
    alert("Mensaje enviado correctamente!");
    reset();
  };

  

  return (
    <section className="min-h-screen py-[150px] px-12 bg-[#1e1e1e] flex flex-col items-center">
      <div className="bg-[#2c2c2c] p-10 rounded-lg w-full max-w-[600px] opacity-0 transform translate-y-12 transition-opacity duration-1000 ease-in-out">
        <h2 className="text-4xl text-white mb-8">Contacto</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-5">
            <label className="mb-2 text-white">Nombre</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="p-2 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.name && <span className="text-red-500">Este campo es obligatorio</span>}
          </div>
          <div className="flex flex-col mb-5">
            <label className="mb-2 text-white">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="p-2 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && <span className="text-red-500">Este campo es obligatorio</span>}
          </div>
          <div className="flex flex-col mb-5">
            <label className="mb-2 text-white">Mensaje</label>
            <textarea
              {...register("message", { required: true })}
              className="p-2 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.message && <span className="text-red-500">Este campo es obligatorio</span>}
          </div>
          <button type="submit" className="p-4 bg-primary rounded-md text-white cursor-pointer transition-colors duration-300 hover:bg-secondary">
            Enviar
          </button>
        </form>
      </div>
      <div className="mt-10 text-center">
        <h3 className="text-2xl text-white">Síguenos en nuestras redes sociales</h3>
        <div className="flex justify-center gap-5 mt-5">
          <a href="https://facebook.com" className="text-primary text-2xl transition-colors duration-300 hover:text-secondary">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="text-primary text-2xl transition-colors duration-300 hover:text-secondary">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-primary text-2xl transition-colors duration-300 hover:text-secondary">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="text-primary text-2xl transition-colors duration-300 hover:text-secondary">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

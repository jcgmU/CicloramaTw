import React from "react";

export default function MergedContactForm() {
  return (
    <form className="max-w-md mx-auto p-4 mt-24">
      {" "}
      {/* Añadido mt-24 para margen superior */}
      {/* Nombre */}
      <div className="relative my-6">
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-xl focus:outline-none"
        />
        <label
          htmlFor="nombre"
          className="absolute left-0 top-2 text-gray-400 transition-all duration-300 
            peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-700 
            peer-valid:-top-5 peer-valid:text-sm peer-valid:text-gray-700 "
        >
          Nombre
        </label>
        <span
          className="absolute left-0 bottom-0 h-0.5 w-full origin-left scale-x-0 bg-gray-700
            transition-transform duration-300
            peer-focus:scale-x-100 peer-valid:scale-x-100"
        ></span>
      </div>
      {/* Correo */}
      <div className="relative my-6">
        <input
          type="email"
          id="correo"
          name="correo"
          required
          className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-xl focus:outline-none"
        />
        <label
          htmlFor="correo"
          className="absolute left-0 top-2 text-gray-400 transition-all duration-300 
            peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-700 
            peer-valid:-top-5 peer-valid:text-sm peer-valid:text-gray-700"
        >
          Correo
        </label>
        <span
          className="absolute left-0 bottom-0 h-0.5 w-full origin-left scale-x-0 bg-gray-700
            transition-transform duration-300
            peer-focus:scale-x-100 peer-valid:scale-x-100"
        ></span>
      </div>
      {/* Teléfono */}
      <div className="relative my-6">
        <input
          type="tel"
          id="telefono"
          name="telefono"
          required
          className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-xl focus:outline-none"
        />
        <label
          htmlFor="telefono"
          className="absolute left-0 top-2 text-gray-400 transition-all duration-300 
            peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-700 
            peer-valid:-top-5 peer-valid:text-sm peer-valid:text-gray-700"
        >
          Teléfono
        </label>
        <span
          className="absolute left-0 bottom-0 h-0.5 w-full origin-left scale-x-0 bg-gray-700
            transition-transform duration-300
            peer-focus:scale-x-100 peer-valid:scale-x-100"
        ></span>
      </div>
      {/* Motivo */}
      <div className="relative my-6">
        <select
          id="motivo"
          name="motivo"
          required
          defaultValue=""
          className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-xl focus:outline-none appearance-none"
        >
          <option value="" disabled hidden></option>
          <option value="informacion general">Información General</option>
          <option value="propuestas comerciales">Propuestas Comerciales</option>
          <option value="otros">Otros</option>
        </select>
        <label
          htmlFor="motivo"
          className="absolute left-0 top-2 text-gray-400 transition-all duration-300 
            peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-700 
            peer-valid:-top-5 peer-valid:text-sm peer-valid:text-gray-700"
        >
          Motivo
        </label>
        <span
          className="absolute left-0 bottom-0 h-0.5 w-full origin-left scale-x-0 bg-gray-700
            transition-transform duration-300
            peer-focus:scale-x-100 peer-valid:scale-x-100"
        ></span>
      </div>
      {/* Mensaje */}
      <div className="relative my-6">
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows="4"
          className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-xl focus:outline-none resize-none bor"
        ></textarea>
        <label
          htmlFor="mensaje"
          className="absolute left-0 top-2 text-gray-400 transition-all duration-300
            peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-700
            peer-valid:-top-5 peer-valid:text-sm peer-valid:text-gray-700"
        >
          Mensaje
        </label>
        <span
          className="absolute left-0 bottom-0 h-0.5 w-full origin-left scale-x-0 bg-gray-700
            transition-transform duration-300
            peer-focus:scale-x-100 peer-valid:scale-x-100"
        ></span>
      </div>
      <button
        type="submit"
        className="mt-4 w-full rounded bg-gray-700 py-2 text-white hover:bg-gray-800"
      >
        Enviar
      </button>
    </form>
  );
}

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { cn } from "../../lib/utils";

export default function MergedContactForm() {
  const initialFormState = {
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.nombre) tempErrors.nombre = "El nombre es obligatorio";
    if (!formData.correo) {
      tempErrors.correo = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      tempErrors.correo = "Formato de correo inválido";
    }
    if (!formData.telefono) {
      tempErrors.telefono = "El teléfono es obligatorio";
    } else if (!/^\d+$/.test(formData.telefono)) {
      tempErrors.telefono = "El teléfono debe contener solo números";
    }
    if (!formData.mensaje)
      tempErrors.mensaje = "El mensaje no puede estar vacío";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Limpiar error cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          "http://localhost:5001/api/contact", // Actualizar puerto a 5001
          formData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        toast.success("¡Mensaje enviado correctamente!");
        setFormData(initialFormState);
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          // Manejo de errores del backend
          const backendErrors = {};
          error.response.data.errors.forEach((err) => {
            backendErrors[err.param] = err.msg;
          });
          setErrors(backendErrors);
        } else {
          toast.error(
            "Hubo un error al enviar el mensaje. Por favor intenta nuevamente."
          );
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Contáctanos</h2>
          <p className="text-gray-600 mt-2">
            Estamos aquí para responder tus preguntas y ayudarte con tus
            proyectos.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="nombre">
                Nombre completo
              </label>
              <input
                className={cn(
                  "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2",
                  errors.nombre
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                )}
                type="text"
                name="nombre"
                id="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre completo"
              />
              {errors.nombre && (
                <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="correo">
                Correo electrónico
              </label>
              <input
                className={cn(
                  "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2",
                  errors.correo
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                )}
                type="email"
                name="correo"
                id="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="tucorreo@ejemplo.com"
              />
              {errors.correo && (
                <p className="text-red-500 text-sm mt-1">{errors.correo}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="telefono">
                Teléfono
              </label>
              <input
                className={cn(
                  "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2",
                  errors.telefono
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                )}
                type="tel"
                name="telefono"
                id="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Ingresa tu número telefónico"
              />
              {errors.telefono && (
                <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="mensaje">
                Mensaje
              </label>
              <textarea
                className={cn(
                  "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 min-h-[120px]",
                  errors.mensaje
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                )}
                name="mensaje"
                id="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
              />
              {errors.mensaje && (
                <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

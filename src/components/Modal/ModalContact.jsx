import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { cn } from "../../lib/utils";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

function ModalContact({ open, onClose }) {
  const initialFormState = {
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  };

  const initialErrorsState = {
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorsState);
  const [showForm, setShowForm] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      setShowForm(true);
    } else {
      const timer = setTimeout(() => {
        setShowForm(false);
      }, 300); // Tiempo para la animación de cierre
      return () => clearTimeout(timer);
    }
  }, [open]);

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
        const response = await axios.post(`${API_URL}/api/contact`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        toast.success("¡Mensaje enviado correctamente!");
        setFormData(initialFormState);
        onClose(); // Cerrar modal después del éxito
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        if (error.response?.data?.errors) {
          const backendErrors = {};
          error.response.data.errors.forEach((err) => {
            backendErrors[err.param] = err.msg;
          });
          setErrors(backendErrors);
        } else {
          toast.error(
            "Error de conexión. Por favor verifica tu conexión a internet e intenta nuevamente."
          );
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!open && !showForm) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div
        className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-auto p-6 transform transition-all duration-300"
        style={{
          transform: open ? "scale(1)" : "scale(0.95)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Contáctanos</h3>
          <p className="text-sm text-gray-500 mt-1">
            Complete el formulario y nos pondremos en contacto contigo pronto.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="modal-nombre"
            >
              Nombre completo
            </label>
            <input
              className={cn(
                "w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2",
                errors.nombre
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              )}
              type="text"
              name="nombre"
              id="modal-nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
            />
            {errors.nombre && (
              <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="modal-correo"
            >
              Correo electrónico
            </label>
            <input
              className={cn(
                "w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2",
                errors.correo
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              )}
              type="email"
              name="correo"
              id="modal-correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="tucorreo@ejemplo.com"
            />
            {errors.correo && (
              <p className="text-red-500 text-xs mt-1">{errors.correo}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="modal-telefono"
            >
              Teléfono
            </label>
            <input
              className={cn(
                "w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2",
                errors.telefono
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              )}
              type="tel"
              name="telefono"
              id="modal-telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Ingresa tu número telefónico"
            />
            {errors.telefono && (
              <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>
            )}
          </div>

          <div className="mb-5">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="modal-mensaje"
            >
              Mensaje
            </label>
            <textarea
              className={cn(
                "w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 min-h-[80px]",
                errors.mensaje
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              )}
              name="mensaje"
              id="modal-mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="¿En qué podemos ayudarte?"
            />
            {errors.mensaje && (
              <p className="text-red-500 text-xs mt-1">{errors.mensaje}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalContact;

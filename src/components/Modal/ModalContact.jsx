import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
} from "@material-tailwind/react";
import { AnimatePresence, motion } from "motion/react";

// Reemplaza el formulario anterior con el nuevo diseño,
// sin perder las validaciones y protecciones actuales.
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
  // Controla la visibilidad del formulario para la animación
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    if (open) {
      // Al reabrir el modal, resetea estados para mostrar el form inicial
      setShowForm(true);
      setFormData(initialFormState);
      setErrors(initialErrorsState);
    }
  }, [open]);

  const sanitizeInput = (input) => input.replace(/['";]/g, "").trim();
  const isEmailValid = (email) => /^\S+@\S+\.\S+$/.test(email);
  const isPhoneValid = (phone) => /^\d+$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: sanitizeInput(value),
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setErrors({ ...errors, [name]: "" });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";
    if (!value.trim()) {
      errorMessage = "Este campo es obligatorio";
    } else {
      if (name === "nombre") {
        const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;
        if (!nameRegex.test(value)) {
          errorMessage =
            "El nombre no debe contener números ni caracteres inválidos";
        }
      }
      if (name === "correo" && !isEmailValid(value)) {
        errorMessage = "Ingrese un correo válido";
      }
      if (name === "telefono" && !isPhoneValid(value)) {
        errorMessage = "Ingrese un teléfono válido";
      }
    }
    setErrors({ ...errors, [name]: errorMessage });
    if (
      (name === "correo" || name === "telefono" || name === "nombre") &&
      errorMessage
    ) {
      setFormData({ ...formData, [name]: "" });
    }
  };

  const isFormValid = () => {
    return (
      formData.nombre.trim() &&
      isEmailValid(formData.correo) &&
      isPhoneValid(formData.telefono) &&
      formData.mensaje.trim()
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {
      nombre: !formData.nombre.trim() ? "Este campo es obligatorio" : "",
      correo: !isEmailValid(formData.correo) ? "Ingrese un correo válido" : "",
      telefono: !isPhoneValid(formData.telefono)
        ? "Ingrese un teléfono válido"
        : "",
      mensaje: !formData.mensaje.trim() ? "Este campo es obligatorio" : "",
    };

    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some((err) => err !== "");
    if (hasErrors) return;

    const sanitizedData = {
      nombre: sanitizeInput(formData.nombre),
      correo: sanitizeInput(formData.correo),
      telefono: sanitizeInput(formData.telefono),
      mensaje: sanitizeInput(formData.mensaje),
    };

    console.log("Formulario enviado:", sanitizedData);
    // Oculta el formulario con exit animation
    setShowForm(false);
  };

  const renderLabel = (field, defaultText) => (
    <label
      htmlFor={field}
      className={`absolute left-0 top-2 transition-all duration-300 
      ${errors[field] ? "text-red-500" : "text-gray-400"} 
      peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-700 
      peer-valid:-top-5 peer-valid:text-sm peer-valid:${
        errors[field] ? "text-red-500" : "text-gray-700"
      }`}
    >
      {errors[field] ? errors[field] : defaultText}
    </label>
  );

  return (
    <Dialog open={open} handler={onClose} size="sm" className="p-2">
      <DialogHeader>
        <IconButton
          size="sm"
          variant="text"
          className="!absolute right-3.5 top-3.5"
          onClick={onClose}
        >
          ✕
        </IconButton>
      </DialogHeader>
      <DialogBody className="overflow-y-auto">
        <AnimatePresence initial={false}>
          {showForm ? (
            <motion.form
              key="contactForm"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="max-w-md mx-auto p-1 mt-4"
            >
              <h1 className="text-4xl text-center text-gray-700 mb-4">
                ¡Hablemos!
              </h1>
              {/* Nombre */}
              <div className="relative my-6">
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-xl focus:outline-none"
                  placeholder=""
                  value={formData.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
                {renderLabel("nombre", "Nombre")}
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
                  placeholder=""
                  value={formData.correo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
                {renderLabel("correo", "Correo")}
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
                  placeholder=""
                  value={formData.telefono}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
                {renderLabel("telefono", "Teléfono")}
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
                  className="peer w-full border-b-2 border-transparent bg-transparent py-2 text-xl focus:outline-none resize-none"
                  placeholder=""
                  value={formData.mensaje}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                ></textarea>
                {renderLabel("mensaje", "Mensaje")}
                <span
                  className="absolute left-0 bottom-0 h-0.5 w-full origin-left scale-x-0 bg-gray-700
                  transition-transform duration-300
                  peer-focus:scale-x-100 peer-valid:scale-x-100"
                ></span>
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`mt-4 w-full rounded py-2 text-white transition-colors ${
                  isFormValid()
                    ? "bg-blue-700 hover:bg-blue-800"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
              >
                Enviar
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="confirmationMessage"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
              exit={{ opacity: 0, y: 20 }}
              className="max-w-md mx-auto p-1 mt-1 text-center"
            >
              <h1 className="text-4xl text-gray-700 mb-4">
                ¡Gracias por contactarnos!
              </h1>
              <p className="text-lg text-gray-700">
                Nos contactaremos lo más pronto posible y agradecemos su
                confianza.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogBody>
    </Dialog>
  );
}

export default ModalContact;

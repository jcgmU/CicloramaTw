import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Textarea,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";

// Función sencilla de "sanitización": elimina algunos caracteres potencialmente problemáticos.
// Para producción, considera usar librerías especializadas (ej. DOMPurify) y siempre valida en backend.
function sanitizeInput(value) {
  // Remueve <, >, {, }, ', " y ; para reducir inyecciones simples
  return value.replace(/[<>{}'";]/g, "");
}

export function MergedContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Valida únicamente el campo que se está "blurreando".
  const validateField = (field, value) => {
    let errorMsg = "";

    switch (field) {
      case "name":
        if (!value.trim()) {
          errorMsg = "El nombre es requerido.";
        }
        break;

      case "email":
        if (!value.trim()) {
          errorMsg = "El correo es requerido.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errorMsg = "El correo no es válido.";
        }
        break;

      case "phone":
        if (!value.trim()) {
          errorMsg = "El teléfono es requerido.";
        } else if (!/^\d+$/.test(value)) {
          // Validación para permitir solo dígitos
          errorMsg = "Solo se permiten dígitos en el teléfono.";
        }
        break;

      case "reason":
        if (!value) {
          errorMsg = "Seleccionar un motivo es obligatorio.";
        }
        break;

      case "subject":
        if (!value.trim()) {
          errorMsg = "El asunto es requerido.";
        }
        break;

      case "message":
        if (!value.trim()) {
          errorMsg = "El mensaje es requerido.";
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: errorMsg,
    }));
  };

  // Cuando el campo pierde el foco, sanitiza y valida
  const handleBlur = (field, currentValue, setValue) => {
    const sanitizedValue = sanitizeInput(currentValue);
    setValue(sanitizedValue);
    validateField(field, sanitizedValue);
  };

  // Validación final al enviar (por si hay cambios no validados en blur)
  const validateAllFieldsOnSubmit = () => {
    const newErrors = {};

    // 1) Sanitizamos y reasignamos:
    const sName = sanitizeInput(name);
    const sEmail = sanitizeInput(email);
    const sPhone = sanitizeInput(phone);
    const sReason = sanitizeInput(reason);
    const sSubject = sanitizeInput(subject);
    const sMessage = sanitizeInput(message);

    setName(sName);
    setEmail(sEmail);
    setPhone(sPhone);
    setReason(sReason);
    setSubject(sSubject);
    setMessage(sMessage);

    // 2) Validamos cada uno
    if (!sName.trim()) newErrors.name = "El nombre es requerido.";
    if (!sEmail.trim()) {
      newErrors.email = "El correo es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(sEmail)) {
      newErrors.email = "El correo no es válido.";
    }
    if (!sPhone.trim()) {
      newErrors.phone = "El teléfono es requerido.";
    } else if (!/^\d+$/.test(sPhone)) {
      newErrors.phone = "Solo se permiten dígitos en el teléfono.";
    }
    if (!sReason) {
      newErrors.reason = "Seleccionar un motivo es obligatorio.";
    }
    if (!sSubject.trim()) {
      newErrors.subject = "El asunto es requerido.";
    }
    if (!sMessage.trim()) {
      newErrors.message = "El mensaje es requerido.";
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateAllFieldsOnSubmit();
    if (Object.keys(formErrors).length > 0) {
      return; // Evita el envío si hay errores
    }
    console.log("Enviando formulario combinado...", {
      name,
      email,
      phone,
      reason,
      subject,
      message,
    });
    // Limpiar campos
    setName("");
    setEmail("");
    setPhone("");
    setReason("");
    setSubject("");
    setMessage("");
    setErrors({});
  };

  return (
    <div className="pt-24">
      {/* Ajusta el padding-top para evitar que el header tape el formulario */}
      <Card className="max-w-lg mx-auto my-6">
        <CardBody>
          <Typography variant="h5" className="mb-2">
            Contáctanos
          </Typography>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Nombre */}
            <div>
              <Input
                label="Nombre"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={(e) => handleBlur("name", e.target.value, setName)}
                error={!!errors.name}
              />
              {errors.name && (
                <Typography variant="small" color="red">
                  {errors.name}
                </Typography>
              )}
            </div>

            {/* Correo */}
            <div>
              <Input
                label="Correo"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => handleBlur("email", e.target.value, setEmail)}
                error={!!errors.email}
              />
              {errors.email && (
                <Typography variant="small" color="red">
                  {errors.email}
                </Typography>
              )}
            </div>

            {/* Teléfono */}
            <div>
              <Input
                label="Teléfono"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={(e) => handleBlur("phone", e.target.value, setPhone)}
                error={!!errors.phone}
              />
              {errors.phone && (
                <Typography variant="small" color="red">
                  {errors.phone}
                </Typography>
              )}
            </div>

            {/* Motivo de contacto */}
            <div>
              <Select
                label="Motivo de Contacto"
                value={reason}
                onChange={(val) => setReason(val)}
                onBlur={() => handleBlur("reason", reason, setReason)}
                required
              >
                <Option value="Información General">Información General</Option>
                <Option value="Soporte Técnico">Soporte Técnico</Option>
                <Option value="Propuestas Comerciales">
                  Propuestas Comerciales
                </Option>
                <Option value="Otros">Otros</Option>
              </Select>
              {errors.reason && (
                <Typography variant="small" color="red">
                  {errors.reason}
                </Typography>
              )}
            </div>

            {/* Asunto */}
            <div>
              <Input
                label="Asunto"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                onBlur={(e) =>
                  handleBlur("subject", e.target.value, setSubject)
                }
                error={!!errors.subject}
              />
              {errors.subject && (
                <Typography variant="small" color="red">
                  {errors.subject}
                </Typography>
              )}
            </div>

            {/* Mensaje */}
            <div>
              <Textarea
                label="Mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={(e) =>
                  handleBlur("message", e.target.value, setMessage)
                }
                error={!!errors.message}
              />
              {errors.message && (
                <Typography variant="small" color="red">
                  {errors.message}
                </Typography>
              )}
            </div>

            <Button type="submit" variant="filled" color="blue">
              Enviar
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default MergedContactForm;

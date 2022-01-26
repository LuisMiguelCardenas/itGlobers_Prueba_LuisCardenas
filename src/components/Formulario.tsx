import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import style from "../styles/style.module.css";
import swal from "sweetalert";

export const Formulario = () => {
  const [error, setError] = useState(false);
  const [input, handelInputChange, setInput] = useForm({
    nombre: "",
    email: "",
    phone: "",
    edad: "",
  });

  const handelSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!input.nombre || !input.email || !input.phone || !input.edad) {
      swal({
        title: "Atención",
        icon: "warning",
        text: "Uno o más campos, estan diligenciados de manera incorrecta. Recuerde que todos los campos son obligatorios",
      });
    } else {
      setInput({
        nombre: "",
        email: "",
        phone: "",
        edad: "",
      });
      swal({
        title: "Formulario Enviado",
        text: "Tu información fue enviada, con éxito. Pronto nos contactaremos contigo",
        timer: 5000,
      });

      console.log(input);
    }
  };
  return (
    <div className={style.form}>
      <form onSubmit={(e: any) => handelSubmit(e)}>
        <div>
          <label>Nombre completo: </label>
          <input
            className={style.input}
            name="nombre"
            onChange={handelInputChange}
            type="text"
            value={input.nombre}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            className={style.input}
            name="email"
            onChange={handelInputChange}
            type="email"
            value={input.email}
          />
        </div>
        <div>
          <label>Celular: </label>
          <input
            className={style.input}
            name="phone"
            onChange={handelInputChange}
            type="number"
            value={input.phone}
          />
        </div>
        <div>
          <label>Edad: </label>
          <input
            className={style.input}
            max="100"
            min="18"
            name="edad"
            onChange={handelInputChange}
            type="number"
            value={input.edad}
          />
        </div>
        <button className={style.button}>Agregar</button>
      </form>
    </div>
  );
};

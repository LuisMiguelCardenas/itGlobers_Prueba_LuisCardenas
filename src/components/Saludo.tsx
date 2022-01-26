import React from "react";

interface Props {
  name: string;
}

export const Saludo = ({ name }: Props) => {
  return (
    <p>
      Hola, bienvenido, sabemos que quieres viajar en {name}, por favor
      diligencia el siguiente formulario:
    </p>
  );
};

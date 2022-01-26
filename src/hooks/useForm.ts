import { useState } from "react";

export const useForm = (inputs: any) => {
  const [input, setInput] = useState(inputs);
  const handelInputChange = ({ target }: any) => {
    setInput({ ...input, [target.name]: target.value });
  };
  return [input, handelInputChange, setInput];
};

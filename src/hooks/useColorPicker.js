import { useState } from "react";

export default function useColorPicker(initialState) {
  // TODO: Implement me!
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return [state, handleChange]
}

import { useState } from "react";

export default function useColorPicker(initialState) {

  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        switch (name) {
          case 'fgColor':
            setState((prevState) => {
              return {
                ...prevState,
                [name]: value,
                didChangeColor: true,
              }
            })
            break;
          case 'bgColor':
            setState((prevState) => {
              return {
                ...prevState,
                [name]: value,
                didChangeColor: true,
              }
            })
            break;
          case 'content':
            setState((prevState) => {
              return {
                ...prevState,
                [name]: value,
                didChangeColor: false,
              }
            })
            break;
          default:
            break;
        }
      };
  return [state, handleChange]
}


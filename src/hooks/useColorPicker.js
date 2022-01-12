import { useState } from "react";
// more reusable version
// export default function useColorPicker(initialState) {
//   // TODO: Implement me!
//   const [state, setState] = useState(initialState);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setState((prevState) => {
//       return { ...prevState, [name]: value };
//     });
//   };
//   return [state, handleChange]
// }

export default function useColorPicker() {
  // TODO: Implement me!
  const [fgColor, setFgColor] = useState('#ffcc00');
  const [bgColor, setBgColor] = useState('#212121');
  const [content, setContent] = useState('Hello, world!');
  const [didChangeColor, setDidChangeColor] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'fgColor':
        setFgColor(value);
        setDidChangeColor(true);
        break;
      case 'bgColor':
        setBgColor(value);
        setDidChangeColor(true);
        break;
      case 'content':
        setDidChangeColor(false);
        setContent(value);
        break;
      default:
        break;
    }
  };
  return [didChangeColor, content, bgColor, fgColor, handleChange];
}

import Display from '../../components/Display/Display';
import useAffirmation from '../../hooks/useAffirmation.js';
import useColorPicker from '../../hooks/useColorPicker.js';
import styles from './ColorPicker.css';

export default function ColorPicker() {

  const [data, handleChange] = useColorPicker({
    fgColor: '#ffcc00',
    bgColor: '#212121',
    didChangeColor: false,
    content: 'Hello, world!'
  })
  
  const affirmation = useAffirmation(data.bgColor, data.fgColor);

  return (
    <>
      <fieldset className={styles.colorPickerForm}>
        <legend>
          {data.didChangeColor
            ? affirmation
            : 'Pick some colors and a message to display!'}
        </legend>
        <input
          type="color"
          name="fgColor"
          aria-label="foreground color"
          value={data.fgColor}
          onChange={handleChange}
        />
        <input
          type="color"
          name="bgColor"
          aria-label="background color"
          value={data.bgColor}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          aria-label="content"
          value={data.content}
          onChange={handleChange}
        />
      </fieldset>
      <Display content={data.content} bgColor={data.bgColor} fgColor={data.fgColor} />
    </>
  );
}

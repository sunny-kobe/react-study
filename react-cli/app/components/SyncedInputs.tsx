import { SetStateAction, useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  function handleChange(e: { target: { value: SetStateAction<string>}}) {
    setText(e.target.value);
  }

  return (
    <>
      <Input
        label="第一个输入框"
        values={text}
        onChange={handleChange}
      />
      <Input
        label="第二个输入框"
        values={text}
        onChange={handleChange}
      />
    </>
  );
}

function Input({ label, values, onChange }) {
  return (
    <label>
      {label}
      {' '}
      <input
        value={values}
        onChange={onChange}
      />
    </label>
  );
}

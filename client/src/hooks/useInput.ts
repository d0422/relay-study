import { useState } from 'react';

export default function useInput(defaultValue = '') {
  const [input, setInput] = useState(defaultValue);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput(e.target.value);
  };

  const reset = () => {
    setInput('');
  };

  return {
    value: input,
    handleChange,
    reset,
  };
}

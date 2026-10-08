import { useId } from 'react';

export default function TextField({ label, value, onChange, type = 'text', ...props }) {
  const id = useId();
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} {...props} />
    </div>
  );
}

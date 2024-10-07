import { FC } from "react";

interface InputProps {
  label: string;
  placeholder?: string;
  type?: string;
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; 
}

const CustomInput: FC<InputProps> = ({ label, placeholder, type, value, onChange }) => {
  let inputElement;

  if (type === "textarea") {
    inputElement = (
      <textarea
        placeholder={placeholder}
        rows={4}
        value={value} // bind value
        onChange={onChange} // attach onChange
        className="w-full px-0 py-2  bg-transparent border-b border-gray-400 focus:border-black focus:outline-none transition-colors"
      />
    );
  } else {
    inputElement = (
      <input
        type={type || "text"}
        placeholder={placeholder}
        value={value} 
        onChange={onChange} 
        className="w-full px-0 py-2  bg-transparent border-b border-gray-400 focus:border-black focus:outline-none transition-colors"
      />
    );
  }

  return (
    <div className="relative mt-10 lg:mr-20">
      <label className="absolute -top-6 left-0 text-black-400 text-md ">
        {label}
      </label>
      {inputElement}
    </div>
  );
};

export default CustomInput;

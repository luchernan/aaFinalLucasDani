import { useNavigate } from "react-router";

type Variant = "album" | "artist" | "add" | "remove";

interface ButtonProps {
  text: string;
  variant: Variant;
  onClick?: () => void;
}

const variants: Record<Variant, string> = {
  album: "flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300",
  artist: "flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300",
  add: "flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300",
  remove: "mt-3 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300 w-full",
};

function Button({ text, variant, onClick }: ButtonProps) {
  return (
    <button
      className={`${variants[variant]} text-white font-bold py-2 px-4 rounded cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
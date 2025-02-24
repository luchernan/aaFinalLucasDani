type Variant = "primary" | "secondary" | "danger";

interface ButtonProps {
  text: string;
  variant?: Variant; // ? hace la prop opcional
  onClick: (text: string) => void;
}

// Secondary = bg-gray-500 hover:bg-gray-700
// Danger = bg-red-500 hover:bg-red-700
// Primary = bg-blue-500 hover:bg-blue-700

function Button({ text, variant = "primary", onClick }: ButtonProps) {
  const variants: Record<Variant, string> = {
    primary: "bg-blue-500 hover:bg-blue-700",
    secondary: "bg-gray-500 hover:bg-gray-700",
    danger: "bg-red-500 hover:bg-red-700",
  };

  return (
    <button
      className={` ${variants[variant]} text-white font-bold py-2 px-4 rounded cursor-pointer`}
      onClick={() => {
        onClick(text);
      }}
    >
      {text}
    </button>
  );
}

export default Button;
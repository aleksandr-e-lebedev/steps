interface ButtonProps {
  children: React.ReactNode;
  textColor: string;
  bgColor: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ children, textColor, bgColor, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className="button"
      style={{ color: textColor, backgroundColor: bgColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function App() {
  return <h1>Steps</h1>;
}

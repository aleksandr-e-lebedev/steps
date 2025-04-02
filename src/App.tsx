import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

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
  const [isOpen, setIsOpen] = useState(true);

  const step = 1;
  const message = messages[step - 1];

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button type="button" className="close-button" onClick={handleToggle}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
          </div>

          <div className="message">
            <h3 className="message-title">Step {step}:</h3>
            <p className="message-subtitle">{message}</p>
          </div>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={() => {}}>
              <span className="step-button-icon">👈</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={() => {}}>
              Next <span className="step-button-icon">👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

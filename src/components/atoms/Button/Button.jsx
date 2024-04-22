import './button.css'

const Button = ({text, onClick}) => {
  return (
    <button id="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
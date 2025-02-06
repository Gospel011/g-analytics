/* eslint-disable react/prop-types */
function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-dark-green text-background my-6 rounded-lg px-6 py-3 font-semibold ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

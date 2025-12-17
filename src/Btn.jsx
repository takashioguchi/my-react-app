const Btn = ({ btnClick, children, disabled }) => {
  return (
    <button
      onClick={btnClick}
      disabled={disabled}
      className="p-4 m-2 bg-blue-500 text-white rounded-lg
  hover:bg-blue-700
  disabled:opacity-50
  disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};
export default Btn;

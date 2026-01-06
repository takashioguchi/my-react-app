const Btn = ({ title, onToggle, children, isOpen }) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className="p-4 m-2 bg-blue-500 text-white rounded-lg
  hover:bg-blue-700
  disabled:opacity-50
  disabled:cursor-not-allowed"
      >
        {title}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};
export default Btn;

const Btn = ({ btnClick, children }) => {
  return (
    <button
      onClick={btnClick}
      className="p-4 m-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      {children}
    </button>
  );
};
export default Btn;

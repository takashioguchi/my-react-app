const Test = ({ id, name, tel }) => {
  return (
    <div className="flex w-full">
      <h2 className="flex-1 text-center fade-in-animation">id:{id}</h2>
      <h2 className="flex-1 text-center fade-in-animation">name:{name}</h2>
      <h2 className="flex-1 text-center fade-in-animation">tel:{tel}</h2>
    </div>
  );
};
export default Test;

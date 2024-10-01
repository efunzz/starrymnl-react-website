function Button({ width, color, children }) {
  return (
    <button
      className={`rounded-lg px-4 py-2 text-white hover:opacity-80 duration-300 shadow-2xl hover:shadow-xl`}
      style={{
        backgroundColor: color,
        width: `${width}px`,
      }}
    >
      {children}
    </button>
  );
}

export default Button;

const Container = ({ children }) => {
  return (
    <div className="card containerBorder" style={{ width: "70%" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;

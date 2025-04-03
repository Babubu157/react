export default function Home() {
  const array = ["red", "blue", "green"];
  return (
    <div>
      <h1>Hello</h1>
      {array.map((el, index) => {
        return <Div key={index} value={el} />;
      })}
      <p>End here</p>
    </div>
  );
}

const Div = (props) => {
  return (
    <div
      style={{
        border: `1px solid ${props.value}`,
        height: "100px",
        width: "200px",
      }}
    >
      <p>ghjkl</p>
    </div>
  );
};

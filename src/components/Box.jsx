import "../styles/Box.css";
export default function Box({ isActive, toggleBox }) {
  return (
    <>
      <div
        onClick={toggleBox}
        className="Box"
        style={{ backgroundColor: isActive ? "lightskyblue" : "black" }}
      ></div>
    </>
  );
}

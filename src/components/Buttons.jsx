import "./styling.css";
import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  const renderButtons = () => {
    return (
      <div className="flex-container">
        {displaySats.map((sat, id) => {
          return (
            <button onClick={() => filterByType(sat)} key={id}>
              {sat} Orbit
            </button>
          );
        })}
      </div>
    )
  };

  return (
    <div className="flex-container">
      {renderButtons()}
      <button onClick={() => setSat(satData)}>All Orbit</button>
    </div>
  )
};

export default Buttons;
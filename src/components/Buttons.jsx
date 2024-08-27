import "./styling.css";
import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  const renderButtons = () => {
    return (
      <div>
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
    <div>
      {renderButtons()}
      <button onClick={() => setSat(satData)}>Update Sat</button>
    </div>
  )
};

export default Buttons;
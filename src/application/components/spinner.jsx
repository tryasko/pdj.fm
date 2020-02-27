import Preact from "preact";

export default function Spinner() {
  return (
    <div className="play-button spinner-frame" style={{ width: "100%" }}>
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </div>
  );
}

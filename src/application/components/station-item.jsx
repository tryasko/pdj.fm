import Preact from "preact";

export default function StationItem({ name, desc, logo, onSelect }) {
  return (
    <div>
      <div className="pure-g" onClick={() => onSelect(name)}>
        <div className="pure-u-1-4 l-box">
          <div className="station-logo">
            <img className="pure-img" src={logo} alt={name} />
          </div>
        </div>

        <div className="pure-u-3-4 l-box station-text">
          <div className="station-text-inside">
            <p className="station-heading">{name}</p>
            <p>{desc}</p>
          </div>
        </div>
      </div>

      <hr className="sep-line" />
    </div>
  );
}

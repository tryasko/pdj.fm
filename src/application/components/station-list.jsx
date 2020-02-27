import Preact from "preact";
import Spinner from "./spinner";
import StationItem from "./station-item";

export default function StationList({ stationList, stationListLoading, onSelect }) {
  if (stationListLoading) {
    return (
      <div className="content">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="content">
      {stationList.map(station => (
        <StationItem key={station.name} {...{ ...station, onSelect }} />
      ))}

      <div className="pure-g blank-radio">
        <div className="pure-u-1-4 l-box">
          <div className="station-logo">
            <img className="pure-img" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="" />
          </div>
        </div>

        <div className="pure-u-3-4 l-box" />
      </div>
    </div>
  );
}

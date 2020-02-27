import Preact from "preact";
import PlayerState from "./player-state";

export default function Controls({ stationName, stationLogo, stationSong, playerState, onPlayPause }) {
  return (
    <div className="player">
      <div className="pure-g player-content">
        <div className="pure-u-1-4 l-box">
          <div className="station-logo">
            <img className="pure-img active-station" src={stationLogo} alt={stationName} />

            <PlayerState {...{ playerState, onPlayPause }} />
          </div>
        </div>

        <div className="pure-u-3-4 l-box station-text">
          <div className="station-text-inside">
            <p className="station-heading">{stationName}</p>
            <p>{stationSong}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

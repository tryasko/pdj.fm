import Preact from "preact";
import Spinner from "./spinner";

export default function PlayerState({ playerState, onPlayPause }) {
  if (playerState === "playing") {
    return (
      <img className="pure-img play-button" src="./images/pause.svg" alt="" onClick={() => onPlayPause("pause")} />
    );
  }

  if (playerState === "paused" || playerState === "stopped") {
    return <img className="pure-img play-button" src="./images/play.svg" alt="" onClick={() => onPlayPause("play")} />;
  }

  // playerState === "loading"
  return <Spinner />;
}

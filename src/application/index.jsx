import Preact from "preact";
import StationList from "./components/station-list";
import Controls from "./components/controls";

export default class Application extends Preact.Component {
  constructor(props) {
    super(props);

    this.state = {
      stationName: "",
      stationLogo: "",
      stationStream: "",
      stationSong: "",
      playerState: "stopped", // loading || playing || (paused|stopped)
      stationList: [],
      stationListLoading: true
    };

    this.player = new Audio();
    this.player.addEventListener("loadstart", () => this.setState({ playerState: "loading" }));
    this.player.addEventListener("playing", () => this.setState({ playerState: "playing" }));
    this.player.addEventListener("pause", () => this.setState({ playerState: "paused" }));

    this.onSelect = this.onSelect.bind(this);
    this.onPlayPause = this.onPlayPause.bind(this);
  }

  componentDidMount() {
    fetch("./data/stations.json")
      .then(response => response.json())
      .then((stationList = []) => this.setState({ stationList, stationListLoading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.stationStream !== this.state.stationStream) {
      this.player.src = this.state.stationStream;
      this.player.play();
    }
  }

  render() {
    const { stationName, stationLogo, stationSong, playerState, stationList, stationListLoading } = this.state;

    return (
      <div id="application">
        <StationList
          {...{
            stationList,
            stationListLoading,
            onSelect: this.onSelect
          }}
        />

        <Controls {...{ stationName, stationLogo, playerState, stationSong, onPlayPause: this.onPlayPause }} />
      </div>
    );
  }

  onSelect(name) {
    const station = this.state.stationList.filter(station => station.name === name)[0];

    this.setState(
      Object.assign({
        stationName: station.name,
        stationLogo: station.logo,
        stationSong: "SANDER KLEINENBERG - This Is Not Maimi " + Date.now(),
        stationStream: station.stream
      })
    );
  }

  onPlayPause(action) {
    if (action === "play") {
      if (!this.player.src) {
        this.player.src = this.state.stationStream;
      }
      this.player.play();
    } else {
      // action === "pause
      this.player.pause();
    }
  }
}

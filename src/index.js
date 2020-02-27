import Preact from "preact";
import Application from "./application/";

import "./styles/pure-min.css";
import "./styles/main.css";

Preact.render(Preact.h(Application), document.getElementById("container"));

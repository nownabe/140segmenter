import { createElement } from "react";
import { render } from "react-dom";
import * as injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

import App from "App";

render(createElement(App), document.getElementById("app"));
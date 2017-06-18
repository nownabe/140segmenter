import * as React from "react";

import { LinearProgress } from "material-ui";

interface Props {
    value: number;
}

export default (props: Props) => (
    <LinearProgress
        mode="determinate"
        value={props.value}
    />
);
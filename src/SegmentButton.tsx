import * as React from "react";

import { RaisedButton } from "material-ui";

interface Props {
    disabled: boolean;
    onTouchTap: () => null;
}

export default (props: Props) => (
    <RaisedButton
        disabled={props.disabled}
        fullWidth={true}
        label="Convert"
        onTouchTap={props.onTouchTap}
        primary={true}
    />
);
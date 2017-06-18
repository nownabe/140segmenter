import * as React from "react";

import { RaisedButton } from "material-ui";

interface Props {
    style: object;
    tweets: string[];
}

export default (props: Props) => {
    const onTouchTap = () => {
        const blob = new Blob([props.tweets.join("\n\n")], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "tweets.txt";
        link.click();
    };
    return (
        <RaisedButton
            fullWidth={true}
            label="Download"
            onTouchTap={onTouchTap}
            style={props.style}
        />
    )
};

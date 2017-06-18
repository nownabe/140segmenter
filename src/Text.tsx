import * as React from "react";

import { TextField } from "material-ui";

interface Props {
    onChange: (e: React.FormEvent<HTMLTextAreaElement>) => null;
    value: string;
}

export default (props: Props) => (
    <TextField
        floatingLabelText="Text"
        fullWidth={true}
        hintText="Text"
        multiLine={true}
        onChange={props.onChange}
        rowsMax={20}
        value={props.value}
    />
)
import * as React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Segmenter from "segmenter";

import SegmentButton from "SegmentButton";
import DownloadButton from "DownloadButton";
import Progress from "Progress";
import Text from "Text";

interface Props {}
interface State {
    inProgress: boolean;
    isCompleted: boolean;
    progress: number;
    text: string;
}

export default class extends React.Component<Props, State> {
    private segmenter: Segmenter;
    private tweets: string[];

    constructor(props: Props) {
        super(props);
        this.state = {
            inProgress: false,
            isCompleted: false,
            progress: 0,
            text: "",
        };
        this.tweets = [];
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    { this.state.inProgress ? <Progress value={this.state.progress} /> : null }
                    <Text
                        onChange={this.onChangeText.bind(this)}
                        value={this.state.text}
                    />
                    <SegmentButton
                        disabled={this.state.inProgress}
                        onTouchTap={this.onSegmentTapped.bind(this)}
                    />
                    { this.state.isCompleted ? <DownloadButton style={{ marginTop: "12px" }} tweets={this.tweets} /> : null }
                </div>
            </MuiThemeProvider>
        )
    }

    private addTweet(tweet: string, progress: number) {
        this.tweets.push(tweet);
        this.setState({progress: progress})
    }

    private segment() {
        this.segmenter = new Segmenter(this.state.text, this.addTweet.bind(this))
        this.segmenter.segment()
    }

    private onChangeText(e: React.FormEvent<HTMLTextAreaElement>) {
        this.setState({ text: e.currentTarget.value })
    }

    private onSegmentTapped() {
        this.tweets = [];
        this.setState({
            inProgress: true,
            isCompleted: false,
            progress: 0
        });
        this.forceUpdate();
        this.segment();
        this.setState({ inProgress: false, isCompleted: true });
    }
}

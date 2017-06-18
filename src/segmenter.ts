type Callback = (tweet: string, progress: number) => null;

export default class {
    private callback: Callback;
    private rawSegments: string[];

    constructor(text: string, callback: Callback) {
        this.callback = callback;
        this.rawSegments = text.split(/\r\r|\r|\n/);
    }

    segment() {
        let currentTweet = "";
        this.rawSegments.forEach((segment: string, i: number) => {
            segment = segment.replace(/\r\n|\r|\n/, "")
            if (currentTweet === "") {
                currentTweet = segment;
            } else if ((currentTweet + "\n" + segment).length < 140) {
                currentTweet = currentTweet + "\n" + segment;
            } else {
                this.callback(currentTweet, i / this.rawSegments.length * 100);
                currentTweet = segment;
            }
        })
        this.callback(currentTweet, 100);
    }
}
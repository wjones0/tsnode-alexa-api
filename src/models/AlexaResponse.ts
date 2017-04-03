

export class AlexaResponse {
    version: string;
    sessionAttributes?: {
        string: any;
    };
    response: {
        outputSpeech?: {
            type: string;
            text: string;
            ssml: string;
        };
        card?: {
            type: string;
            title?: string;
            content?: string;
            text?: string;
            image?: {
                smallImageUrl: string;
                largeImageUrl: string;
            };
        };
        reprompt?: {
            outputSpeech?: {
                type: string;
                text: string;
                ssml: string;
            };
        };
        directives?: [
            {
                type: string;
                playBehavior: string;
                audioItem: {
                    stream: {
                        token: string;
                        url: string;
                        offsetInMilliseconds: 0;
                    };
                };
            }
        ];
        shouldEndSession?: boolean;
    };
}
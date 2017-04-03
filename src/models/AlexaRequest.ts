

export class AlexaRequest {
    version: string;
    session: {
        new: boolean,
        sessionId: string;
        application: {
            applicationId: string;
        };
        attributes: {
            string: any;
        };
        user: {
            userId: string;
            accessToken: string;
        };
    };
    context: {
        System: {
            application: {
                applicationId: string;
            };
            user: {
                userId: string;
                accessToken: string;
            };
            device: {
                supportedInterfaces: {
                    AudioPlayer: any;
                };
            };
        };
        AudioPlayer: {
            token: string;
            offsetInMilliseconds: number;
            playerActivity: string;
        };
    };
    request: any;


}



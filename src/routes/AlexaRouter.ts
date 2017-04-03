import { Router, Request, Response, NextFunction } from 'express';
import { AlexaResponse } from '../models/AlexaResponse';
import { AlexaRequest } from "../models/AlexaRequest";

export class AlexaRouter {
    router: Router

    /**
     * Initialize the AlexaRouter
     */
    constructor() {
        this.router = Router();
        this.init();
    }

    public Greeting(req: Request, res: Response, next: NextFunction) {
        let alreq: AlexaRequest = req.body;
        if (alreq.request.type === "LaunchRequest") {
            res.send({
                "version": "1.0",
                "response": {
                    "outputSpeech": {
                        "type": "SSML",
                        "ssml": "<speak>Hello, welcome to the Hank of Hank.</speak>"
                    },
                    "shouldEndSession": false
                }

            });
        }
        else {
            if (alreq.request.type === "IntentRequest") {
                if (alreq.request.intent.name === "AMAZON.StopIntent") {
                    res.send({
                        "version": "1.0",
                        "response": {
                            "outputSpeech": {
                                "type": "SSML",
                                "ssml": "<speak>Have a great day!</speak>"
                            },
                            "shouldEndSession": true
                        }
                    });
                }
                else {
                    res.send({
                        "version": "1.0",
                        "response": {
                            "outputSpeech": {
                                "type": "SSML",
                                "ssml": "<speak>You are doing a fine job.</speak>"
                            },
                            "shouldEndSession": false
                        }
                    });
                }
            }
        }
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.post('/', this.Greeting);
    }

}

// Create the HeroRouter, and export its configured Express.Router
const alexaRoutes = new AlexaRouter();
alexaRoutes.init();

export default alexaRoutes.router;
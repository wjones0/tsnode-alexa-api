import { Router, Request, Response, NextFunction } from 'express';
import { AlexaResponse } from '../models/AlexaResponse';

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
        let alres: AlexaResponse =
            {
                "version": "1.0",
                "response": {
                    "outputSpeech": {
                        "type": "SSML",
                        "ssml": "<speak>Hello, you are doing a fine job.</speak>"
                    },
                    "shouldEndSession": false
                }
            }
        res.send({
            "version": "1.0",
            "sessionAttributes": {
                "supportedHoriscopePeriods": {
                    "daily": true,
                    "weekly": false,
                    "monthly": false
                }
            },
            "response": {
                "outputSpeech": {
                    "type": "PlainText",
                    "text": "Today will provide you a new learning opportunity.  Stick with it and the possibilities will be endless. Can I help you with anything else?"
                },
                "card": {
                    "type": "Simple",
                    "title": "Horoscope",
                    "content": "Today will provide you a new learning opportunity.  Stick with it and the possibilities will be endless."
                },
                "reprompt": {
                    "outputSpeech": {
                        "type": "PlainText",
                        "text": "Can I help you with anything else?"
                    }
                },
                "shouldEndSession": false
            }
        });
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
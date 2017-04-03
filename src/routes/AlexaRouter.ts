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
                        "text": "<speak>Hello, you are doing a fine job.</speak>"
                    },
                    "shouldEndSession": true
                }
            }
        res.send(alres);
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
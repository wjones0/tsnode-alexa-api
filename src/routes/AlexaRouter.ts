import { Router, Request, Response, NextFunction } from 'express';

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
        res.send({
            "version": "1.0",
            "response": {
                "outputSpeech": {
                    "type": "PlainText",
                    "text": "Hello, you are doing a fine job."
                },
                "shouldEndSession": true
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
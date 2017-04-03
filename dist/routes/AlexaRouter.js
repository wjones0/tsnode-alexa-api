"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AlexaRouter {
    /**
     * Initialize the AlexaRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    Greeting(req, res, next) {
        let alres = {
            "version": "1.0",
            "response": {
                "outputSpeech": {
                    "type": "SSML",
                    "ssml": "<speak>Hello, you are doing a fine job.</speak>"
                },
                "shouldEndSession": false
            }
        };
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
exports.AlexaRouter = AlexaRouter;
// Create the HeroRouter, and export its configured Express.Router
const alexaRoutes = new AlexaRouter();
alexaRoutes.init();
exports.default = alexaRoutes.router;

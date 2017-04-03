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
        let alreq = req.body;
        if (alreq.request.type === "LaunchRequest") {
            res.send({
                "version": "1.0",
                "response": {
                    "outputSpeech": {
                        "type": "SSML",
                        "ssml": "<speak>Hello, welcome to the paradise of Hank.  The Hankadise.</speak>"
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
                                "ssml": "<speak>Hello, you are doing a fine job.</speak>"
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
                                "ssml": "<speak>Hello, you are doing a fine job.</speak>"
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
exports.AlexaRouter = AlexaRouter;
// Create the HeroRouter, and export its configured Express.Router
const alexaRoutes = new AlexaRouter();
alexaRoutes.init();
exports.default = alexaRoutes.router;

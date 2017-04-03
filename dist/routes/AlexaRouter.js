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
        this.router.get('/', this.Greeting);
    }
}
exports.AlexaRouter = AlexaRouter;
// Create the HeroRouter, and export its configured Express.Router
const alexaRoutes = new AlexaRouter();
alexaRoutes.init();
exports.default = alexaRoutes.router;

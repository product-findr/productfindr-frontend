import { StackClient } from "@stackso/js-core";

const stack = new StackClient({
    apiKey: process.env.STACKAPIKEY,
    pointSystemId: process.env.POINTSYSTEMID,
});

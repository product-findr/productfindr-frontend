import { StackClient } from "@stackso/js-core"; 

const stack = new StackClient({
    // Get your API key and point system id from the Stack dashboard (stack.so)
    apiKey: "aef41135-388d-4e96-af4b-24039c7ca4ee", 
    pointSystemId: 2774,
});

export default stack;
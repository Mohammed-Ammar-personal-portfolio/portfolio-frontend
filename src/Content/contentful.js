import { createClient } from "contentful";

let client;

try {
    client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACEID,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    });
} catch (error) {
    console.error({message: error.message});
}

export default client;
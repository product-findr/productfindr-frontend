// use NODE_ENV to not have change config based on where it is deployed

export const NEXT_PUBLIC_URL = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : '';
// Add the API KEY from the coinbase developer portal

export const NEXT_PUBLIC_CDP_API_KEY = process.env.NEXT_PUBLIC_CDP_API_KEY;
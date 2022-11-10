import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'nekozuki-me',
  apiKey: process.env.API_KEY || '',
});
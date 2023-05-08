const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const client = axios.create({
    baseURL: 'https://api.openai.com/v1/engines/text-davinci-003/completions',
    headers: { 'Authorization': 'Bearer ' + OPENAI_API_KEY }

});

async function interpretDream(description) {
    const prompt = `Interpret the following dream experience: ${description}`;
    const params = {
        prompt: prompt,
        max_tokens: 20
        // n: 1,
        // stop: null,
        // temperature: 0.5
    };

    try {
        const response = await client.post('', params);
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error in interpretDream:', error.response.data);
        throw new Error('Failed to interpret dream');
    }
}

module.exports = { interpretDream };

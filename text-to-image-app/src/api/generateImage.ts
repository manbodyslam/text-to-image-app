import axios from 'axios';

const CLOUDFLARE_API_URL = 'https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/images/v1';

export const generateImage = async (text: string): Promise<string> => {
    try {
        const response = await axios.post(CLOUDFLARE_API_URL, {
            text: text,
            // Add any other necessary parameters for the API request
        }, {
            headers: {
                'Authorization': `Bearer YOUR_API_TOKEN`,
                'Content-Type': 'application/json'
            }
        });

        if (response.data && response.data.result && response.data.result.image_url) {
            return response.data.result.image_url;
        } else {
            throw new Error('Image generation failed');
        }
    } catch (error) {
        console.error('Error generating image:', error);
        throw error;
    }
};
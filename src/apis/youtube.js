import axios from 'axios';

const KEY = 'AIzaSyBP_xkOtzpjSEiT8N-yfwBp6T45z6JRrJs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});

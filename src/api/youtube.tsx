import axios from 'axios';
import { API_KEY } from '../config';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 1,
    key: API_KEY,
  },
});

// Tipagem da resposta da API do YouTube
interface YouTubeSearchResponse {
  items: Array<{
    id: {
      videoId: string;
    };
  }>;
}

export const searchYoutube = async (query: string): Promise<string> => {
  const response = await youtube.get<YouTubeSearchResponse>('/search', {
    params: {
      q: query,
    },
  });

  return response.data.items[0].id.videoId;
};

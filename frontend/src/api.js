import axios from "axios";

const API_BASE_URL = "https://youtube-sentiment-xeg3.onrender.com/api/data";

export const fetchComments = async (videoId) => {
    return axios.post(`${API_BASE_URL}/fetch-comments`, { video_id: videoId });
};

export const getInsights = async (videoId) => {
    return axios.get(`${API_BASE_URL}/get-insights`, { params: { video_id: videoId } });
};

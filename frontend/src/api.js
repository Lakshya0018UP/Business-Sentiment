import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5000/api";

export const fetchComments = async (videoId) => {
    return axios.post(`${API_BASE_URL}/fetch-comments`, { video_id: videoId });
};

export const getInsights = async (videoId) => {
    return axios.get(`${API_BASE_URL}/get-insights`, { params: { video_id: videoId } });
};

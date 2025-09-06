import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL || "https://tune-talk-4id4.vercel.app",
});

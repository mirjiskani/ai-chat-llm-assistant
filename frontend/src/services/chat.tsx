import api from "./api";

export const postChat = (message: Object) => api.post("api/chat", { message });

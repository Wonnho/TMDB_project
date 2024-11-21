import api from "./axios";

//list get
//individual get
//post

const postApi = {
  getPosts: async () => {
    const response = await api.get("");
    return response.data;
  },
  //individual get
  getPostById: async (postId) => {
    const response = await api.get(`${postId}`);
    return response.data;
  },
  createPost: async (formData) => {
    const response = await api.post("", formData);
    return response.data;
  },
};

export default postApi;

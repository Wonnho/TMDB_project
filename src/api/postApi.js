import api from "./axios/axios";

//list get
//individual get
//post

//여기서 쓰면 재사용이 제한이 된다.

const postApi = {
  getPosts: async (category) => {
    const response = await api.get(category);
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

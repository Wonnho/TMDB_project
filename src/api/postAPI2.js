const postApi = {
  getPosts: async () => {
    const response = await ApiProvider.get("");
    return response.data;
  },
  getPostById: async (makeId) => {
    const response = await ApiProvider.post("${makeId}");
    return response.data;
  },
  createPost: async () => {
    const response = await ApiProvider.post("", formData);
    return response.data;
  },
};

export default postApi;

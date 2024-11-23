import api from "./axios/axios";

//list get
//individual get
//post

//여기서 쓰면 재사용이 제한이 된다.

const postApi = {
  getPosts: async (category) => {
    console.log("실행되나?"); //getPosts가 제대로 작동되나를 확인해 보자
    const response = await api.get(category);
    return response.data;
  },

  //individual get
  getPostById: async (id) => {
    const response = await api.get(`${id}`);
    return response.data;
  },
  createPost: async (formData) => {
    const response = await api.post("", formData);
    return response.data;
  },
  // getDetail: async (id) => {
  //   console.log("실행되나?"); //getPosts가 제대로 작동되나를 확인해 보자
  //   const response = await api.get(`${id}`);
  //   return response.data;
  // },
};

export default postApi;

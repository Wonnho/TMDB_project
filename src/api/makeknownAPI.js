import Api from "axios";

const makeknownAPI = {
  getMakeknown: async () => {
    const response = await Api.get("");
    return response.data;
  },
  getMakeknownById: async (makeId) => {
    const response = await Api.post(`${makeId}`);
    return response.data;
  },
  createMakeknown: async (formData) => {
    const response = await Api.post("", formData);
    return response.data;
  },
   
  
    // createMakeknown: async (formData) => {
    //   const response = await Api.post("/makeknown/create", formData);
    //   return response.data;
    // },

};

export default makeknownAPI;

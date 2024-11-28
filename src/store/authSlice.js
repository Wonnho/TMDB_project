import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  // isAdmin:false,
  // user:{
  //   name:'guest'
  // }
};

// const [value, setValue] = useState(false);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // 원래는 server에다가 맞는지 요청을 보냄
      // 우리는 server가 없으니, 그냥 if문 쓰자.
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

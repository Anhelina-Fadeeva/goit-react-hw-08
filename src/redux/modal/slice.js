import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpenModal: false,
    delModal: false,
    currentContact: null,
  },
  reducers: {
    setOpenModal: (state, action) => {
      state.delModal = action.payload;
    },

    setCloseModal: (state) => {
      state.delModal = false;
    },
    setCurrentContact: (state, action) => {
      state.currentContact = action.payload;
    },
  },
});

export const { setOpenModal, setCloseModal, setCurrentContact } =
  modalSlice.actions;

export default modalSlice.reducer;
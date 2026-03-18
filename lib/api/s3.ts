import api from "../axios";

export const s3Api = {
  uploadImage: async (formData: FormData) => {
    const { data } = await api.post("/upload", formData);
    return data;
  },
};

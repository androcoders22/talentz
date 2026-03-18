import api from "../axios";

export const blogApi = {
  getAll: async () => {
    const { data } = await api.get("/blogs");
    return data;
  },

  getActive: async () => {
    const { data } = await api.get("/blogs/active");
    return data;
  },

  create: async (blogData: any) => {
    const { data } = await api.post("/blogs", blogData);
    return data;
  },

  update: async (id: string, blogData: any) => {
    const { data } = await api.put(`/blogs/${id}`, blogData);
    return data;
  },

  delete: async (id: string) => {
    const { data } = await api.delete(`/blogs/${id}`);
    return data;
  },
};

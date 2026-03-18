// In a real application, this would make an API call using the axios instance.
// For now, it mimics the existing behavior.

export const authApi = {
  login: async (credentials: { username: string; password: string }) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (credentials.username === "Test" && credentials.password === "test") {
      return { success: true, token: "fake-jwt-token" };
    } else {
      throw new Error("Invalid username or password");
    }
  },
};

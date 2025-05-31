import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchData = async (searchValue, currentPage) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  try {
    const response = await axios.get("/search/photos", {
      params: {
        query: searchValue,
        page: currentPage,
        per_page: 12,
      },
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    });

    return response;
  } catch (error) {
    console.error("Fetch error:", error.message);
    throw error;
  }
};

import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchData = async (searchValue, currentPage = 1) => {
  const apiKey = "VQppnVD__ZqJ2MeulwdzyzELoxQwPG0U7FUetz13Jm3k"; 

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

    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};



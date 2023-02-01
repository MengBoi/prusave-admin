import axios from "axios";

const patchRequest = async (endpoint, body) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.patch(
      process.env.NEXT_PUBLIC_API_HOSTNAME + endpoint,
      body,
      config
    );
    return response;
  } catch (error) {
    if (error.response.status == 401) {
      window.location.href = "/login";
    }
    return;
  }
};

export default patchRequest;

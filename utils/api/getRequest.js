import axios from "axios";

async function getRequest(endpoint) {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_HOSTNAME + endpoint,
      config
    );
    return response;
  } catch (error) {
    console.log("err", error.response.status);
    if (error.response.status == 401) {
      console.log("err", error.response.status);
      if (error.response.status == 401) {
        window.location.href = "/login";
      }
    }
    return error.response;
  }
}

export default getRequest;

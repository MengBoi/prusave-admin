import axios from "axios";
import { useRouter } from "next/router";
const deleteRequest = async (endpoint) => {
  const router = useRouter();
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      accept: "*/*",
    },
  };
  try {
    const response = await axios.delete(
      process.env.NEXT_PUBLIC_API_HOSTNAME + endpoint,
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
export default deleteRequest;

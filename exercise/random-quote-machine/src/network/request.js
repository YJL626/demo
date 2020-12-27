import axios from "axios";
const requestQuote = axios.create({
  baseURL: "https://v1.alapi.cn/api",
  timeout: 2000,
});
export function getQuote(typeid) {
  return requestQuote({
    url: "/mingyan",
    params: {
      typeid,
    },
  })
    .then((result) => {
      if (result.status > 199 && result.status < 300) {
        return result.data.data;
      } else {
        console.log("request error");
        return false;
      }
    })
    .catch((error) => console.log(error));
}

import axios from "axios";

async function getData(Number) {
  try {
    async function getUserId(Number) {
      const { data: users } = await axios(
        "https://jsonplaceholder.typicode.com/users/" + Number
      );
      console.log(users);
    }
    async function getPostUserId(Number) {
      const { data: posts } = await axios(
        "https://jsonplaceholder.typicode.com/posts?id=" + Number
      );
      console.log(posts);
    }
    const uId = await getUserId(Number);
    const pUserIs = await getPostUserId(Number);
    return uId + pUserIs;
  } catch (error) {
    console.log(error);
  }
}
export default getData;

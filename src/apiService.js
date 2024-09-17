// import axios from "axios";
// const BASE_URL = "https://inventstarts.com:444/Api/";
// const BASE_URLLOGIN = "https://inventstarts.com:444/"
// let TOKEN = null;
// if(localStorage.getItem("token") !=null){
//  TOKEN = localStorage.getItem("token")
// }
// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });
// export const FetchUrl = 'https://inventstarts.com:444/Api/'
// export const publicRequests = axios.create({
//   baseURL: BASE_URLLOGIN,
// });
// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: { token: `Bearer ${TOKEN}` },
// });


// useEffect(() => {
//     const getQuantity = async () => {
//       if (user !== null) {
//         const res = await publicRequest.get('Cart/get-user-products-quantity', {
//           headers: {
//             Authorization: 'bearer ' + JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.token,
//           },
//         });
//         setCartLength(res.data.data);
//       }
//     };
//     getQuantity();
//   }, [appRefresher, refresh]);
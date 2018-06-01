// export const normalizeResponseErrors = res => {
//   if (!res.ok) {
//     if (
//       res.headers.has('Content-Type') && 
//       res.headers.get('Content-Type').startsWith('application/json')
//     ) {
//       return res.json()
//         .then(err => Promise.reject(err));
//     }

//     return Promise.reject({
//       code: res.status,
//       message: res.statusText
//     });
//   }
//   return res;
// }
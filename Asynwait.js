const BaseUrl = 'https://jsonplaceholder.typicode.com';

// const GetPost = () => {
//     return fetch(`${BaseUrl}/posts/1`)
//         .then((response) => { return response.json(); })
//         .then((json) => {
//             console.log(json);
//         })
//         .catch((error) => {
//             console.error('Une erreur s\'est produite :', error);
//         });
// }
// GetPost();

const GetPost= async() =>{
try {
    const respensive= await fetch(`${BaseUrl}/posts`);
    const json= await respensive.json();
    console.log(json);
} catch (error) {
    console.log('une erreur s\'est produite :',error);
}
   
}

GetPost();


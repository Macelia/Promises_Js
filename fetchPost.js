const BaseUrl = 'https://jsonplaceholder.typicode.com';

// const CreatePost = () => {
//     fetch(`${BaseUrl}/posts`, {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.error('Une erreur s\'est produite :', error));
// }

// CreatePost();

const GetPost = async()=>{
    try {
        const respense = await   fetch(`${BaseUrl}/posts`, {
                    method: 'POST',
                    body: JSON.stringify({
                        title: 'foo',
                        body: 'bar',
                        userId: 1,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });

                const json = await respense.json();
                console.log(json);
        
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
}

GetPost();

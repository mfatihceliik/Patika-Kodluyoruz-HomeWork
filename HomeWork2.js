
const posts = [
    {postName: "Kodluyoruz", author: "Muhammed Fatih"},
    {postName: "Patika", author: "Muhammed Fatih"}
]



function listPost(){
    posts.map(post => {
        console.log("Post adı: " + post.postName + " Yazar: " + post.author);
    });
}

function addPost(newPost){
    const promise = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
    })
    return promise;
}

addPost({postName: "3. Post", author: "Muhammed Fatih"})
    .then(result => {
        console.log("New Post list: ");
        listPost();

    }).catch(error => {
        console.log(error);
    })
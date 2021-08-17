const fs = require("fs");
const axios = require("axios");

const readFile = () => {
    console.log('Hi')
    fs.readFile("data.txt", (err,data) => {
        if (err) {
            throw err;
        }
        console.log(data.toString())
    })
};
readFile();


const writeFile = () => {
    fs.writeFile("text.txt","", (err)=>{
        if (err) throw err;

        console.log("The file has been saved");
    })
};
writeFile();



const getPost = (id) => {
 axios
 .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
 .then((response)=>{
     console.log(response.data)
 })
 .catch((err)=>{
     throw err;
 })
};
getPost(1);
getPost(50);
const getPostAsync = async(id) => {
    try{
        const post = await axios.get(`https://onplaceholder.typicode.com/posts/${id}`);
        console.log(post)
        return post;
    }catch(err){
        throw err;
    }
};
getPostAsync(1);
getPostAsync(50);
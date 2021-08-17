const fs = require("fs");
const axios = require("axios");
const { triggerAsyncId } = require("async_hooks");
/*
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


*/

console.log('**************Practice*****************')
console.log('**************Practice*****************')
console.log('**************Practice*****************')
/*
console.log('P Q1')

const fsPromises = fs.promises;
const appendToFile = (data) => {
    fsPromises.appendFile('data.txt',data, ()=>{
        console.log("Data has been appended \n");
    })
};

appendToFile('This text is appended!');
*/

/*
console.log('P Q2')

const copyFile = (fileName) => {
    fs.copyFile(fileName, `copy_of_${fileName}`, ()=> {
        console.log('done')
    });
};
  
copyFile('data.txt');
*/


console.log('P Q3')
const post = {
    title: "JavaScript Basics",
    body: "This post contains information about javaScript ",
    // the id of the user who is going to create the post
    userId: 1,
};

const createPost = (post) => {
    axios.post("https://jsonplaceholder.typicode.com/posts",post)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
};

createPost(post);




import  express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
const postData = [];
 


app.use(express.static("public"));

app.get('/', (req, res) => {
    //res.send('Hello World!'); 
    res.render("index.ejs", {postData});
});

app.get('/create', (req, res) => {
    //res.send('Hello World!');
    res.render("create.ejs");
});


app.post('/submit', (req, res) => {
    //res.send('Hello World!');
    const post_name= req.body["name"];
    const post_title= req.body["title"];
    const post_comment= req.body["comment"];
    
    const newPost = {
        id:  postData.length + 1,
        p_name:post_name,
        p_title: post_title,
        p_comment: post_comment,
    } 

    postData.push(newPost);

    console.log(postData);

    res.redirect("/");

});
/*
app.put('/create', (req, res) => {
    //res.send('Hello World!');
    res.render("create.ejs");
});

*/  







app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
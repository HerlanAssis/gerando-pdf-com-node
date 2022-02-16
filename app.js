const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const express = require("express");
const path = require("path");
const pdf = require("html-pdf");
const nunjucks = require("nunjucks");
const app = express();
const port = 3000;

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(connectLiveReload());

const generatePDF = (req, res) => {
  
  const context = {
    baseCssPath: path.join("file://", __dirname, "public/css/base.css"),
    userCssPath: path.join("file://", __dirname, "public/css/user.css"),
    postCssPath: path.join("file://", __dirname, "public/css/post.css"),
    title: "My Blog",
    user: {
      profilePhoto: path.join("file://", __dirname, "public/images/photo.jpg"),
      fullName: "Leanne Graham Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",        
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    post: {      
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      comments: [
        {
          name: "id labore ex et quam laborum",
          email: "Eliseo@gardner.biz",
          body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        },
        {
          name: "quo vero reiciendis velit similique earum",
          email: "Jayne_Kuhic@sydney.com",
          body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
        },
        {
          name: "odio adipisci rerum aut animi",
          email: "Nikita@garfield.biz",
          body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
        },
      ],
    },
  };

  const template = path.join(__dirname, "public/index.html");

  const html = nunjucks.render(template, context);

  const options = {
    localUrlAccess: true,
    type: "pdf",
    format: "A4",
    orientation: "portrait",
    border: {
      top: "1cm",
      right: "1cm",
      bottom: "1cm",
      left: "1cm",
    },
  };

  pdf.create(html, options).toBuffer((err, buffer) => {
    if (err) return res.status(500).json(err);

    res.end(buffer);
  });
};

app.post("/generate-pdf", generatePDF);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

app.use("/public", express.static(path.resolve(__dirname + "/public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/post", (req, res, next) => {
  console.log(req.url);
  res.json([
    {
      sender: {
        publisher: "Настоящий Оптимист",
        ico: "/public/img/logo.jpg",
        url: "url",
        time: "дата пебликации",
        subscription: true,
      },
      content: {
        article: "Так мы ей и поверили",
        mediaContent: [
          { type: "video", url: "/public/img/1.jpg", time: "time" },
          { type: "img", url: "/public/img/1.jpg" },
        ],
      },
      likeContent: {
        like: {
          status: true,
          url: "url",
          quantity: 4,
        },
        comments: {
          status: true,
          url: "url",
          quantity: 4,
        },
        repost: {
          status: false,
          url: "url",
          quantity: 0,
        },
        views: 45,
      },
    },
    {
      sender: {
        publisher: "Настоящий Оптимист",
        ico: "/public/img/logo.jpg",
        url: "url",
        time: "дата пебликации",
        subscription: false,
      },
      content: {
        article: "Так мы ей и поверили",
        mediaContent: [
          { type: "video", url: "/public/img/1.jpg", time: "time" },
          { type: "img", url: "/public/img/1.jpg" },
        ],
      },
      likeContent: {
        like: {
          status: true,
          url: "url",
          quantity: 4,
        },
        comments: {
          status: true,
          url: "url",
          quantity: 4,
        },
        repost: {
          status: false,
          url: "url",
          quantity: 0,
        },
        views: 45,
      },
    },
    {
      sender: {
        publisher: "Настоящий Оптимист",
        ico: "/public/img/logo.jpg",
        url: "url",
        time: "дата пебликации",
        subscription: true,
      },
      content: {
        article: "Так мы ей и поверили",
        mediaContent: [
          { type: "video", url: "/public/img/1.jpg", time: "time" },
          { type: "img", url: "/public/img/1.jpg" },
        ],
      },
      likeContent: {
        like: {
          status: true,
          url: "url",
          quantity: 4,
        },
        comments: {
          status: true,
          url: "url",
          quantity: 4,
        },
        repost: {
          status: false,
          url: "url",
          quantity: 0,
        },
        views: 45,
      },
    },
  ]);
  next();
});
app.listen(PORT, () => {
  console.log(`server is PORT ${PORT}`);
});

// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";

// app config
const app = express();
const port = process.env.PORT || 9000;


const pusher = new Pusher({
  appId: "1414359",
  key: "fe77b05322ba96a15311",
  secret: "32fce312e499afdb63a3",
  cluster: "ap2",
  useTLS: true,
});

// middleware
app.use(express.json());

app.use(cors());

// DB config
const connection_url =
  "mongodb+srv://whatschat:kEa8khOtBsuEjdDq@mongo-whatschat.uw2h6qk.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful"))
  .catch((e) => console.log("failed", e))
  .finally(() => console.log("DB Running"));

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connecting DB");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("A change occurred", change);

    if (change.operationType == "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        uid: messageDetails.uid,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

// ????

// api routes

app.get("/", async (req, res) => {
  await Messages.deleteMany({});
  res.send("Messages deleted");
});
app.get("/api/v1/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/api/v1/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`new message created: \n ${data}`);
    }
  });
});

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));

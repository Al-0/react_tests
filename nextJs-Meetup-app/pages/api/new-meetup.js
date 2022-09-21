// /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = MongoClient.connect(
      `mongodb+srv://Wholewheatbread:${process.env.MONGO_PASS}@test.d0autlk.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const res = await meetupsCollection.insertOne(data);

    console.log(res);

    client.close();

    res.status(201).json({message:'meetup inserted'});
  }
}

export default handler;

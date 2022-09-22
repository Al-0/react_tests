import React from "react";
import { MongoClient } from "mongodb";
import { MeetupDetail } from "../components/meetups/MeetupDetail";

export default function MeetUpDetails({ meetupData }) {
  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://Wholewheatbread:${process.env.MONGO_PASS}@test.d0autlk.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const loadedMeetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: loadedMeetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;

  const client = await MongoClient.connect(
    `mongodb+srv://Wholewheatbread:${process.env.MONGO_PASS}@test.d0autlk.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const ObjectId = require("mongodb").ObjectId;
  const loadedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        image: loadedMeetup.image,
        title: loadedMeetup.title,
        address: loadedMeetup.address,
        description: loadedMeetup.description,
      },
    },
  };
}

import React from "react";
import { MeetupDetail } from "../components/meetups/MeetupDetail";

export default function MeetUpDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/K%C3%B6lner_Dom_nachts_2013.jpg/1920px-K%C3%B6lner_Dom_nachts_2013.jpg"
      title="A meetup"
      address="Test street, 1234, New Zealand"
      description="A meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/K%C3%B6lner_Dom_nachts_2013.jpg/1920px-K%C3%B6lner_Dom_nachts_2013.jpg",
        title: "A meetup",
        address: "Test street, 1234, New Zealand",
        description: "A meetup description",
      },
    },
  };
}

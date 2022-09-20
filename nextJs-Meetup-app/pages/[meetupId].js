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

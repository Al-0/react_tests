import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "./../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "First meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/K%C3%B6lner_Dom_nachts_2013.jpg/1920px-K%C3%B6lner_Dom_nachts_2013.jpg",
//     address: "Dummy adress street, #123",
//     description: "This is the first meetup",
//   },
//   {
//     id: "m2",
//     title: "Second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/K%C3%B6lner_Dom_nachts_2013.jpg/1920px-K%C3%B6lner_Dom_nachts_2013.jpg",
//     address: "Dummy adress boulevard, #321",
//     description: "This is the second meetup",
//   },
// ];

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>React meetups</title>
        <meta name="description" content="Browse a list of meetups in this Next JS demo app" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   //fetch data
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  // fetch data
  const client = await MongoClient.connect(
    `mongodb+srv://Wholewheatbread:${process.env.MONGO_PASS}@test.d0autlk.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const loadedMeetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: loadedMeetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

import NewMeetupForm from "./../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

import Player from './components/Player.jsx';
import TimerChallenge from './components/TimeChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Medium" targetTime={5} />
        <TimerChallenge title="Hard" targetTime={7} />
        <TimerChallenge title="Expert" targetTime={10} />
      </div>
    </>
  );
}

export default App;

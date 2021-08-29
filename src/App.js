import './App.css';
import './Message.css';
import { Message } from './components/MyText/message';

function App() {
  const myName = "Maks";
  return (
    <div className="App">
      <Message name={myName} />
    </div>
  );
}

export default App;

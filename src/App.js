import { useState, useEffect } from 'react';
import './App.css';
import './Message.css';
import './BotMessage.css';
import { BotMessage } from './components/BotMessage/botmessage';
import { Counter } from './components/Counter/counter';

const messageList = [
  { text: '', author: '' }
];

function App() {
  const [messages, setMessages] = useState(messageList);
  const [value, setValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (messages[messages.length - 1]?.author === "Human") {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: "I'm Bot", author: "Bot" },
        ]);
      }
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [messages]);

  const handleMessage = (e) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "new message", author: "Human" },
    ]);
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <Counter />
      <form onSubmit={handleMessage} className="BotMessage">
        <button type="submit">Send</button>
        <input value={value} type="text" onChange={handleChange} />
        {messages.map((message, i) => (
          <BotMessage key={i} text={message.text} />
        ))}
      </form>

    </div>
  );
}

export default App;

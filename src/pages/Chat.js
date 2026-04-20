import { useState } from "react";

export default function Chat() {

  // ✅ THESE FIX YOUR ERROR
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const userQuestion = input;

    setInput("");

    const reply = `
📘 Definition:
${userQuestion} is an important concept that can be understood in simple terms.

📖 Explanation:
This topic involves key ideas that help in understanding how it works.

💡 Example:
This concept can be seen in real life situations.

🔑 Key Points:
- Easy to understand
- Important for basics
- Useful in real world
`;

    const botMsg = {
      sender: "bot",
      text: reply,
      video: "https://www.youtube.com/results?search_query=" + encodeURIComponent(userQuestion)
    };

    setMessages(prev => [...prev, userMsg, botMsg]);
  };

  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <h2>EduBot Chat</h2>

      <div style={{ border: "1px solid gray", height: "300px", overflow: "auto" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ margin: "10px" }}>
            <p><b>{msg.sender}:</b> {msg.text}</p>

            {msg.video && (
              <a href={msg.video} target="_blank" rel="noreferrer">
                ▶️ Watch Video
              </a>
            )}
          </div>
        ))}
      </div>

      <br />

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
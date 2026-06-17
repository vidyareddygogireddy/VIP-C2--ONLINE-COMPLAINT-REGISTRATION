import React, { useState } from 'react';

function ChatBox({ messages, onSendMessage }) {
  const [text, setText] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <div className="chat-box card shadow-sm mt-3">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Chat Messages</h5>
      </div>
      <div className="card-body chat-messages" style={{ height: '300px', overflowY: 'auto' }}>
        {messages && messages.map((msg, i) => (
          <div key={i} className={`mb-2 p-2 rounded ${msg.sender === 'user' ? 'bg-light text-start' : 'bg-primary-subtle text-end'}`}>
            <strong>{msg.senderName || (msg.sender === 'user' ? 'User' : 'Agent')}:</strong> {msg.text}
          </div>
        ))}
        {(!messages || messages.length === 0) && (
          <p className="text-muted text-center mt-5">No messages yet. Start the conversation!</p>
        )}
      </div>
      <div className="card-footer">
        <form onSubmit={handleSend} className="input-group">
          <input 
            type="text" 
            className="form-control"
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Type your message..." 
            required
          />
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ChatBox;

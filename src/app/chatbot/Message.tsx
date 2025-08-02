import React from 'react';

interface MessageProps {
  message: {
    text: string;
    sender: 'user' | 'bot';
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  const messageStyle: React.CSSProperties = {
    maxWidth: '70%',
    padding: '0.5rem 1rem',
    borderRadius: '1rem',
    marginBottom: '0.5rem',
    alignSelf: isUser ? 'flex-end' : 'flex-start',
    background: isUser ? '#007bff' : '#e9e9eb',
    color: isUser ? 'white' : 'black',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: isUser ? 'flex-end' : 'flex-start',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <div style={messageStyle}>
        {message.text}
      </div>
    </div>
  );
};

export default Message;

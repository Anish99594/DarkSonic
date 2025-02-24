


// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import { Settings, Send, Square, Pencil, Check, X, RotateCcw, Copy, Sun, Moon } from 'lucide-react';

// function Agent() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [isStreaming, setIsStreaming] = useState(false);
//   const [previousInput, setPreviousInput] = useState('');
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [copiedMessageId, setCopiedMessageId] = useState(null);
//   const messagesEndRef = useRef(null);
//   const inputRef = useRef(null);
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setIsDarkMode(savedTheme === 'dark');
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
//   }, [isDarkMode]);

//   const toggleTheme = () => setIsDarkMode(prev => !prev);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const copyToClipboard = async (messageId, text) => {
//     try {
//       await navigator.clipboard.writeText(text);
//       setCopiedMessageId(messageId);
//       setTimeout(() => setCopiedMessageId(null), 2000);
//     } catch (err) {
//       console.error('Failed to copy text:', err);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!input.trim() || isStreaming) return;

//     const userMessage = input.trim();
//     setInput('');
//     setPreviousInput(userMessage);
//     setMessages(prev => [...prev, { id: crypto.randomUUID(), content: userMessage, type: 'user' }]);
//     setIsStreaming(true);

//     try {
//       const response = await axios.post("http://localhost:3001/chat", { message: userMessage });
//       setMessages(prev => [...prev, { id: crypto.randomUUID(), content: response.data.response, type: 'ai' }]);
//     } catch (error) {
//       console.error('Error sending message:', error);
//     } finally {
//       setIsStreaming(false);
//     }
//   };

//   return (
//     <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
//       <header className={`flex justify-between items-center px-6 py-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}> 
//         <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>What can I help with?</h1>
//         <button onClick={toggleTheme} className="p-2 rounded-full">
//           {isDarkMode ? <Sun className="w-6 h-6 text-gray-300" /> : <Moon className="w-6 h-6 text-gray-600" />}
//         </button>
//       </header>

//       <div ref={chatContainerRef} className="flex-1 overflow-y-auto px-4 py-6">
//         {messages.map((message) => (
//           <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
//             <div className={`max-w-[80%] px-4 py-3 rounded-lg ${message.type === 'user' ? 'bg-blue-600 text-white' : isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-900'}`}>
//               <p className="whitespace-pre-wrap break-words">{message.content}</p>
//             </div>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>

//       <form onSubmit={handleSubmit} className="border-t p-4">
//         <div className="max-w-4xl mx-auto flex gap-4">
//           <textarea ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask Anything..." className="w-full px-4 py-2 rounded-lg focus:outline-none resize-none" rows={1} />
//           <button type="submit" disabled={isStreaming || !input.trim()} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//             <Send className="w-5 h-5" />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Agent;


import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Settings, Send, Square, Pencil, Check, X, RotateCcw, Copy, Sun, Moon, Loader2 } from 'lucide-react';

function Agent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [previousInput, setPreviousInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [copiedMessageId, setCopiedMessageId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const copyToClipboard = async (messageId, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isStreaming) return;

    const userMessage = input.trim();
    setInput('');
    setPreviousInput(userMessage);
    setMessages(prev => [...prev, { id: crypto.randomUUID(), content: userMessage, type: 'user' }]);
    setIsStreaming(true);

    try {
      const response = await axios.post("http://localhost:3001/chat", { message: userMessage });
      setMessages(prev => [...prev, { id: crypto.randomUUID(), content: response.data.response, type: 'ai' }]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      <header className={`flex justify-between items-center px-6 py-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}> 
        <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>What can I help with?</h1>
        <button onClick={toggleTheme} className="p-2 rounded-full">
          {isDarkMode ? <Sun className="w-6 h-6 text-gray-300" /> : <Moon className="w-6 h-6 text-gray-600" />}
        </button>
      </header>

      <div ref={chatContainerRef} className="flex-1 overflow-y-auto px-4 py-6">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] px-4 py-3 rounded-lg ${message.type === 'user' ? 'bg-blue-600 text-white' : isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-900'}`}>
              <p className="whitespace-pre-wrap break-words">{message.content}</p>
            </div>
          </div>
        ))}
        {isStreaming && (
          <div className="flex justify-start">
            <div className="max-w-[80%] px-4 py-3 rounded-lg bg-gray-700 text-gray-100 flex items-center">
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              <p>Loading...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="border-t p-4">
        <div className="max-w-4xl mx-auto flex gap-4">
          <textarea ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask Anything..." className="w-full px-4 py-2 rounded-lg focus:outline-none resize-none" rows={1} />
          <button type="submit" disabled={isStreaming || !input.trim()} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            {isStreaming ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Agent;


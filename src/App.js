import React, { useState } from 'react';
import marked from 'marked';
import ReactMarkdown from "react-markdown";
import './App.css';

export default function App() {
  const [markdown, setMarkDown] = useState('# sup');

  const handleChange = (e) => {
    setMarkDown(e.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />
      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}

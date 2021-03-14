import React, { useState } from 'react';
import marked from 'marked';
import './App.css';

export default function App() {
  const [markdown, setMarkDown] = useState('# sup');

  const handleChange = (e) => {
    setMarkDown(e.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />

      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown)}}
      />
    </div>
  );
}

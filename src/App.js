import React, { useState } from 'react';
import './App.css';
import Tabs from './components/components';

function App() {
  const [tabs, setTabs] = useState([]);
  const [displayContent, setDisplayContent] = useState("");

  const tabsArray = [
    {
      label: "Tab 1",
      content: "Tab 1 content"
    },
    {
      label: "Tab 2",
      content: "Tab 2 content"
    },
    {
      label: "Tab 3",
      content: "Tab 3 content"
    }
  ]


  return (
    <div className="App">
      {/* {JSON.stringify(tabsArray)} */}
      <Tabs tabs = {tabsArray} setDisplayContent ={setDisplayContent}/>
      <p>
        {displayContent}
      </p>
    </div>
  );
}

export default App;

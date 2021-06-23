import React from 'react';
import ContextApi from './Component/ContextApi'
import Feed from './Component/Feed';

function App() {

  return (
    <ContextApi>
        <Feed/>
    </ContextApi >
  );
}

export default App;

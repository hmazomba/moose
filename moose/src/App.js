import React from 'react';
import TrackList from '../src/components/TrackList';

import { MusicPlayerProvider } from './components/MusicPlayerContext';

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList/>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;

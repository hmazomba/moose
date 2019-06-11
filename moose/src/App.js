import React from 'react';
import TrackList from '../src/components/TrackList';
import PlayerControls from './components/PlayerControls';

import { MusicPlayerProvider } from './components/MusicPlayerContext';

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList/>
        <PlayerControls/>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;

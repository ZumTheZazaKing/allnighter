import { Suspense, lazy, useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Context } from './Context';
import Loading from './pages/Loading';
import SmallScreen from './pages/SmallScreen';

const MainMenu = lazy(() => import('./pages/MainMenu').then(module => ({ default: module.MainMenu })));
const Introduction = lazy(() => import('./pages/Introduction').then(module => ({ default: module.Introduction })));
const Game = lazy(() => import('./pages/Game').then(module => ({ default: module.Game })));
const NightComplete = lazy(() => import('./pages/NightComplete').then(module => ({ default: module.NightComplete })));
const Note = lazy((() => import('./pages/Note').then(module => ({ default: module.Note }))));

function App() {

  const [smallScreen, setSmallScreen] = useState(false);
  const [savedGame, setSavedGame] = useState(JSON.parse(localStorage.getItem("savedGame")) || null);

  useEffect(() => {
    if(window.innerWidth < 800 || window.innerHeight < 480){
      setSmallScreen(true);
    }
  },[]);
  
  return (
    smallScreen ?
    <SmallScreen /> :
    <HashRouter>
      <div className="App">
        <Context.Provider value={{savedGame, setSavedGame}}>
          <Suspense fallback={<Loading/>}>
            <Routes>

              <Route path="/" element={<MainMenu />} />
              <Route path="/intro" element={<Introduction />} />
              <Route path="/game" element={<Game />} />
              <Route path="/nightcomplete" element={<NightComplete />} />
              <Route path="/note" element={<Note />} />

            </Routes>
          </Suspense>
        </Context.Provider>
      </div>
    </HashRouter>
  );
}

export default App;

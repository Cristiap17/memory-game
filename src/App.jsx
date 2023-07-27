import './App.css'
import ConfigurationScreen from './components/configScreen/ConfigurationScreen'
import GameScreen from './components/gameScreen/GameScreen'
import LockOrientationScreen from './components/lockOrientationScreen/lockOrientationScreen'
import { MemoryAppProvider } from './context/MemoryAppProvider'

function App() {

  return (
    <MemoryAppProvider>
      <ConfigurationScreen/>
      <GameScreen/>
      <LockOrientationScreen/>
    </MemoryAppProvider>
  )
}

export default App

import './App.css'
import ConfigurationScreen from './components/configScreen/ConfigurationScreen'
import GameScreen from './components/gameScreen/GameScreen'
import { MemoryAppProvider } from './context/MemoryAppProvider'

function App() {

  return (
    <MemoryAppProvider>
      <ConfigurationScreen/>
      <GameScreen/>
    </MemoryAppProvider>
  )
}

export default App

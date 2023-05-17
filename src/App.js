import profilepic from '../img/BG.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={profilepic} alt="BG" className="profilepic" />
                <ReactTypingEffect text={['I am Kantida', 'I am a Web Developer']} speed={50} eraseDelay={100} className="typingeffect" />
                <Social />

        
      </header>
    </div>
    
  );
}

export default App;

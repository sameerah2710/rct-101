import logo from './logo.svg';
import Mobile from './components/mobile';
import './App.css';

function App() {
  let info = [
    {headding:"Mobile Operating System",
    u1:"Android",u2:"Blackbery",
    u3:"iPhone",u4:"Windows Phone"},
    {headding:"Mobile Manufactorers",
    u1:"Samsung",u2:"HTC",
    u3:"Micromax",u4:"Apple"}
  ];

  return (
    <div className="App">
      {
        info.map((user) =>(
          <div key={user.headding}>
            <Mobile {...user} />
            </div>
        ))
      }
      
    </div>
  );
}

export default App;

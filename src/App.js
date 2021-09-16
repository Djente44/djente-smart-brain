
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Rank from './components/Rank/Rank.js'
import Particles from 'react-particles-js';
import './App.css';


// class App extends Component{
  
//     render(){
//         return (
//             
//         );
//     };

// }

function App() {
  return (
    <div className="App">
      <Particles />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
         {/*{
         <FaceRecognition /}*/}
    </div>
  );
}

export default App;


import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,Actions,Romance,Horror,Documentry,Comedy} from './Constants/Urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost  url={Actions} title='Action' isSmall  />
      <RowPost  url={Romance} title='Romance' isSmall  />
      <RowPost  url={Horror} title='Horror' isSmall  />
      <RowPost  url={Comedy} title='Comedy' isSmall  />
      <RowPost  url={Documentry} title='Documentry' isSmall  />
      
    </div>
  );
}

export default App;

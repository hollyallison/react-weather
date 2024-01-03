import './App.css';
import Weather from './weather.js';

export default function App() {
  return ( <div className="App"> 
  <div className="container">

  < Weather  defaultCity="Glasgow"/>
 <footer> 
  This project was coded by Holly Allison and is 
  <a rel='noreferrer' href="https://github.com/hollyallison/react-weather" target="_blank"> open-sourced </a>on Github
  </footer>

</div>
</div>  );
}

 

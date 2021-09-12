import { BrowserRouter as Router, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Navbar from './components/Navbar'
import './App.css'
import About from './components/About';
import Home from './pages/Home';
import News from './pages/News';

function App() {

  return (
		<Router>
			<div className="App">
        		<Navbar />
				<Route exact path="/">
					<Banner />
         			 <Home /> 
				</Route>
				<Route path="/about">
         			 <About />
				</Route>
				<Route path="/news">
					<News />
				</Route>
			</div> 
		</Router>
	)
}

export default App;

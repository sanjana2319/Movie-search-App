import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header from './component/Header/Header';
// import SimpleBottomNavigation from './component/MainNav';
import Search from './Pages/Search/Search';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>  
    <div className = "app">
    <Container>
    <Switch>
      <Route path = "/" component = {Search}/>
      <Route path = "NotFound" component = {NotFound}/>
    </Switch>
    </Container>  
    </div>
    </BrowserRouter>
    </>
    
  );
}

export default App;

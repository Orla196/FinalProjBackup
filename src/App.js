import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './components/CreateSong';
import Read from './components/read';
import Edit from './components/edit';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">MUSIC LOCKER</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">Add Song</Nav.Link>
            <Nav.Link href="/read">View Songs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='/read' element={<Read></Read>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
      </Routes>
      {/* <Header></Header>
      <Content></Content>
      <Footer /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;

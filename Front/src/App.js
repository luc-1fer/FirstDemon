import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import About from './components/Routing/About.jsx'
import Detail from './components/Routing/Detail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Fav/Favorites.jsx'


function App() {
  
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = 'hola@gmail.com';
  const password = '123456'
  
  const navigate = useNavigate ();
  const location = useLocation();
  
  function login(userData){
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }
  
  useEffect(() => {
    !access && navigate('/');
  },[access]);
  
  const logout = ()=> setAccess (false);
  
  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/onSearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido, prueba otro ID.");
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });

  }

  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== id));
  }

  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }


  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== '/' 
      && <Nav onSearch={onSearch} random={random} logout={logout} />}
      <Routes>
        <Route path='/favorites' element={<Favorites />} />
        <Route exact path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/' element={<Form login= {login}/>} />
        <Route exact path='/detail/:detailId' element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App

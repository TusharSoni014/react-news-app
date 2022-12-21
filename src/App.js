import React, {useState} from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer';

function App() {
  const [query, setQuery] = useState('latest news')

  function handleQuery(text){
    setQuery(text)
    console.log(query)
  }
  return (
    <>
    <Header handleQuery={handleQuery}/>
    <Navbar handleQuery={handleQuery}/>
    <NewsContainer query={query}/>
    </>
  );
}

export default App;

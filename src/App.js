import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {News} from './Mycomponents/News';
import {Footer} from './Mycomponents/Footer';

function App() {

  const [data , setData] = useState({});
  useEffect(() => {
    axios.get("http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f550c60e9d9349e5a8c33b16b65c4bfd").then(response => {

    setData(response.data)

    //console.log(response.data);
      
    })
  }, []);

  return (
    <>
    {/* <div className="App">
   { data.articles.map((e,i) =>
    { 
     return(<p>{e.author}</p>)  
     
    })  }

    </div> */}
   
    <News value={data.articles}/>
    <Footer/>
    
    
    </> 
  );
}

export default App;


//

// /v2/top-headlines
//f550c60e9d9349e5a8c33b16b65c4bfd

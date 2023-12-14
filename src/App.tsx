import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './LoginForm'
import React from 'react';
import axios from 'axios';
//import { useTab } from '@mui/base';
import {collection, addDoc} from 'firebase/firestore';
import { firestore } from '../firebaseConfig';
import Etusivu from './components/Etusivu';


function App() {

  React.useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://pilvipalvelut-matomo.rahtiapp.fi/js/container_PPILrkef_dev_1989c35badc98de3f916d3c9.js'; s.parentNode.insertBefore(g,s);


const fetchData = async () =>{
  try {
    const response = await axios.get('https://dummyjson.com/products');
    if (response.status === 200){
      const data = await response.data
      console.log(data);
      setProducts(data.products)
      }
    }catch (error){
      console.error('Virhe: ', error);
    }
};

fetchData();
}, []);

const [products, setProducts] =useState<[]>([])

const handleAddData = async () =>  {
  try {
    //uusi tietue firestoreen
    for (const product of products) {
      const docRef = await addDoc(collection(firestore, 'Product'), product);
      console.log('Uusi jsoni lisätty ID = ', docRef.id);
    }
  }catch(error){
    console.error('Virhe Firestoreen tallennuksessa: ', error);
  }};
  



    const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Heli teki</h1>
  
  {/** 
   <LoginForm/>
*/}

<LoginForm/>
<Etusivu/>

      <div>
        <h1>Tuotteet</h1>

        <table>
          <tbody>
            {products.map(product => (
              <tr align= "left" key={product.id}>
                <td>{product.category} </td>
                <td>{product.title} </td>
                <td>{product.description} </td>
                <td>{product.price} </td>                
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <p>
        <button onClick={handleAddData}>Lisää data Firestoreen</button>
      </p>

      {/*
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> 
      */}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

/*<!-- Matomo -->
<script>
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" *//*
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//pilvipalvelut-matomo.rahtiapp.fi/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '6']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Matomo Code -->

<!-- Matomo Tag Manager -->
<script>
  var _mtm = window._mtm = window._mtm || [];
  _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
  (function() {
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://pilvipalvelut-matomo.rahtiapp.fi/js/container_PPILrkef_dev_1989c35badc98de3f916d3c9.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Matomo Tag Manager -->

*/


export default App;




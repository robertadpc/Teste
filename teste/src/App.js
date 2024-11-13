import { FiSearch } from 'react-icons/fi'
import './style.css'
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>   

      <div className="containerInput">
        <input
        type="text"
        placeholder = "Digite seu CEP..."/>
        <button className="buttonSearch"></button>
        <FiSearch size={25} color='#FFF'/>
      </div>


     <main className='main'>
      <h2>CEP: 77777777</h2>

      <span>Rua teste</span>
      <span>Complemento: Casa</span>
      <span>Ceara</span>
      <span>Cricuma - SC</span>

     </main>

    </div>
  );
}
export default App;

import './App.css';
import Forminput from './Forminput';
import ForminputVariable from './ForminputVariable';

function App() {
  return (
    <div className="App">
      <Forminput 
        label = 'Prénom  '
        labelColor = 'gray'
        labelBackColor = '#ffcccc'
        labelBorder = '2px solid black'
        placeholder = 'Votre prénom'
      />
      <Forminput 
        label = 'Nom   '
        labelColor = 'red'
        labelBackColor = '#ffcccc'
        labelBorder = '2px solid blue'
        placeholder = 'Votre nom'
      />
      <ForminputVariable 
        label = 'Adresse   '
        labelColor = 'Blue'
        labelBackColor = '#ffcccc'
        labelBorder = '2px solid red'
        placeholder = 'Votre adresse'
      />
    </div>
  );
}

export default App;

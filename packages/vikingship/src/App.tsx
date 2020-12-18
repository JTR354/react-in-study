import Button from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button btnType='primary'>primary</Button>
      <Button btnType='default'>default</Button>
      <Button btnType='danger'>danger</Button>
      <Button btnType='link'>link</Button>
    </div>
  );
}

export default App;

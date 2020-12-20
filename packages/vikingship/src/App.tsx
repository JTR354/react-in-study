import Button from './components/Button/button'
import Alert from './components/Alert/alert'
import { useCallback, useState } from 'react';

function App() {
  const [showAlert, setShowAlert] = useState(false)
  const toggle = useCallback(() => {
    setShowAlert(bool => !bool)
  }, [])
  return (
    <div className="App">
      <Button btnType='primary' onClick={() => {
        toggle()
      }}>primary</Button>
      <Button btnType='default'>default</Button>
      <Button btnType='danger'>danger</Button>
      <Button btnType='link'>link</Button>
      <hr/>
      <Alert title='提示标题呕' show={showAlert} type='default' onClose={toggle} content='this is a default alert'></Alert>
      {/* <Alert type='success' content='this is success alert'></Alert> */}
      {/* <Alert type='danger' content='this is a danger alert'></Alert> */}
      {/* <Alert type='warning' content='this is a warning alert!'></Alert> */}
    </div>
  );
}

export default App;

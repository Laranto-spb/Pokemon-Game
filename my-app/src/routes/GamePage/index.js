import { useHistory } from 'react-router-dom';

const GamePage = () => {
const history = useHistory();
  const handlerClickButton = () => {
    history.push('/');
  }
  return (
    <>
      <h1>This is Game Page!</h1>
      <button onClick={handlerClickButton}>Back to Home</button>
    </>
  )
}

export default GamePage;
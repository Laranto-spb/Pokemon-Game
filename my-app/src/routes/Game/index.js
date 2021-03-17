const GamePage = ({ onChangePage }) => {

  const handlerClickButton = () => {
    onChangePage && onChangePage('app');
  }
  return (
    <div>
      <h1>This is Game Page!</h1>
      <button onClick={handlerClickButton}>Back to Home</button>
    </div>
  )
}

export default GamePage;
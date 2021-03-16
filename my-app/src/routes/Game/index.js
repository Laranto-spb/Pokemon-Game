const GamePage = ({onChangePage}) => {

  const handlerClickButton = (page) => {
    onChangePage && onChangePage(page);
  }
  return (
    <div>
      <h1>This is Game Page!</h1>
      <button onClick={handlerClickButton}>Back to Home</button>
    </div>
  )
}

export default GamePage;
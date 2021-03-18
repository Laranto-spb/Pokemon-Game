import MenuHeader from "../../components/MenuHeader";

// import MenuHeader from '../../components/MenuHeader'
const GamePage = ({ onChangePage }) => {

  const handlerClickButton = () => {
    onChangePage && onChangePage('app');
  }
  return (
    <>
      <MenuHeader bgActive={true}/>
      <h1>This is Game Page!</h1>
      <button onClick={handlerClickButton}>Back to Home</button>
    </>
  )
}

export default GamePage;
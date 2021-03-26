import s from './style.module.css';
import {useContext} from 'react';
import {PokemonContext} from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";
import {useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
import PlayerBoard from "./component/PlayerBoard";


const counterWin = (board, player1, player2) => {
    let player1Count = player1.length;
    let player2Count = player2.length;

    board.forEach(item => {
            if (item.card.possession === 'red') {
                player1Count++
            } else if (item.card.possession === 'blue') {
                player2Count++
            }
        }
    )

    return [player1Count, player2Count];

}

const BoardPage = () => {

    const pokemonsContext = useContext(PokemonContext);
    const pokemons = pokemonsContext.pokemons;


    const history = useHistory({});
    const [board, setBoard] = useState([]);
    const [player1, setPlayer1] = useState(() => {
        return pokemons.map(item => ({
            ...item,
            possession: 'red',
        }))
    })
    const [player2, setPlayer2] = useState([]);
    const [initialPlayer2, setInitialPlayer2] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null)
    const [steps, setSteps] = useState(0);

    const handlerClickBoardPlate = async (position) => {
        if (choiceCard) {
            const params = {
                position,
                card: choiceCard,
                board,
            }
            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const request = await res.json();


            if (choiceCard.player === 1) {
                setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id))
            }
            if (choiceCard.player === 2) {
                setPlayer2(prevState => prevState.filter(item => item.id !== choiceCard.id))
            }

            setBoard(request.data);
            setSteps(prevState => {
                    const count = prevState + 1;
                    return count;
                }
            )
        }
    }

    useEffect(() => {
        if (steps === 9) {
            const [count1, count2] = counterWin(board, player1, player2);
            if (count1 > count2) {
                alert('WIN');
                history.replace('/game/finish');
            } else if (count1 < count2) {
                alert('LOSE');
                history.replace('/game/');
            } else {
                alert('DRAW');
                history.replace('/game/');
            }

        }
    }, [steps])

    useEffect(async () => {
        const boardResponce = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponce.json();
        setBoard(boardRequest.data);

        const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const player2Request = await player2Response.json();
        setInitialPlayer2(player2Request.data);

        setPlayer2(() => {
            return player2Request.data.map(item => ({
                ...item,
                possession: 'blue',
            }))
        });

        pokemonsContext.onFinalPokemons(pokemons,initialPlayer2);


    }, [])


    if(Object.keys(pokemons).length === 0) {
        history.replace('/game')
    }


    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard
                    player={1}
                    cards={player1}
                    onClickCard={(card) => setChoiceCard(card)}/>
            </div>
            <div className={s.board}>
                {
                    board.map((item) => (
                        <div key={item.position}
                             className={s.boardPlate}
                             onClick={() => {
                                 !item.card && handlerClickBoardPlate(item.position);
                             }}>
                            {
                                item.card &&
                                <PokemonCard {...item.card} minimize isActive/>
                            }
                        </div>
                    ))
                }
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard
                    player={2}
                    cards={player2}
                    onClickCard={(card) => setChoiceCard(card)}/>
            </div>

        </div>
    );
};

export default BoardPage;

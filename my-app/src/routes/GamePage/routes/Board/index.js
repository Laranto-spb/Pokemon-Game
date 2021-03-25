import s from './style.module.css';
import {useContext} from 'react';
import {PokemonContext} from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";
import {useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
import PlayerBoard from "./component/PlayerBoard";

const BoardPage = () => {

    const pokemonsContext = useContext(PokemonContext);
    const pokemons = pokemonsContext.pokemons;

    const history = useHistory({});
    const [board, setBoard] = useState([]);
    const [player2, setPlayer2] = useState([]);

    const handlerClickBoardPlate = (position) => {
        console.log(position);
    }

    useEffect(async () => {
        const boardResponce = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponce.json();
        setBoard(boardRequest.data);

        const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const player2Request = await player2Response.json();
        setPlayer2(player2Request.data);


    }, [])

    // if(Object.keys(pokemons).length === 0) {
    //     history.replace('/game')
    // }
    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard cards={pokemons}/>
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
                                item.card && <PokemonCard {...item} minimize/>
                            }
                        </div>
                    ))
                }
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard cards={player2}/>
            </div>

        </div>
    );
};

export default BoardPage;

import {useHistory} from 'react-router-dom';
import PokemonCard from "../../components/PokemonCard";
import {useState, useEffect} from 'react';

import database from "../../service/firebase";
import s from './style.module.css';

const GamePage = () => {
    const history = useHistory();
    const handlerClickButton = () => {
        history.push('/');
    }

    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        })
    })

    const handlerClicker = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = true;
                };

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });

    };

    return (
        <>
            <h1>This is Game Page!</h1>
            <button onClick={handlerClickButton}>Back to Home</button>
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, item]) =>
                        <PokemonCard
                            key={key}
                            pokemonKey={key}
                            name={item.name}
                            img={item.img}
                            id={item.id}
                            type={item.type}
                            values={item.values}
                            onClickCard={handlerClicker}
                            isActive={item.active}
                        />
                    )
                }
            </div>
        </>
    )
}

export default GamePage;
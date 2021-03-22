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
        database.ref('pokemons').once('value').then((snapshot) => {
            setPokemons(snapshot.val());
        });
    });

    const handlerClicker = (id, key) => {
        const pokemonKey = database.ref('pokemons/' + key);
        const stateActivePokemon = pokemons[key].active;
        pokemonKey.update({active: !stateActivePokemon});
    };

    const handlerAddButton = () => {
        const newPokemon = Object.entries(pokemons)[1][1];
        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newKey).set(newPokemon);
    }

    return (
        <>
            <h1 className={s.title}>This is Game Page!</h1>
            <div className={s.buttons}>
                <button className={s.home_btn} onClick={handlerClickButton}>Back to Home</button>
                <button className={s.add_btn} onClick={handlerAddButton}>Add Pokemon</button>
            </div>

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

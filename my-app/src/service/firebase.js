import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAyPwKmud9lQBYWWb5iQyFbP4JQLjXux40",
    authDomain: "pokemon-game-1a1c9.firebaseapp.com",
    databaseURL: "https://pokemon-game-1a1c9-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-1a1c9",
    storageBucket: "pokemon-game-1a1c9.appspot.com",
    messagingSenderId: "99861408231",
    appId: "1:99861408231:web:7f51290c865c01e87d7542"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }


    offPokemonSocket  = () => {
        this.database.ref('pokemons').off();
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then((snapshot) => {
            return snapshot.val();
        })
    }

    postPokemon = (key, isActive) => {
        this.database.ref(`pokemons/${key}`).update(isActive);
    }
}

export default Firebase;

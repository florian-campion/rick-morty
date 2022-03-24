import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PersoContent = (props) => {
    let {name, image, gender, status, location} = props.perso;
    return (
        <div>
            <img src={image}/>
            <h1>{name}</h1>
            <table>
                <tr>
                    <td>Genre : </td>
                    <td>{gender}</td>
                </tr>
                <tr>
                    <td>Dernière position : </td>
                    <td>{location.name}</td>
                </tr>
                <tr>
                    <td>Situation : </td>
                    <td>{status}</td>
                </tr>
            </table>
        </div>
    )
}

const Personnage = () => {

    let { id } = useParams();
    let [perso, setPerso] = useState(false);
    useEffect (
        () => {
            fetch('https://rickandmortyapi.com/api/character/'+id)
                .then(response => response.json())
                .then(perso => {
                    setPerso(perso);
                })
        }, []
    )

    return (
        <div>
            {
                perso ?
                    <PersoContent perso={perso}/>
                : 
                    <div>loading...</div>
            }
        </div>
    )
}

export default Personnage;
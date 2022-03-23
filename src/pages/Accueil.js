import { Fragment, useEffect, useState } from "react";
import Grid from "../components/Grid";
import Perso from "../components/Perso";


const Accueil = () => {

    let [datas, setDatas] = useState([]);

    useEffect(
        () => {
            fetch('https://rickandmortyapi.com/api/character')
                .then(response => response.json())
                .then(APIresult => {
                    setDatas(APIresult.results);
                })
        }, []
    )

    return (
        <Fragment>
            <h1>Accueil</h1>
            <Grid>
                {
                    !datas.length ?
                        <p>Loading...</p>
                    :
                        datas.map(item => <Perso key={item.id} datas={item} />)
                }
            </Grid>
        </Fragment>
    )
}

export default Accueil;
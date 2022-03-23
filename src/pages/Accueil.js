import { Fragment, useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import Grid from "../components/Grid";
import Perso from "../components/Perso";


const Accueil = () => {

    let [datas, setDatas] = useState([]);
    let url = useParams();
    let paginate = url.num ? +(url.num) : 1;
    let [maxPage, setMaxPage] = useState(1);

    useEffect(
        () => {
            console.log(paginate);
            fetch('https://rickandmortyapi.com/api/character?page='+paginate)
                .then(response => response.json())
                .then(APIresult => {
                    setDatas(APIresult.results);
                    setMaxPage(APIresult.info.pages);
                })
        }, [paginate]
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
            <nav>
                {
                    (paginate > 1) &&
                        <Link to={'/'+(paginate - 1)}>Page précédente</Link>
                }
                <p>Page : {paginate} / {maxPage}</p>
                {
                    (paginate != maxPage) &&
                        <Link to={'/'+(paginate + 1)}>Page suivante</Link>
                }
            </nav>
        </Fragment>
    )
}

export default Accueil;
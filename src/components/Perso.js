const Perso = (props) => {
    let perso = props.datas
    return (
        <article>
            <img src={perso.image} />
            <div>
                <h2>{perso.name}</h2>
                <small>{perso.gender}</small>
            </div>
        </article>
    )
}

export default Perso;
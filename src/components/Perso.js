const Perso = (props) => {
    let perso = props.datas
    return (
        <article>
            <img src={perso.image} />
            <h2>{perso.name}</h2>
            <p>{perso.gender}</p>
        </article>
    )
}

export default Perso;
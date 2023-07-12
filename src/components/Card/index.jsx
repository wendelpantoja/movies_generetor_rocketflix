import './styles.css'

export function Card(props) {
    return (
        <div className="card_movie">
            <div className="img_movie">
                <img src={props.photo} alt="" />
            </div>
            <div className="title_descricao">
                <h2>{props.title}</h2>
                <p>{props.overview}</p>
            </div>
        </div>
    )
}
import './styles.css'

export function Message(props) {
    return (
        <div className="card_movie">
            <div className="img_movie">
                <img src={props.photo} alt="" />
            </div>
            <div className="message">
                <p>{props.message}</p>
            </div>
        </div>
    )
}
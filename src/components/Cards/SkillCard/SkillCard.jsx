import '../Cards.css'
import './SkillCard.css'

const SkillCard = ( {name, image, level} ) => {
    return (
        <div className="card skill-card">
            <img src={image} alt={name}></img>
            <div>
                <h2>{name}</h2>
                <div className="progress-wrapper">
                    <progress value={level} max="100"></progress>
                    <p>{`${level}%`}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillCard

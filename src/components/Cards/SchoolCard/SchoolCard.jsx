import '../Cards.css'
import { LocationMarkerIcon } from '@heroicons/react/solid'

const SchoolCard = ( {name, place, place_link, start_year, final_year, grade, max_grade} ) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <a href={place_link} target="_blank" alt={place} rel="noreferrer">
                <LocationMarkerIcon className="place-icon" />
                {place}
            </a>

            <p>Years: </p>
            <p className="title-p">{`${start_year}-${final_year}`}</p>
            <br />
            <p>Final grade: </p>
            <p className="title-p">{grade!=="" ? `${grade}/${max_grade}` : "N/A"}</p>  

        </div>
    )
}

export default SchoolCard

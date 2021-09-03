import { useState } from 'react'

import './SkillContainer.css'
import SkillCard from '../Cards/SkillCard/SkillCard'

import { ArrowCircleDownIcon } from '@heroicons/react/outline'

const SkillContainer = ( {category, skills} ) => {
    const [areCardsVisible, setAreCardsVisible] = useState(false);
    return (
        <div className="resume-card_container">
            {
                skills.length>0 ?
                <>
                    <header className="mobile-header">
                        <p>{category}</p>
                        <button onClick={()=>setAreCardsVisible(!areCardsVisible)}>
                            <ArrowCircleDownIcon className={`arrow-icon ${areCardsVisible ? "arrow-icon-reverse" : ""}`} />
                        </button>
                    </header>
                    <div className={`resume-wrap_container ${!areCardsVisible ? "mobile-cards-closed" : ""}`}>
                    {
                        skills.map(skill => <SkillCard key={skill.id} name={skill.name} image={skill.image} level={skill.level} />)
                    }
                    </div>
                </>
                : ""
            }
        </div>
    )
}

export default SkillContainer
//<SkillCard key={skill.id} name={skill.name} image={skill.image} level={skill.level} />
//.filter(skill => skill.type==={category})
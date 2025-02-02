import natureImage from "./assets/download.jpg"
import PropTypes from 'prop-types';

import "./styles/cards.css"

function CardComponent({name, description}){
    return (
        <div className="CardBox">
            {/* <div> */}
                {/* Photo and name box */}
                <div id="CardBox2">
                    <div id="ProfileImageBox">
                        <img src={natureImage} alt="My Profile" id="ProfileImage"/>
                    </div>
                    <div id="nameBox">
                        {name}
                    </div>
                </div>

                <div id="SeperateLine"></div>

                {/* Description box */}
                <div className="DescriptionBox">
                    <div>
                        {/* I am a passoniate web developer */}
                        {description}
                    </div>
                </div>
            </div>
        // </div>
    )
}

CardComponent.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default CardComponent;
import React from 'react'

function Card(props) {

    console.log(props)
    return (
        <div className="cards">
            <div className="card">
                <img src="" alt="dark photo" />
                <div className="card_info">
                    <span className="card_category">A Nefilix Original series</span>
                    <h3 className="card_title">Dark</h3>
                    <a href="" target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default Card;
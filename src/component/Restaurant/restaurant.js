import React from 'react'

export default function restaurant(props) {
    return (
        <article>
            <image src="../../images/restaurant/a-la-française.jpg"/>
            <footer>
                <div>
                    <h2>{this.props.name}</h2>
                    <h3>{this.props.city}</h3>
                </div>
                <div alt="like-icon">
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </footer>
        </article>
    )
}

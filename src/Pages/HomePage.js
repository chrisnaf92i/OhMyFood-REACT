import React, { Fragment } from 'react'
import restaurant from '../component/Restaurant/restaurant'
import Logo from "../images/logo/ohmyfood@2x.svg"

export default function HomePage() {
    return (
        <Fragment>
            <article>
                <header>
                    <h1>
                        <i class="fas fa-map-marker-alt"></i>
                        Paris, Belleville
                    </h1>
                </header>

                <h2>
                    Réservez le menu qui vous convient
                </h2>

                <p>
                    Découvrez des restaurants d'exception, séléctionnés par nos soins.
                </p>

                <button>
                    Explorer nos restaurations
                </button>
            </article>

            <article>
                <h1>
                    Fonctionnement
                </h1>

                <div>
                    <h2>
                        <span>1</span>
                        <i class="fas fa-mobile-alt"></i>
                        Choisissez un restaurant    
                    </h2>
                    <h2>
                        <span>1</span>
                        <i class="fas fa-list-ul"></i>
                        Choisissez un restaurant    
                    </h2>
                    <h2>
                        <span>1</span>
                        <i class="fas fa-store"></i>
                        Choisissez un restaurant    
                    </h2>
                </div>
            </article>

            <section>
                <h1>
                    Restaurants
                </h1>

                <restaurant/>
                <restaurant/>
                <restaurant/>
            </section>

            <footer>
                <img src={Logo} alt="Logo Oh My Food"/>
                <a href="/proposer-restaurant"> <i class="fas fa-utensils"></i> Proposer un restaurant </a>
                <a href="/devenir-partenaire"> <i class="fas fa-hands-helping"></i> Devenir partenaire </a>
                <a href="/mention-légale"> Mention légales </a>
                <a href="/contact"> Contact </a>
            </footer>
        </Fragment>
    )
}

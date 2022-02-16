export default function About() {
    return (
        <>
            <div className="about-us">
                <div className="container">
                    <div className="img-wrapper">
                        <img src='./images/team-photo.jpg' alt="time eita arquitura"></img>
                    </div>
                    <div className="conteudo">
                        <h3>Quem somos</h3>
                        <p>Lorem i et dolore magna aliqucitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button><i className="fab fa-youtube"></i>Conheça nosso canal</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .about-us {
                    padding: 3rem 2rem;
                    background: var(--clr-bg-light);
                }

                .container {
                    max-width: 1000px;
                    min-width: 100px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    gap: 2em;
                }
                @media (max-width: 800px) {
                    .container {
                        flex-direction: column-reverse;
                    }
                } 
                .img-wrapper {
                    flex: 50%
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 2px;
                    box-shadow: var(--bs-dark);
                    order: 2;
                }
                .conteudo {
                    flex: 50%;
                    max-width: 500px;
                    height: 100%;
                    max-height: fit-content;
                    display: flex;
                    flex-direction: column;
                    gap: 1em;
                    padding: 2em;
                    order: 3;
                }
                /* @media (max-width: 701px) {
                    .conteudo {
                        order: 1;
                    }
                } */
                h3 {
                    position: relative;
                    width: fit-content;
                }
                h3::after {
                    content: '';
                    width: 2.8em;
                    height: .14em;
                    position: absolute;
                    top: 1.7em;
                    left: 0;
                    margin-left: 50%;
                    transform: translatex(-50%);
                    background: var(--clr-primary);
                    opacity: .45;
                }
                button {
                    padding: .2em 1em;
                    display: flex;
                    align-items: center;
                    width: fit-content;
                    font-size: clamp(.8em, 1vw, 2em);
                    border: 0;
                    background-color: var(--clr-primary-light);
                    border-radius: 3px;
                    margin-top: auto;
                }
                p {
                    font-size: clamp(.8em, 2vw, 1.1em); 
                }
                i {
                    margin-top: 2px;
                    margin-right: 10px;
                    color: #7E7E7E;
                    font-size: clamp(1.5em, 3vw, 2em);
                }
            `}</style>
        </>
    )
}
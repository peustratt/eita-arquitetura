export default function About() {
    return (
        <>
            <div className="about-us">
                <div className="container">
                    <img src='./images/time.png'></img>
                    <div className="conteudo">
                        <h3>Quem somos</h3>
                        <p>Lorem i et dolore magna aliqucitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <button><i className="fab fa-youtube"></i>Conheça nosso canal</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .about-us {
                    padding: 3rem 2rem;
                    background: #f9f9f9;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    align-items: center;
                    gap: 2em;
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 10px;
                }
                .conteudo {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5em;
                    justify-content: space-between;
                    padding: 0 1.5em;
                }
                h3 {
                    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
                }
                p {
                    font-size: clamp(1em, 2vw, 3.5em)
                }
                button {
                    padding: .1em .5em;
                    display: flex;
                    align-items: center;
                    width: fit-content;
                    font-size: clamp(1rem, 1.5vw, 2rem);
                    border: 0;
                    background-color: orange;
                    border-radius: 3px;
                }
                i {
                    margin-right: 10px;
                    color: gray;
                    font-size: clamp(1em, 3vw, 3.5em)
                }
            `}</style>
        </>
    )
}
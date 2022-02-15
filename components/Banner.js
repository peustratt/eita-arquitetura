export default function Banner() {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <h1>O escritório de arquitetura mais desenrolado em linha reta de Pernambuco!</h1>
                    <div className="img-wrapper">
                        <img src="./images/cacto.png" alt="cacto minimalista"/>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .banner {
                    background: var(--clr-primary-light);
                    height: 460px;
                    display: flex;
                    align-items: center;
                    padding: 1em 2em;
                    margin-top: 55px;
                    overflow: hidden;
                }
                .container {
                    max-width: 1000px;
                    width: 100%;
                    margin: 0 auto;
                    display: flex;
                    gap: 1rem;
                }
                h1 {
                    width: 54%;
                    min-width: 200px;
                    font-size: clamp(1.4rem, 3vw, 3rem);
                    line-height: 1.3;
                    align-self: center;
                    text-transform: uppercase;
                }
                .img-wrapper {
                    overflow: hidden;
                }
                img {
                    margin-left: auto;
                }
            `}</style>
        </>
    )
}
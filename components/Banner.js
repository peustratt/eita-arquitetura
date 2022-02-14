export default function Banner() {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <h1>O escritório de arquitetura mais desenrolado em linha reta de Pernambuco!</h1>
                    <img src="./images/cacto.png" alt="cacto minimalista"></img>
                </div>
            </div>

            <style jsx>{`
                .banner {
                    /* background-image: urL("./images/banner.jpg"); */
                    background: var(--clr-primary-light);
                    height: fit-content;
                    min-height: 450px;
                    background-size: cover;
                    display: flex;
                    align-items: center;
                    padding: 1em 2em;
                    /* padding: 2em calc((100vw - 1200px)/2); */
                    margin-top: 55px;
                }
                .container {
                    max-width: 1200px;
                    width: 100%;
                    margin: 0 auto;
                    display: flex;
                    overflow: hidden;
                    gap: 1rem;
                }
                h1 {
                    width: 52%;
                    min-width: 300px;
                    font-size: clamp(1.6rem, 3.2vw, 4rem);
                    line-height: 1.3;
                    align-self: center;
                    text-transform: uppercase;
                }
                img {
                    margin-left: auto;
                }
            `}</style>
        </>
    )
}
export default function Footer() {
    return(
        <>
            <footer>
                <div className="container">
                    <div className="left">
                        <h4>Enfereço:</h4>
                        <div className="adress">
                            <p>Rua 123 de oliveira 4, n° 5162</p>
                            <p>bloco C. apt. 1802 cobertura</p>
                            <p>Poço da panela - recife - PE</p>
                        </div>
                        <h4>Siga-nos nas redes sociais</h4>
                        <div className="redes-sociais"></div>
                    </div>

                    <div className="right">
                        <h4>Entre em contato conosco: </h4>
                        <div className="contato">
                            <div className="telefones">
                                <p className="telefones__titulo"></p>
                                <p>+55 (81) 9 9900-4888</p>
                                <p>+55 (81) 9 9900-4888</p>
                                <p>+55 (81) 9 9900-4888</p>
                            </div>
                            <div className="E-mail:">
                                <p className="email__titulo"></p>
                                <p>eitaarquitetos@gmail.com</p>
                                <p>eitaarquitetos@eitaarquitetos.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <style jsx>{`
                footer {
                    background: var(--clr-bg-dark);
                    color: #fff;
                    margin-top: auto;
                    padding: 2em;
                }

                .container {
                    gap: 1em;
                    display: flex;
                    margin: 0 auto;
                    max-width: 1200px;
                    justify-content: center;
                }
                .contato {
                    display: grid;   
                    gap: 2em;
                }
            `}</style>
        </>
    )
}
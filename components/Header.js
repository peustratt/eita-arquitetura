import Link from 'next/link' 

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <img src="./images/logo.png" className="logo"></img>
                    <ul className="links">
                        <a>Início</a>
                        <a>Quem somos</a>
                        <a>Portfólio</a>
                        <a className='orcamento'>Faça um orçamento</a>
                    </ul>
                    <button className='nav-toggle'></button>
                </nav>
            </header>
            
            <style jsx>{`
                header {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 5;
                    height: 55px;
                    background-color: var(--clr-primary);
                    padding: 0 2em;
                }
                nav {
                    margin: 0 auto;
                    max-width: 1200px;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                img {
                    width: 80px;
                }
                ul {
                    display: flex;
                    gap: 1em;
                    align-items: center;
                }
                .orcamento {
                    font-size: 20px;
                }
                .nav-toggle {
                    display: none;
                    height: 100%;
                    background: black;
                    width: 50px;
                }

                @media (max-width: 700px) {
                    .nav-toggle {
                        display: block;
                    }
                    ul {
                        display: none;
                    }
                }
            `}</style>
        </>
    )
}

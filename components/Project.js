import Link from 'next/link';
import Image from 'next/image';

export default function Project(props) {
    const isReverse = props.isReverse ? 3 : 1;
    const [color, backgroundColor] = props.isDark ? ['#fff', 'var(--clr-bg-dark)'] : ['--clr-dark', '#fff']

    return (
        <>
            <Link href={`/projetos/${props.link}`}>
                <div className="container">
                    <div className="conteudo">
                        <h3>Sala de estar</h3>
                        <p>Lorem i et dolore magna aliqucitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="img-wrapper">
                        {/* <img src={props.image} alt="demonstração do projeto"></img> */}
                    </div>
                </div>
            </Link>

            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(348px, 1fr));
                    grid-template-rows: min-content;
                    grid-auto-rows: minmax(450px, auto);
                    max-width: 1200px;
                    margin: 0 auto;
                    transition: 150ms;
                    overflow: hidden;
                                      box-shadow: 0 .6em 11px rgba(33,33,33,.5);
                }
                .container:hover {
                    opacity: .9;
                    box-shadow: 0 0 11px rgba(33,33,33,.5);
                    transform: scale(1.01);
                }
                .img-wrapper {
                    order: 2;
                    background-image: url(./images/sala-de-estar.jpg);
                    background-size: cover;
                    background-position: center;
                    transition: 5s;

                    animation-name: animate;
                    animation-direction: alternate-reverse;
                    animation-duration: 5s;
                    animation-fill-mode: forwards;
                    animation-iteration-count: infinite;
                    animation-timing-function: ease-in-out;
                }

                @keyframes animate {
                    0% {
                        background-image: url(./images/sala-de-estar.jpg);
                    }
                    100% {
                        background-image: url(./images/podcast.jpg);
                    }
                }
                /*img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 1;
                    display: hidden;
                }*/
                .conteudo {
                    color: ${color};
                    background: ${backgroundColor};
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 1em;
                    padding: 1.8em;
                    order: ${isReverse};
                }
                @media (max-width: 695px) {
                    .conteudo {
                        order: 1;
                    }
                }
                h3 {
                    position: relative;
                    width: fit-content;
                    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
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
                p {
                    font-size: clamp(1.2em, 2vw, 1.8em)
                }
                @media (min-width: 1200px) {
                    h3 {
                        font-size: 2.2em;
                    }
                    p {
                        font-size: 1.8em;
                    }
                }
            `}</style>
        </>
    )
}
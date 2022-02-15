import Link from 'next/link' 
import dynamic from 'next/dynamic'
import { useState } from 'react';

const DynamicSidebar = dynamic(() => import('./Sidebar'))

export default function Header(props) {
    const [menu, setMenu] = useState(false);
    const logoLink = props.link ? props.link : '';
    console.log(menu)

    return (
        <>
            <header>
                <nav>
                    <img src={`${logoLink}./images/logo.png`} className="logo" alt='Eita arquitetos logo'></img>
                    <ul className="links">
                        <a>Início</a>
                        <a>Quem somos</a>
                        <a>Portfólio</a>
                        <a className='orcamento'>Faça um orçamento</a>
                    </ul>
                    <button className='nav-toggle' onClick={() => setMenu((prev) => !prev)}></button>
                    <DynamicSidebar menu={menu} setMenu={setMenu} />
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
                    font-family: var(--ff-secondary);
                    box-shadow: var(--bs)
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
                    margin-bottom: 7px;
                }
                ul {
                    display: flex;
                    gap: 1em;
                    align-items: center;
                }
                .orcamento {
                    font-size: 20px;
                    margin-left: 10px;
                    margin-bottom: 2.5px
                }
                .nav-toggle {
                    display: none;
                    height: 100%;
                    background: black;
                    width: 50px;
                    z-index: 15;
                }

                @media (max-width: 600px) {
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

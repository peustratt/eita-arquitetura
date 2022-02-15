export default function Sidebar(props) {


    return(
        <>
            <div className={`${props.menu && "active"}`} onClick={() => props.setMenu((prev) => !prev)}></div>

            <style jsx>{`
                    div {
                        position: fixed;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 20%;
                        z-index: 10;
                        background: var(--clr-bg-dark);
                        display: block;
                        transition: 200ms ease-in-out;
                        transform: translatex(100%);
                    }
                    .active {
                        transform: translatex(0%);
                    }
            `}</style>
        </>
        )
    }
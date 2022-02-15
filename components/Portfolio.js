import Project from "./Project"

export default function Portfolio() {

    return (
        <>
            <div className="portfolio">
                <Project image="./images/sala-de-estar.jpg" link={1} />
                <Project isReverse={true} isDark={true} image="./images/sala-de-estar.jpg" link={2}/>
                <Project image="./images/sala-de-estar.jpg" link={3} />
            </div>
        </>
    )
}
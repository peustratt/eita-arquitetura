import Project from "./Project"

export default function Portfolio() {

    return (
        <>
            <div className="portfolio">
                <Project image="./images/sala-de-estar.jpg" />
                <Project isReverse={true} isDark={true} image="./images/sala-de-estar.jpg"/>
                <Project image="./images/sala-de-estar.jpg" />
            </div>
        </>
    )
}
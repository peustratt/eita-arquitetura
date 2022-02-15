import Header from '../../components/Header'

const projects = [
    {
        id: 1,
        titulo: 'hora galera'
    },
    {
        id: 2,
        titulo: 'heloo boys'
    },
    {
        id: 3,
        titulo: 'nice day hun'
    },
]

export const getStaticPaths = () => {
    const paths = projects.map(project => {
        return {
            params: { id: project.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = (context) => {
    const id = context.params.id;
    const data = projects[id - 1]

    return {
        props: {projeto: data}
    }
}

export default function Projeto({ projeto }) {
    return (
        <>  
            <Header link={'.'}/>
            <div>{projeto.titulo}</div>
        </>
    )
}
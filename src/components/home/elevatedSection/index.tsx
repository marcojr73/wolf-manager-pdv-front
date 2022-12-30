import ContainerElevatedSection from "../../../styles/home/elevatedSection/index.tsx"

function ElevatedSection({functionality} : {functionality: JSX.Element}){
    return(
        <ContainerElevatedSection>
            {functionality}
        </ContainerElevatedSection>
    )
}

export default ElevatedSection
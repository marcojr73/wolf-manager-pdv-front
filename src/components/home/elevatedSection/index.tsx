import ContainerElevatedSection from "../../../styles/home/containerElevatedSection"

function ElevatedSection({functionality} : {functionality: JSX.Element}){
    return(
        <ContainerElevatedSection>
            {functionality}
        </ContainerElevatedSection>
    )
}

export default ElevatedSection
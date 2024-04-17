import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const icones = [perfil, sacola]

const Icone = styled.li`
    margin-right: 45px;
    width: 25px;
    cursor: pointer;
`
const Icones = styled.ul`
    display: flex;
    align-items: center;
`

function IconesHeader() {
    return (
        <Icones>
            {icones.map((imagem) => (
                <Icone><img src={imagem}></img></Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader
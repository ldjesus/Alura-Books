import { livros } from './dadosUltimosLancamentos'
import imagemLivro from '../../imagens/livro2.png'
import styled from 'styled-components'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    `

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#000"
                tamanhoFonte="36px"
            >Último lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo={"Talvez você se interesse por"}
                subtitulo={"Angular 11"}
                descricao={"Construindo um app para o Google"}
                img={imagemLivro}
            />
            <p></p>
            <CardRecomenda
                titulo={"Talvez você se interesse por"}
                subtitulo={"Angula 12"}
                descricao={"Construindo um app para o Google"}
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos
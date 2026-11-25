import styles from './BlackOps3.module.css'
import bo3 from '../assets/bo3.jpg'

function BlackOps3(props){
    return(
        <div className={styles.bo3}>
            <header>
                <h1>Call of Duty: Black Ops 3</h1>
            </header>
            <img className={styles.imagem} src={bo3} alt="Imagem da capa do jogo Call of Duty: Black Ops 3"/>
            <p className={styles.texto}>
                Call of Duty: Black Ops III é um jogo eletrônico de tiro em primeira pessoa produzido pela Treyarch, 
                lançado no dia 6 de novembro de 2015 pela Activision para Microsoft Windows, PlayStation 4 e Xbox One. 
                É o décimo terceiro título Call of Duty, contudo, a campanha desse jogo não é uma continuação do arco "Black Ops", 
                que se iniciou em Call of Duty: World at War (2008) e foi até Black Ops II. 
                Uma versão limitada que apenas inclui os modos multiplayer foi produzida pelos estúdios 
                Beenox e Mercenary Technology e lançada para PlayStation 3 e Xbox 360. 
                Em Abril de 2015, a Activision lançou a campanha #backinblack, 
                revelando mais tarde em várias plataformas oficiais que um novo Black Ops estava em produção. 
                Black Ops III foi então formalmente mostrado a 26 de abril. 
                Call of Duty: Black Ops III é o segundo jogo da série depois de Call of Duty: Advanced Warfare 
                que beneficiou de um ciclo de três anos de produção. Call of Duty: Black Ops III tem lugar num futuro distópico em 2065, 
                40 anos depois de Black Ops II, 
                "atirando os jogadores para um futuro negro e distorcido em que uma nova raça de soldados Black Ops emerge".
            </p>
            <footer>
                <p>&copy; {new Date().getFullYear()}, Isabella Barbosa</p>
            </footer>
        </div>
    )
}

export default BlackOps3
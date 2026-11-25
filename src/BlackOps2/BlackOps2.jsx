import styles from './BlackOps2.module.css'
import bo2 from '../assets/bo2.jpg'

function BlackOps2(props){
    return(
        <div className={styles.bo2}>
            <header>
                <h1>Call of Duty: Black Ops 2</h1>
            </header>
            <img className={styles.imagem} src={bo2} alt="Imagem da capa do jogo Call of Duty: Black Ops 2"/>
            <p className={styles.texto}>
                Call of Duty: Black Ops II é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Treyarch e publicado pela Activision (Square Enix no Japão). 
                Black Ops II foi um dos jogos mais esperados de 2012. Foi lançado oficialmente em 13 de novembro de 2012 para as plataformas Microsoft Windows, PlayStation 3 e Xbox 360, e em 18 de novembro para o Wii U. 
                O lançamento ocorreu primeiramente na América do Norte, em 30 de novembro de 2012; depois na Europa em 20 de dezembro de 2012; e no Japão, na mesma data. 
                Versões para PlayStation 4 e PlayStation 5, desenvolvidas pela Iron Galaxy Studios, foram lançadas em 9 de julho de 2026.
                É o nono jogo da série Call of Duty e a sequência de Call of Duty: Black Ops (2010). 
                Um jogo correspondente, Call of Duty: Black Ops: Declassified, foi lançado simultaneamente e em exclusivo para a PlayStation Vita. 
                Em abril de 2017, Black Ops II entrou para a retrocompatibilidade do Xbox One. 
                Call of Duty: Black Ops II decorre entre os anos de 1980 e 2025, durante o final da Guerra Fria e durante uma fictícia segunda guerra fria. 
                Foi também o primeiro jogo da série a apresentar cenários, armamento e tecnologia futurista. 
                Também pela primeira vez nos jogos Call of Duty, Black Ops II apresenta histórias ramificadas com jogabilidade não-linear, bem como vários finais.
            </p>
            <footer>
                <p>&copy; {new Date().getFullYear()}, Isabella Barbosa</p>
            </footer>
        </div>
    )
}

export default BlackOps2
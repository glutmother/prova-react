import styles from './BlackOps.module.css'
import bo1 from '../assets/bo1.jpg'

function BlackOps(props){
    return(
        <div className={styles.bo1}>
            <header>
                <h1>Call of Duty: Black Ops</h1>
            </header>
            <img className={styles.imagem} src={bo1} alt="Imagem da capa do jogo Call of Duty: Black Ops"/>
            <p className={styles.texto}>
                Call of Duty: Black Ops é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Treyarch, 
                publicado pela Activision e lançado mundialmente em 9 de novembro de 2010 para as plataformas Microsoft Windows, Xbox 360, PlayStation 3, Wii e Nintendo DS. 
                Anunciado em 30 de abril de 2010, o jogo é o sétimo capítulo da série Call of Duty, e o primeiro situado durante a Guerra Fria. 
                É o terceiro da série a ser desenvolvido pela Treyarch, sendo uma sequência direta de Call of Duty: World at War. Em 27 de setembro de 2012, foi lançado para OS X. 
                Versões para PlayStation 4 e PlayStation 5, desenvolvidas pela Iron Galaxy Studios, foram lançadas em 9 de julho de 2026.
                Nas primeiras 24 horas de lançamento, o jogo vendeu mais de 5,6 milhões de unidades, sendo 4,2 milhões nos Estados Unidos e 1,4 milhão no Reino Unido, 
                batendo o recorde alcançado por seu antecessor, Modern Warfare 2, em aproximadamente 2,3 milhões de cópias. 
                A 1 de maio de 2012 foi revelado a sequência Call of Duty: Black Ops II com lançamento para novembro de 2012.
            </p>
            <footer>
                <p>&copy; {new Date().getFullYear()}, Isabella Barbosa</p>
            </footer>
        </div>
    )
}

export default BlackOps
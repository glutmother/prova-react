import styles from './Header.module.css'

function Header(){
    return(
        <div className={styles.cabecalho}>
            <header>
                <h1 className={styles.titulo}>Meus jogos favoritos</h1>
            </header>
        </div>
    )
}

export default Header;
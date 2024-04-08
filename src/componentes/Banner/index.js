import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá Mundo</h1>
                <p className={styles.paragrafo}>Bem vindo ao meu espaço pessoal! Eu sou o Thiago Ferreira, estou cursando e aprendendo mais sobre programação, espero que aprenda comigo</p>
            </div>

            <div className={styles.imagem}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden='true' alt='circulo colorido'/>
                <img className={styles.minhaFoto} src={minhaFoto} alt='Foto do Thiago Ferreira'/>
            </div>
        </div>
    )
}
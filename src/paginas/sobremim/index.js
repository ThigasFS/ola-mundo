import PostModelo from "componentes/PostModelo"
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from "./SobreMim.module.css"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim(){
    return(
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
            <h3 className={styles.subtitulo}>Olá, eu sou o Thiago!</h3>
            <img src={fotoSobreMim} alt="foto do th" className={styles.fotoSobreMim} />
            <p className={styles.paragrafo}> Oi. Tudo bem? Eu sou estudante de Engenharia da Computação na Unisal e estou feliz em vê-lo por aqui</p>
            <p className={styles.paragrafo}> Minha história com programação começou na Universidade Salesiana (Unisal), quando consolidei minha carreira como programador. No começo aprendi os conceitos básicos de programação assim como linguagens como C, Java e Python sem me profissionalizar em alguma.</p>
            <p className={styles.paragrafo}> Ainda na universidade, projetei e executei diversos projetos com programação em linguagens C, Java e Python. Como um simples game novel em C, um dashboard interativo e informativo em Java e um aplicativo que consumia de uma API do Bard API para localizar, auxiliar e efetivar um caminho para um motorista perdido, nosso foco era em trazer o máximo de segurança possível para o usuário.</p>
            <p className={styles.paragrafo}> Tive a oportunidade de estagiar em uma empresa como T.I, no qual aprendi muito sobre conexões, roteadores, manutenção, entre outras diversas funcionalidades. Uma delas tive a oportunidade de melhorar minhas habilidades em programação em PHP que permitiu desenvolver um site para a empresa.</p>
        </PostModelo>
    )
}
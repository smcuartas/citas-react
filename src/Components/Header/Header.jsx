import * as S from './styled-header'

function Header( {title,subtitle}){
    return(
        <S.Header>
            <S.AnimatedBar/>
            <S.Content>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </S.Content>
        </S.Header>
    )
}

export default Header
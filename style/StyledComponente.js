import styled from "styled-components"


export const H2Styled = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    letter-spacing: 8px;
    margin: 1em 0 0 0;
    color: #448AFF;
`
export const StyledH3 = styled.h3`
    color: #212121;
    font-weight: 400;
    margin: 0.5em 0;
`;

export const StyledP = styled.p`
    color: #757575;
    font-weight: 300;
    margin: .5em 0 1.2em 0;
`;

export const StyleAcerca = styled.div`
    text-align: center;
`;

export const AcercaAvatar = styled.div`
    padding: 2em 0 0 0;
`;

//conenido principal
/* export const StyledPrincipal = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 1024px);
    justify-content: center;
    padding: 1em;
`;

export const ContenidoPrincipal = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 2rem;
    gid-row-gap: 0.5em;
    `; */

export const ImgAcerca = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #3F51B5;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0,0.6);
`;

export const AcercaNombre = styled.div`
    text-align: center;
`;

export const AcercaH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #448AFF;
`;

export const AcercaProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #448AFF;
`;

export const AcercaDescrip = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
`;

export const AcercaLocalizacion = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 400;
`;

export const SocialStyle = styled.div`
    margin: 0 auto;
    display: block;
`;

export const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const SocialLi = styled.li`
    display: inline;
    margin: 0 1em 0 0;

`;

export const SocialAnchor = styled.a`
    color: #212121;
    text-decoration: none;
    font-size: 1.2em;
`;

export const SocialIcon = styled.i`
    color: ${props => props.theme.color};
`;

export const facebook = {
    color: "#3b5998"
  };

export const twitter = {
    color: "#38A1F3"
  }

export const linkedin = {
    color: "#0e76a8"
  }
export const github = {
    color: "#333"
  }
  
//educacion 

export const EducacionH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    letter-spacing: 8px;
    margin: 1em 0 0 0;
    color: #448AFF;
`;

export const EducacionH3 = styled.h3`
    color: #212121;
    font-weight: 400;
    margin: 0.5em 0;
`;

export const EstudiodP = styled.p`
    color: #757575;
    font-weight: 300;
    margin: .5em 0 1.2em 0;
`;

/* export const DivStyled = styled.div`
    border: 2px solid blue;
    margin: 20px;

`; */

//habilidades
export const ContenidoHabilidades = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    grid-row-gap: 0.5em;

    @media only screen and (max-width: 767px){
        grid-template-columns: 1fr;
    }
`;

export const HabilidadesH5 = styled.h5`
    margin: .5em 0;
`;

//linea de % total
export const LineaHabilidades = styled.div`
    height: 8px;
    position: relative;
    border-radius: 50px;
    background: #448AFF;
`;

/*  export const move = keyframes`
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
`; */

/* export const SpanHabilidades = styled.span`
    display: block;
    height: 100%;
    width: ${props => props.width}%;
    border-radius: 8px;
    background-color: #303F9F;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3) , inset 0 -2px 6px rgba(0,0,0,0.4);
    &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(-45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent);
    z-index: 1;
    background-size: 50px 50px;
    animation: 4s linear infinite;
    overflow: hidden;
  }
`; */

//export const porcentajes = [70,80,30,48,60]; 

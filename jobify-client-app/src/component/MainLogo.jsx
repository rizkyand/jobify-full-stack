import main from '../assets/images/main.svg';
import styled from "styled-components";

function MainLogo(){
    return <StyledWrapper>
        <img src={main} alt="job hunt" className="main-img"/>
    </StyledWrapper>
}

const StyledWrapper = styled.section`
  .main-img{
    position: absolute; /* Set the position to absolute */
    animation: floatAnimation 5s infinite;
    width: 50%; /* Or any specific width you desire */
    height: 50%; /* Or any specific height you desire */
    object-fit: fill;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
  @keyframes floatAnimation {
    0% {
      transform: translate(0, 0); /* Initial position */
    }
    50% {
      transform: translate(0, -20px); /* Move up */
    }
    100% {
      transform: translate(0, 0); /* Return to initial position */
    }
  }

  @media (min-width: 992px) {
    .main-img {
      display: block;
    }
  }
`;

export default MainLogo;



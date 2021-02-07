import styled from 'styled-components';

export const ButtonEl = styled.button`
  align-items: center;
  background-image: linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%);
  background-size: 200% auto;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 20px #eee;
  box-sizing: border-box;
  color: white; 
  cursor: pointer;
  display: block;
  flex-direction: row;
  height: 56px;
  justify-content: center;
  line-height: 1;
  margin: 10px;
  padding: 15px 45px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }      
  &:focus {
    outline: none;
  }
  span.ripple {
    animation: ripple 1s ease-in-out;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    position: absolute;
    transform: scale(0);
  }
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

export const ContainerEl = styled.div``;

export const CaptionEl = styled.p`
  font-size: 16px;  
  margin: 0;
  margin-left: 10px;
`;
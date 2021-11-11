import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 900px;
  max-height: 675px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #341644;
  box-shadow: 0 -5px 0 #531D75, 0 10px 0 #1C042B, 0 14px 0 rgba(0,0,0,0.3);
  box-sizing: border-box;
  color: white;
  font-size: 36px;
  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 95%;
    max-height: 95%;
  }

  @media (max-height: 500px) {
    font-size: 18px;
    max-width: 90%;
    max-height: 90%;
  }
`

export const Instructions = styled.div`
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const QuitButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(15px, -15px);
  @media (max-width: 768px) {
    transform: translate(10px, -10px);
  }
`

export const ErrorMessage = styled.div`
  padding: 15px;
  border-radius: 10px;
  background-color: #E30514;
  color: white;
  font-size: 20px;
`
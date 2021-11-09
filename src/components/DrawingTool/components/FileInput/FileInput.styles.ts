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
`

export const Instructions = styled.div`
  text-align: center;
`

export const QuitButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(25px, -25px);
`

export const ErrorMessage = styled.div`
  padding: 15px;
  border-radius: 10px;
  background-color: #E30514;
  color: white;
  font-size: 24px;
`
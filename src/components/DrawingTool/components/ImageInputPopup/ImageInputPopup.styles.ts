import styled from 'styled-components'

export const Container = styled.div`
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  @media (max-width: 850px) and (max-height: 850px), (max-width: 700px) {
    min-height: 300px;
    height: 100%;
  }
`

export const Instructions = styled.div`
  text-align: center;
`

export const Copyright = styled.div`
  margin-top: 20px;
  text-align: center;
`


export const ErrorMessage = styled.div`
  padding: 15px;
  border-radius: 10px;
  background-color: #E30514;
  color: white;
`
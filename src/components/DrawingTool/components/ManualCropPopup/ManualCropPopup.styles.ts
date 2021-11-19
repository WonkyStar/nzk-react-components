import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  font-size: 24px;
  text-align: center;
  > :last-child {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

export const Image = styled.div<{src: string}>`
  width: 100%;
  height: 250px;
  background-image: url(${props => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-height: 400px) {
    height: 170px;
  }
` 


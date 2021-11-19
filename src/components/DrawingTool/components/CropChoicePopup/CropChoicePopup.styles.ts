import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 700px) and (min-height: 400px) {
    flex-direction: column;
  }
  & > div {
    width: 50%;
    text-align: center;
    font-size: 24px;
    & > :last-child {
      max-width: 250px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 10px;
    }
    @media (max-width: 700px) and (min-height: 400px) {
      width: 100%;
    }
    @media (max-width: 700px) and (max-height: 700px) {
      font-size: 18px;
    }
  }
`

export const Title = styled.div`
  font-size: 44px;
  font-family: 'Rammetto One';
  text-shadow: 0px 3px 0px #A6A6A6, 0px 6px 0px rgba(0,0,0, .5);
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  @media (max-width: 850px) and (max-height: 850px), (max-width: 700px) {
    font-size: 28px;
    text-shadow: 0px 2px 0px #A6A6A6, 0px 2px 0px rgba(0,0,0, .5);
    margin-bottom: 10px;
  }
  @media (max-width: 500px) {
    max-width: 250px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Image = styled.div<{src: string}>`
  position: relative;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 250px;
  @media (max-width: 850px) and (max-height: 900px) {
    height: 200px;
  }
  @media (max-width: 815px) and (max-height: 900px) {
    height: 180px;
  }
  @media (max-width: 700px) and (max-height: 700px) {
    height: 120px;
  }
`

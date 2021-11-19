import styled from 'styled-components'

export const Title = styled.div`
  font-size: 60px;
  font-family: 'Rammetto One';
  text-shadow: 0px 4px 0px #A6A6A6, 0px 8px 0px rgba(0,0,0, .5);
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 850px) and (max-height: 850px), (max-width: 700px) {
    font-size: 32px;
    text-shadow: 0px 2px 0px #A6A6A6, 0px 2px 0px rgba(0,0,0, .5);
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  font-size: 24px;
  @media (max-height: 650px) {
    font-size: 20px;
  }
  @media (max-height: 370px) {
    font-size: 16px;
  }
`

export const DrawingContainer = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
  background-color: #701EA8;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  @media (max-height: 750px) {
    height: 300px;
  }
  @media (max-height: 650px) {
    width: 50%;
    margin-bottom: 0px;
    padding: 10px;
    height: 220px;
  }
  @media (max-width: 400px) {
    height: 250px;
    padding: 10px;
  }
  @media (max-height: 450px) {
    height: 200px;
  }
  @media (max-height: 370px) {
    height: 150px;
  }
`

export const Text = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  @media (max-height: 650px) {
    width: 50%;
    padding-left: 40px;
  }
  @media (max-height: 370px) {
    padding-left: 20px;
  }
`

export const Image = styled.div<{src: string}>`
  position: relative;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`

export const Actions = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

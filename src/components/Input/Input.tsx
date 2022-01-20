import styled, { css } from 'styled-components'

export interface InputProps {
  borderRadius?: string
  borderColor?: string
  borderWidth?: string
  
}

const Input = styled.input`
  outline: none;
  padding: 6px 10px;
  font-size: 17px;
  font-family: 'Libre Baskerville';
  ${(props: InputProps) => css`
    border-radius: ${props.borderRadius};
    border: ${props.borderWidth} solid ${props.borderColor};
  `}
`

Input.defaultProps = {
  borderRadius: '6px',
  borderColor: '#000',
  borderWidth: '2px'
}

export default Input


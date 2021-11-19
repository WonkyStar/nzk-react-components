import React from 'react'
import styled from 'styled-components'

const LoaderWrap = styled.div`
  position: relative;
  color: ${(props: { color?: string, minHeight?: number }) => props.color};
  width: 100%;
  min-height: ${(props: { color?: string, minHeight?: number }) => props.minHeight}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 99991;
  animation: fadein 1s;
  @keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

const LoaderAnimate = styled.div`
	background: inherit;
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLoader = styled.div`
  & > svg {
    display: inline-block;
    overflow: show;
    margin: auto;
    text-indent: -9999em;
    animation: spin 1.5s linear infinite;
    fill: ${(props: { color?: string, size?: number }) => props.color};
    height: ${(props: { color?: string, size?: number }) => props.size}px;
    width: ${(props: { color?: string, size?: number }) => props.size}px;
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
  };
`

const Placeholder = styled.div`
  margin-top: 10px;
`


export interface ILoaderProps {
  bgColor?: string,
  color?: string,
  size?: number,
  placeholder?: string,
  minHeight?: number
}

const Loader = (props: ILoaderProps) => {
  const { color, size, minHeight, placeholder } = props

  return (
    <LoaderWrap color={color} minHeight={minHeight || size}>
      <LoaderAnimate>
        <StyledLoader color={color} size={size}>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 64 64"
            xmlSpace="preserve"
          >
            <path d="M32,0C14.4,0,0,14.4,0,32s14.3,32,32,32s32-14.3,32-32C64,14.4,49.6,0,32,0z M36.3,21.2L35,22.9c-0.9,1.2-2,2.5-3,3.6c-1-1.2-2-2.5-3-3.6l-1.4-1.7c-3.6-4.4-3.6-10.1-3.3-13.1c4.9-1.6,10.4-1.6,15.2,0C39.9,11.1,39.9,16.8,36.3,21.2z M17.7,11.3c0.1,4,1.2,9.4,4.9,14l1.4,1.7c1.3,1.6,2.6,3.1,3.8,4.7c-2.9,3.5-4.9,6.2-5.2,6.5c-3.9,4.8-4.8,10.3-4.9,14.4C10.9,48,6.8,40.3,6.8,32C6.9,23.7,10.9,16,17.7,11.3z M27.7,42.3L27.7,42.3c0.4-0.4,2.1-2.5,4.3-5.5c2.5,3.1,4.3,5.3,4.3,5.5c3.8,4.7,3.6,10.8,3.3,13.7c-4.9,1.6-10.3,1.6-15.2,0C24.1,53.1,23.8,47.1,27.7,42.3z M46.3,52.7c0-4.2-1-9.6-4.9-14.4v-0.1c-0.4-0.5-2.5-3.1-5.2-6.5c1.3-1.6,2.6-3.1,3.8-4.7l1.4-1.7c3.8-4.7,4.8-10,4.9-14c6.8,4.7,10.9,12.4,10.9,20.7C57.1,40.3,53.1,48,46.3,52.7z" />
          </svg>
        </StyledLoader>
      </LoaderAnimate>
      { placeholder && <Placeholder>{ placeholder }</Placeholder> }
    </LoaderWrap>
  )
}

Loader.defaultProps = {
  color: '#EC5E2E',
  size: 70,
  bgColor: null,
  placeholder: null,
  minHeight: null
}

export default Loader

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export interface IconProps {
  name: string
  size?: string
}

const SvgWrapper = styled.div`
  height: ${(props: IconProps) => props.size};
  width: ${(props: IconProps) => props.size};
  display: inline-flex;

  svg {
    width: 100% !important;
    height: 100% !important;
  }
`

const Icon = (props: IconProps) => {
  let [svg, setSvg] = useState(null)

  useEffect(() => {
    importSvg()
  }, [])

  const importSvg = async () => {
    // @ts-ignore
    let loadedSvg = await require(`${ASSETS_PATH || './assets/'}icons/${props.name}.svg`)
    setSvg(loadedSvg.ReactComponent)
  }

  return <SvgWrapper {...props}>{svg || null}</SvgWrapper>
}

Icon.defaultProps = {
  size: null
}

export default Icon

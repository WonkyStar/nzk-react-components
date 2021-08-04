import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import React from 'react';
import styled from 'styled-components';
import useConfettis from '.';
import Button from '../../components/Button';
import { IAnimationsArgs } from './animations';

const Wrapper = styled.div`

`


export default {
  title: "Hooks/useConfettis"
} as Meta;

const basicCanonTemplate: Story<IAnimationsArgs["basicCanon"]> = (params: IAnimationsArgs["basicCanon"]) => {
  const { ANIMATIONS } = useConfettis()
return <Wrapper>
  <Button size='x-small' theme='primary' onClick={() => {
    ANIMATIONS.basicCanon({
      confettiOptions: params.confettiOptions
    })
  }}>Fire</Button>
</Wrapper>
}
export const basicCanon = basicCanonTemplate.bind({});
basicCanon.args = {
  confettiOptions: {
    particleCount: 100,
    spread: 70,
    origin: { x: 0.5, y: 0.5 }
  }
}

const fireworksTemplate: Story<IAnimationsArgs["fireworks"]> = (params: IAnimationsArgs["fireworks"]) => {
  const { ANIMATIONS } = useConfettis()
return <Wrapper>
  <Button size='x-small' theme='primary' onClick={() => {
    ANIMATIONS.fireworks({
      durationInMs: params.durationInMs,
      confettiOptions: params.confettiOptions
    })
  }}>Fire</Button>
</Wrapper>
}
export const fireworks = fireworksTemplate.bind({});
fireworks.args = {
  durationInMs: 3000,
  confettiOptions: {
    colors: ['#51e5ff', '#ec368d', '#ffc857', '#242423', '#e53d00']
  }
}


const sideCanonsTemplate: Story<IAnimationsArgs["sideCanons"]> = (params: IAnimationsArgs["sideCanons"]) => {
  const { ANIMATIONS } = useConfettis()
return <Wrapper>
  <Button size='x-small' theme='primary' onClick={() => {
    ANIMATIONS.sideCanons({
      durationInMs: params.durationInMs,
      confettiOptions: params.confettiOptions
    })
  }}>Fire</Button>
</Wrapper>
}
export const sideCanons = sideCanonsTemplate.bind({});
sideCanons.args = {
  durationInMs: 3000,
  confettiOptions: {
    angle: 60,
    spread: 55,
    particleCount: 2,
    colors: ['#ffc857', '#000'],
    origin: { x: 0, y: 0.5 }
  }
}


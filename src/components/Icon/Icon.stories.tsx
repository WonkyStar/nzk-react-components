import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import useMountState from '../../hooks/useMountState';

import * as icons2 from '../../icons';

export default {
  title: "Components/Icon",
  argTypes: {
    fill: {
      control: { type: 'color' },
    },
  },
} as Meta;

// Create a master template for mapping args to render the Button component


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -15px;

  > :first-child {
    text-align: center;
    margin-bottom: 20px;
    font-size: 15px;
    font-family: 'Rammetto One';
  }
  > :nth-child(2) {
    margin-bottom: 15px;
  }
  > :nth-child(3) {
    display: grid;
    width: 100%;
    background-color: #ebebeb;
    grid-template-columns: repeat(auto-fill, 150px);
    grid-gap: 20px;
    padding: 15px;
  }
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  input {
    height: 0;
    width: 0;
    opacity: 0;
  }
`

const Template: Story = (args) => {
  const [copied, setCopied] = useState<string | null>(null)
  const mounted = useMountState()
  const [search, setSearch] = useState('')

  useEffect(() => {
    setTimeout(() => {
      if (copied && mounted) {
        setCopied(null)
      }
    }, 3000)
  }, [copied])

  const displayedIcons = useMemo(() => {
    return Object.keys(icons2).filter(key => new RegExp(search.toLocaleLowerCase()).test(key.toLocaleLowerCase()))
  }, [search])

  return <Wrapper>
    { copied
      ? <div style={{ color: '#40A240' }}>Copied to clipboard: {copied}</div>
      : <div>Click on an icon to copy its name</div>
    }
    <div>
      <input type='text' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
    <div>
      {
        displayedIcons.map(key => <IconWrapper key={key} onClick={() => {
          setCopied(key)
          const copyText: HTMLInputElement | null = document.querySelector(`#icon-${key}`);
          copyText?.select();
          document.execCommand("copy");
        }}>
          <input id={`icon-${key}`} defaultValue={key} />
          { icons2[key]({ height: '100%', width: '100%', ...args }) }
          <div>{key}</div>
        </IconWrapper>)
      }
    </div>
  </Wrapper>
}

export const AllIcons = Template.bind({})
AllIcons.args = { fill: '#f00' };

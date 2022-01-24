import { darken, getLuminance, lighten } from 'polished'
import React, { forwardRef, ReactElement, useEffect, useRef, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import styled, { css } from 'styled-components'
// import Input from '../Input'
import Button from '../Button'

export interface DatePickerProps {
  primary: string
  autoFocus?: boolean
  onChange?: (date: Date) => void
  defaultValue?: Date
  input?: ReactElement<{ onClick: any; ref: any; children: any; }>
}

interface WrapperProps {
  primary: string
}

const getColors = (props: WrapperProps) => {
  const { primary } = props
  const lum = getLuminance(primary)
  const light = lum >= 0.5
  const secondary = light ? darken(0.2, primary) : lighten(0.2, primary)
  return {
    primary,
    secondary,
    color: light ? '#000' : '#fff'
  }
}

const Wrapper = styled.div`
  ${(props: WrapperProps) => {
    const colors = getColors(props)
    return css`
      --primary: ${colors.primary};
      --secondary: ${colors.secondary};
      --color: ${colors.color};
    `}
  }
  .react-datepicker {
    position: relative;
    width: 300px;
  }
  .react-datepicker__navigation {
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 2px;
    padding: 0;
    border: none;
    z-index: 1;
    height: 32px;
    width: 32px;
    text-indent: -999em;
    overflow: hidden;
  }
  .react-datepicker__navigation-icon::before {
    border-color: var(--color);
    border-style: solid;
    border-width: 5px 5px 0 0;
    content: "";
    display: block;
    height: 12px;
    position: absolute;
    top: 10px;
    width: 10px;
  }
  .react-datepicker__navigation-icon--previous::before {
    transform: rotate(225deg);
    right: -7px;
  }

  .react-datepicker__navigation-icon--next::before {
    transform: rotate(45deg);
    left: -7px;
  }
  .react-datepicker__navigation--next {
    right: 2px;
  }
  .react-datepicker__month-container {
    text-align: center;
    border-radius: 9px;
    overflow: hidden;
    box-shadow: 0 3px 9px 1px rgba(0,0,0,0.3);
    margin-top: 8px;
  }
  .react-datepicker__current-month {
    padding: 5px 0;
    font-family: 'Rammetto One';
    color: var(--color);
    background: var(--primary);
  }
  .react-datepicker__day-names {
    width: 100%;
    display: flex;
    font-weight: bold;
    color: var(--primary);
    background-color: var(--secondary);
    > * { flex: 1; padding: 10px 0; }
  }
  .react-datepicker__day {
    position: relative;
    background-color: var(--primary);
    color: var(--color);
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
    :hover {
      background-color: var(--secondary);
      transition: background-color 0.2s ease-in-out;
    }
  }
  .react-datepicker__day--selected {
    background-color: var(--secondary);
  }
  .react-datepicker__day--keyboard-selected {
    background-color: var(--secondary);
    transition: background-color 0.2s ease-in-out;
  }
  .react-datepicker__day--outside-month {
    background-color: #ffffffff;
    color: var(--primary);
  }
  .react-datepicker__week {
    width: 100%;
    display: flex;
    > * { flex: 1; padding: 10px; }
  }
`

const DatePicker = (props: DatePickerProps) => {
  const datePickerRef = useRef<ReactDatePicker | null>(null)
  const [startDate, setStartDate] = useState(props.defaultValue || new Date());

  useEffect(() => {
    if (props.autoFocus && datePickerRef.current && datePickerRef.current.input) {
      datePickerRef.current.input.focus()
    }
  }, [])

  const ButtonInput = forwardRef(({ value, onClick }: any, ref: any) => {
    if (props.input) return React.cloneElement(props.input, { onClick, ref, children: value })
    return <Button onClick={onClick} ref={ref} theme='primary' size='small'>{value}</Button>
  })

  useEffect(() => {
    if (props.onChange) {
      props.onChange(startDate)
    }
  }, [startDate])

  // const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
  //   <Input value={value} onClick={onClick} ref={ref} borderColor={primary} />
  // ))

  return <Wrapper primary={props.primary}>
    <ReactDatePicker
      ref={datePickerRef}
      // dateFormat="dd/MM/yyyy"
      dateFormat="d MMMM yyyy"
      withPortal
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ButtonInput />}
    />
  </Wrapper>
}

DatePicker.defaultProps = {
  primary: '#1EA7FD',
  autoFocus: false,
  onChange: null,
  range: false,
  defaultValue: null,
  input: null,
}

export default DatePicker


import styled from 'styled-components'
import theme from 'styled-theming'
import { components } from 'react-select'
import { Colors } from 'styles/colors'
import { Fonts } from 'styles/fonts'

const { Option } = components

const inputBorder = theme('mode', {
  light: `2px solid ${Colors.green}`,
  dark: `2px solid ${Colors.yellow}`,
})

const optionFontColor = theme('mode', {
  light: `${Colors.green}`,
  dark: 'red',
})

export const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    borderRadius: '8px',
    border: `${inputBorder}`,
    boxShadow: 'none',
    caretColor: `${Colors.green}`,
    cursor: 'pointer',
    height: '46px',
    fontFamily: `${Fonts.body.regular}`,
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: '25px',
    paddingLeft: '8px',
    transition: 'all .2s ease-in-out',
    ':focus': {
      outline: 'none',
    },
  }),
  dropdownIndicator: (provided, { hasValue, selectProps: { menuIsOpen } }) => ({
    ...provided,
    color: `${Colors.green}`,
    paddingTop: '12px',
    paddingRight: '16px',
    margin: 0,
    transform:
      menuIsOpen && hasValue
        ? 'rotate(180deg)'
        : menuIsOpen
        ? 'rotate(180deg)'
        : '',
    transition: 'transform 0.3s ease-out',
  }),
  input: (styles) => ({
    ...styles,
    boxSizing: 'border-box',
    fontFamily: `${Fonts.body.regular}`,
    paddingLeft: '0px',
    ':focus': {
      ...styles[':focus'],
      outline: 'none',
    },
  }),
  menu: (provided) => ({
    ...provided,
    fontFamily: `${Fonts.body.regular}`,
    padding: '0 0 0 10px',
    width: '97%',
    left: '1.5%',

  }),
  option: (styles, { isDisabled, isSelected }) => ({
    ...styles,
    alignItems: 'center',
    backgroundColor: isSelected && 'transparent',
    color: `${optionFontColor}`,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    display: 'flex',
    height: '40px',
    padding: '4px 0 0 0px',
  }),
  singleValue: (styles) => ({
    ...styles,
    overflow: 'visible',
    position: 'absolute',
  }),
}

export const SingleOptionEl = styled(Option)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: ${Fonts.body.regular};
`

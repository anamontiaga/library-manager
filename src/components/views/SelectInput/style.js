import styled from 'styled-components';
import Select, { components } from 'react-select';
const { Option } = components;

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'white',
    borderRadius: '3px',
    boxShadow: 'none',
    // caretColor: ,
    cursor: 'pointer',
    height: '46px',
    paddingLeft: '8px',
    transition: 'all .2s ease-in-out',
    ':hover': {
    },
  }),
  dropdownIndicator: (provided, { hasValue, selectProps: { menuIsOpen } }) => ({
    ...provided,
    // color:
    paddingTop: '12px',
    paddingRight: '16px',
    margin: 0,
    transform: menuIsOpen && hasValue ? 'rotate(180deg) translate(7px, 52px)' : menuIsOpen ? 'rotate(180deg) translate(7px, 0px)' : '',
    transition: 'transform 0.3s ease-out', 
  }),
  input: (styles) => ({
    ...styles,
    boxSizing: 'border-box',
    marginTop: '6px',
    paddingLeft: '0px',
    ':focus': {
      ...styles[':focus'],
      outline: 'none',
    }
  }),
  menu: (provided) => ({
    ...provided,
    padding: '0 0 0 10px',
  }),
  option: (styles, { isDisabled, isSelected }) =>  ({
    ...styles,
    alignItems: 'center',
    backgroundColor: isSelected && 'transparent',
    // color: 
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    display: 'flex',
    height: '59px',
    padding: '4px 0 0 0px',
  }),
  singleValue: (styles) => ({
    ...styles,
    overflow: 'visible',
    position: 'absolute',
  }),
};

export const SingleOptionEl = styled(Option)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

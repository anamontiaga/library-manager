import React from 'react'
import Select from 'react-select'
import { customStyles, SingleOptionEl } from './style'

const SingleValueOption = (data) => (
  <SingleOptionEl {...data}>{data.data.value}</SingleOptionEl>
)

export const SelectInput = ({ onChange, options }) => (
  <Select
    className="basic-single"
    classNamePrefix="select"
    hideSelectedOptions={false}
    isClearable={false}
    isMulti
    isSearchable
    maxMenuHeight={300}
    menuPlacement="auto"
    onChange={onChange}
    options={options}
    placeholder={false}
    selectProps="value"
    styles={customStyles}
    components={{
      IndicatorSeparator: () => null,
      SingleValue: SingleValueOption,
    }}
  />
)

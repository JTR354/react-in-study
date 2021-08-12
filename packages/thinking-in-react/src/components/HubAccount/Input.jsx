import React, { useEffect } from 'react'
import { useField, useFormikContext } from 'formik';

const Input = props => {
  const {name, maxLength, type, onNextFocus} = props
  const [field, meta] = useField(props);
  const {
    // values: { textA, textB },
    touched,
    setFieldValue,
  } = useFormikContext();

// console.log(meta)
  // useEffect(() => {
  //   // if (name === 'a')
  //     // console.log(meta.value)
  //   // setFieldValue()
  //   if (touched.ca) {
  //     const t = touched.ca[name.replace('ca.', '')]
  //     console.log(t, name)
  //   }
  // }, [meta])

  // console.log(meta)
  const handleKeyUp = (e) => {
    if (e.target.value.length >= maxLength) {
      if (e.key === 'Tab' || e.key === 'Shift' || e.key === 'Backspace') {
        return
      } 
      onNextFocus && onNextFocus(name)
    }
  }

  const handleBlur = (value) => {
    // const {value} = e.target
    if (value === '') return
    if (type === 'tel') {
      setFieldValue(name, String(value).padStart(maxLength, '0'))
    }
    if (type === 'text') {
      setFieldValue(name, value.toUpperCase())
    }
    onNextFocus && onNextFocus(name)
  }
  return <input name={name} type={type} maxLength={maxLength} {...field}></input>
}

export default Input



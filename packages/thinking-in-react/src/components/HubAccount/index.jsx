import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useFormik, FormikProvider, Form, useField, useFormikContext } from 'formik';
import Input from './Input'
import './style.css'


import { connect, getIn } from 'formik';

// This component renders an error message if a field has
// an error and it's already been touched.
let  ErrorMessage = props => {
  // All FormikProps available on props.formik!
  const [count, setCount] = useState(0)
  const {isSubmitting, submitCount} = props.formik
  const error = getIn(props.formik.errors, props.name);
  const touch = getIn(props.formik.touched, props.name);
  // console.log(props.formik.isSubmitting, 99 )
  // props.formik.submitForm()
  useEffect(() => {
    // if (isSubmitting) {
    //   // console.log(123)
    //   setCount(c => c + 1)
    // } else {
    //   setCount(c => c + 1)
    // }
    setCount(c => c + 1)
    console.log(props.formik.isValidating = true)
  }, [isSubmitting, submitCount])
  return <h1>{count}</h1>
};

ErrorMessage = connect(ErrorMessage);


const HubAccount = (props) => {
  const {name} = props
  const ref = useRef(null)
  const [validate, setValidate] = useState(false)
  const refCount = useRef(0)
  const {
    values,
    touched,
    setFieldValue,
  } = useFormikContext();

  const btnConfig = useMemo(() => {
    return createBtnConfig(name)
  }, [name])

  const onNextFocus = (index) => {
    const inputs = findElement(ref.current, 'input')
    inputs[index + 1] && inputs[index + 1].focus()
    console.log(values[name])
    toValidate()

    function toValidate() {
      const {c, d} = values[name]
      if (c && d) {
        refCount.current++
        setValidate(c === '123' && d === '123456')
      }
    }
  }
  const getStyle = useCallback(({match}) => {
    let style = {}
    if (match && !validate && refCount.current) {
      // style.background = 'yellow'
      style = {background: 'yellow'}
    }
    return style
  }, [validate, refCount.current])

  // useEffect(() => {
  //   console.log(1)
  // }, [values[name]])

  useEffect(() => {
    ['MO', 'HASE'].forEach((val, i) => {
      setFieldValue(btnConfig[i].filedName, val)
    })
  }, [])

  return (
    <>
      <label htmlFor="">Account No</label>
      <section ref={ref}>
        {
          btnConfig.map(({type, filedName, maxLength, match}, index) => {
            return <Input 
            key={filedName} 
            type={type} 
            maxLength={maxLength} 
            name={filedName} 
            style={getStyle({match})}
            onNextFocus={() => onNextFocus(index)} 
            />
          })
        }
        <ErrorMessage name="hh"></ErrorMessage>
      </section>
    </>
  )
}

function createBtnConfig (name) {
  return [
    {
      filedName: `${name}.a`,
      maxLength: 2,
      type: 'text',
    },
    {
      filedName: `${name}.b`,
      maxLength: 4,
      type: 'text',
    },
    {
      filedName: `${name}.c`,
      maxLength: 3,
      type: 'tel',
      match: true,
    },
    {
      filedName: `${name}.d`,
      maxLength: 6,
      type: 'tel',
      match: true
    },
    {
      filedName: `${name}.e`,
      maxLength: 3,
      type: 'tel',
    },
  ]
}

export default HubAccount

function findElement(el, tagName = '') {
  if (!tagName || typeof tagName !== 'string') throw new Error('tagName error')
  const reuslt = []
  const stack = [el]
  while(stack.length) {
    const element = stack.pop()
    if (element.tagName === tagName.toUpperCase()) {
      reuslt.push(element)
    }
    for (let i = element.children.length - 1; i >=0; i--) {
      stack.push(element.children[i])
    }
  }
  return reuslt
}
import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'

import './style.css'

const mockOptions = () => new Array(6).fill(0).map((_, i) => ({value: i, label: `item ${i}`.repeat(5)}))

const Select = ({options}) => {
  const classes = cn('select-wrapper')
  options = mockOptions()
  const ref = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(document.forms.a.elements)
    // console.log(ref.current.getBoundingClientRect() )
    // console.log(ref.current.offsetWidth);
    const input = findElementPre(ref.current, 'input')
    console.log(input.value, input.maxLength)
    window.ii = input
  }
  const handleChange = (e) => {
    // console.log(e.target.value)
    // const f = document.forms[0]
    // console.log(f.elements['aa'].options[0].text = 'asdsad');
    // console.log(f.elements['aa'].options[0].style.height = '100px')
  }

  useEffect(() => {
    // console.log(ref.current)
    const input = findElementPre(ref.current, 'input')
    console.log(input)
  }, [])
  return (
    <div className={classes}>
      <form action="" onSubmit={handleSubmit} name="a">
        <fieldset><legend>12</legend></fieldset>
        <select onChange={handleChange} name="aa" id="ad" autoComplete={'China'} autoFocus={true}>
          {
            options && options.map((item) => {
              return <option key={item.value} value={item.value}>{item.label}</option>
            })
          }
          <option value="">China</option>
        </select>
        <div ref={ref} style={{display: 'flex', display: 'inline-block'}}>
          <label htmlFor="ii">account number</label>
          <div>
            <div>
              <input type="text" maxLength={4}/>
            </div>
          </div>
          <section>
            {/* <input type="text"/> */}
          </section>
        </div>
        <div></div>
        <button type="submit">submit</button>
        <button type="reset">reset</button>
        <fieldset name="kkk">
          <legend htmlFor="" >kkk</legend>
          <input type="text" maxLength={2} readOnly defaultValue={12}/>
          <input type="text" maxLength={2} style={{background: 'yellow'}} />
          <input type="text" maxLength={2} />
        </fieldset>
      </form>
      <form action="" name="b"></form>
    </div>
  )
}

export default Select


function findElementPre(el, tagName = '') {
  if (!tagName || typeof tagName !== 'string') throw new Error('tagName error')
  const stack = [el]
  while(stack.length) {
    const element = stack.pop()
    if (element.tagName === tagName.toUpperCase()) {
      return element
    }
    for (let i = element.children.length - 1; i >=0; i--) {
      stack.push(element.children[i])
    }
  }
}
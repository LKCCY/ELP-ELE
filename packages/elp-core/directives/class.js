import { createClass, addClass } from 'elp-shared'
import isEmpty from 'lodash.isempty'


export const generateClass = (theme) => {
  const addList = (el, binding) => {
    const { arg, value = {} } = binding
    if (arg) el.setAttribute('elp-name', arg)
    if (!isEmpty(value)) addClass(el, createClass(value, theme))
  }

  return {
    inserted: addList,
    update: addList
  }
}
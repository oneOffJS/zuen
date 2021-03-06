import * as f from '@rex/f'
import createNode from './createNode'
import executeComponent from './executeComponent'
import isComponent from './isComponent'
import isTagName from './isTagName'

export default (tagNameOrComponent, props, ...children) =>
  f.cond(
    [isTagName, createNode],
    [isComponent, executeComponent]
  )(tagNameOrComponent, { ...props }, f.flatten(children))

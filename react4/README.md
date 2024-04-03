## React Fragments `<> </>` / `<React.Fragment>`
### React Fragments let you group a list of children without adding extra nodes to the DOM.
### `Table.js` , `Columns.js`  

## Re-rendering 

### `Class Based Components`
### To avoid re-rendering of the complete component when the props or state remains unchanged, we use `PureComponent` to avoid it.

### `PureComp.js` , `RegComp.js` , `ParentComp.js`

#

### `Function Based Components`
### To avoid re-rendering in FBC, we use `Memo` - `React.memo` similar to the PureComponent

### `MemoComp.js` , `ParentComp.js`

#

## Refs

### In any component whenever the page is loaded or re-rendered we can auto focus on any particular element of the component using Refs. 

`// this.inputRefs = React.createRef()`

### Refs - `RefsDemo.js` 
### CallBack Refs - `CbRefsDemo.js`
 *  By Refs & CallBack Refs we attach `Refs` to `DOM elements`  

### Forwarding Refs - `FocusInput.js` to `Input.js` - `CBC`
### Forwarding Refs - `FRParentInput.js` to `FRInput.js` - `CBC to FBC` 

* By Forwarding Refs we forward the refs from parent to it's children as `props` to `components DOM elements`. 
#

#### `Trial.js` is a practice of mapping the object data in react app that I have learnt a while ago

#

## Portal 
### Portal allows you to render components outside the current React tree hierarchy. `PortalDemo.js` - `{ createPortal }`

### `EventBubbling` -  An event fired from inside a portal will propagate to ancestors in the containing React tree, even if those elements are not ancestors in the DOM tree. `EventBubbling.html`

#

## Error Boundary 
### Error Boundary is one of the Component Lifecycle in React
### It have two methods - 
### `static getDerivedStateFromError(error)` & `componentDidCatch(error, info)` 
### `Hero.js` & `ErrorBoundary.js`
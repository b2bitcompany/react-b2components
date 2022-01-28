# react-b2components

React components by <a href="https://b2bit.company">B2it Company</a>

## Installing

Using npm:

```bash
$ npm i react-b2components
```

Using yarn:

```bash
$ yarn add react-b2components
```

## Getting Started

In the index.js add the B2Theme component

```jsx
ReactDOM.render(
  <React.StrictMode>
    <B2Theme theme={myTheme}>
      <App />
    </B2Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
```

The theme prop is optional

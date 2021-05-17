import React from 'react'
import ReactDOM from 'react-dom'

const Main = () => {
  return (
    <div>"This is Main"</div>
  )
}

const target = document.querySelector('#root')

ReactDOM.render(<Main />, target);
import React, { Component } from 'react'
import GitSearch from './GitSearch'
import Link from './Link'

export default class Search extends Component {
  render() {
    return (
      <div>
        <GitSearch/>
        <Link/>
      </div>
    )
  }
}

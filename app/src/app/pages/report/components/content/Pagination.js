import React from 'react'

export default class Pagination extends React.Component {
  renderNextPageLink() {
    const { next_page_url } = this.props.pagination

    if (next_page_url) {
      return  <li className="page-item">
        <button className="link page-link">Next</button>
      </li>
    }
    return  <li className="page-item disabled">
      <button className="link page-link" aria-disabled="true">Next</button>
    </li>
  }
  renderPreviousPageLink() {
    const { prev_page_url } = this.props.pagination

    if (prev_page_url) {
      return <li className="page-item">
        <button className="link page-link">Previous</button>
      </li>
    }
    return <li className="page-item disabled">
      <button className="link page-link" aria-disabled="true">Previous</button>
    </li>
  }
  render() {
    console.log(this.props)
    return <nav aria-label="Page navigation">
      <ul className="pagination justify-content-end">
        {this.renderPreviousPageLink()}
        {this.renderNextPageLink()}
      </ul>
    </nav>
  }
}

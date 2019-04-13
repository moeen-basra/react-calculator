import React from 'react'
import Pagination from './content/Pagination'
import Table from './content/Table'


export default function Content({ data, pagination }) {
  return <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
    <Table data={data} pagination={pagination} />
  </div>
}

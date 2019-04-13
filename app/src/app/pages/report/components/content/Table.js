import React from 'react'

function renderRows(data) {
  if (!data || (data && !data.length)) {
    return <tr>
      <td colSpan={5}>No Data</td>
    </tr>
  }

  return data.map((row, i) => {
    return <tr key={i}>
      <td><strong>{i}</strong></td>
      <td>{row.operand1}</td>
      <td>{row.operand2}</td>
      <td>{row.operator}</td>
      <td><strong>{row.result}</strong></td>
    </tr>
  })
}

export default function Table({data, pagination}) {
  return <div className="table-responsive">
    <table className="table table-bordered table-striped">
      <caption>{(pagination && pagination.total) ? `Total: ${pagination.total}`: ''}</caption>
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Operand 1</th>
        <th scope="col">Operand 2</th>
        <th scope="col">Operator</th>
        <th scope="col">Result</th>
      </tr>
      </thead>
      <tbody>{renderRows(data)}</tbody>
    </table>
  </div>
}

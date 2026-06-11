const DataTable = ({ columns, data, actions }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          {columns.map((col, index) => <th key={index}>{col.header}</th>)}
          {actions && <th>الإجراءات</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((col, index) => (
              <td key={index}>{row[col.field]}</td>
            ))}
            {actions && <td>{actions(row)}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
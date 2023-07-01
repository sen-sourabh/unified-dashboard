import React, { useState } from 'react';
import './CustomTable.css';

interface Table {
    data: any;
    columns: any;
    classNames: any;
}

export const CustomTable: React.FC<Table> = ({ data, columns, classNames }) => {
  console.log("Data: ", data);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filtering function
  // const filteredData = data.filter((item: any) =>
  //   item.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  // console.log("filteredData: ", filteredData);

  // Sorting the filtered data
  const sortedData = data.sort((a: any, b: any) => {
    if (a[sortColumn] < b[sortColumn]) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    if (a[sortColumn] > b[sortColumn]) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  console.log("Sorted Data: ", sortedData);

  console.log("sortColumn: ", sortColumn);
  

  // Sorting function
  const sortData = (column: any) => {
    console.log("column: ", column);
    
    if (column === sortColumn) {
      // If the same column is clicked, toggle sort direction
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Sort by a new column in ascending order
      setSortColumn(column);
      setSortDirection('asc');
    }
  };


  // Pagination
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const paginatedData = sortedData.slice(firstIndex, lastIndex);
  console.log("paginatedData: ", paginatedData)
  const totalPages = Math.ceil(paginatedData.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  console.log("columns: ", columns);
  

  return (
    <div className={`table-container`}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`search-input`}
      />
      <table className={`table`}>
        <thead>
          <tr>
            {columns.map((column: any) => (
              <th
                key={column.key}
                onClick={() => sortData(column.key)}
                className={classNames.columnHeader}
              >
                {column.title.toUpperCase()}
                {sortColumn === column.key && (
                  <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row: any) => (
            <tr key={row.id}>
              {columns.map((column: any) => (
                <td key={column.title}>{row[column.title]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={`pagination`}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={
              currentPage === index + 1
                ? classNames.paginationButtonActive
                : classNames.paginationButton
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

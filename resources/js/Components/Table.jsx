import React from 'react';
import '../../css/app.css';

const Table = ({ className = '', columns = [], data = [], table_title }) => {
  return (
    <div className={`relative overflow-x-auto  bg-[--color-1] shadow-sm sm:rounded-xl ${className}`}>
      <h2 className='p-2 font-bold text-xl text-center'>{table_title}</h2>
    <div >
    
      <table className="w-full text-sm text-left border border-[--color-3] text-gray-800 bg-white border border-[--color-4]">
        <thead className="text-xs text-gray-800 uppercase bg-[--color-4] border border-[--color-4]">
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="odd:bg-white even:bg-gray-100 border border-[--color-4]"
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-6 py-4 text-gray-700">
                  {row[column] || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Table;

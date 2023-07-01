import React from 'react'
import './UserTable.css';
import { CustomDangerButton, CustomWarningButton } from '../../../reusables/CustomButton/CustomButton'

type UsertableProps = {
  columns: string[];
  rows: any[];
};

export const UserTable: React.FC<UsertableProps> = ({ columns, rows }) => {
  return (
    <table className='table'>
        <thead>
          <tr>
            {
              columns.map((col) => {
                return (
                  <th>{col}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
            {
              rows.map((row) => {
                return (
                  <tr>
                    <td>{row.id}</td>
                    <td>{row.firstName}</td>
                    <td>{row.lastName}</td>
                    <td>{row.firstName + ' ' + row.lastName}</td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
                    <td>
                      <CustomWarningButton 
                        children='Edit' 
                        className='btn-small'
                      />
                      <CustomDangerButton 
                        children='Delete'
                        className='btn-small'
                      />
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
    </table>
  )
}

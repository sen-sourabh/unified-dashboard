import { CustomTable } from '../../reusables/CustomTable/CustomTable';

export const Users = () => {
  const rowData = [
    {
      id: 1,
      firstName: 'Raj',
      lastName: 'Sharma',
      email: 'raj@example.com',
      phone: 1234567890,
    },
    {
      id: 2,
      firstName: 'Raju',
      lastName: 'Sharmy',
      email: 'raju@example.com',
      phone: 1234567891,
    },
    {
      id: 3,
      firstName: 'Raji',
      lastName: 'Sharmi',
      email: 'raji@example.com',
      phone: 1234567892,
    },
  ];

  const colData = [
    {
      key: 1,
      title: 'id'
    },
    {
      key: 2,
      title: 'firstName'
    },
    {
      key: 3,
      title: 'lastName'
    },
    {
      key: 4,
      title: 'fullName'
    },
    {
      key: 5,
      title: 'email'
    },
    {
      key: 6,
      title: 'phone'
    },
    {
      key: 7,
      title: 'actions'
    }
  ];

  return (
    <div>
        <h2>Users</h2>
        <CustomTable columns={colData} data={rowData} classNames={``} />
    </div>
  )
}

import React, { useEffect } from 'react';
import Table from 'components/shared/table';
import { action } from 'redux/actions';
import { useSelector } from 'react-redux';
import Layout from 'components/shared/layout';

export default () => {
  const { users = [] } = useSelector(e => e);

  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Username',
      selector: 'username',
      sortable: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'Phone',
      selector: 'phone',
      sortable: true,
      right: true,
    },
  ];

  useEffect(() => {
    action.user.list();
  }, []);

  return (
    <Layout>
      <Table columns={columns} data={users} />
    </Layout>
  );
}
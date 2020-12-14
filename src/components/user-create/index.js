import React from 'react';
import Layout from 'components/shared/layout';
import Form from 'components/shared/form';

export default () => {
  const fields = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'username',
      label: 'Username',
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'text',
    },
  ];

  return (
    <Layout>
      <Form fields={fields} />
    </Layout>
  );
}
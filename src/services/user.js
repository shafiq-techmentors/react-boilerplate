import rest from './rest';

export default {
  create: ({ name, email }) => rest.post({ url: '/users', body: { name, email } }),
  getAll: () => rest.get({ url: '/users' }),
  get: ({ id }) => rest.get({ url: `/users/${id}` }),
  update: ({ id, name, email }) => rest.put({ url: `/users/${id}`, body: { name, email } }),
  delete: ({ id }) => rest.delete({ url: `/users/${id}` }),
};

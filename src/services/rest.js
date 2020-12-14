import { CONFIG } from 'constant';

const request = ({
  url, headers, baseUrl, body = null, method,
}) => (new Promise((resolve) => {
  const requestOptions = {
    headers,
    method,
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  if (!baseUrl) {
    baseUrl = CONFIG.API_ROOT_PATH;
  }

  fetch(baseUrl + url, requestOptions)
    .then((response) => {
      const { status } = response;

      if (status === 202 || status === 200) {
        return response.json();
      }

      return resolve({ success: true });
    })
    .then((e) => {
      if (!e) {
        return {};
      }

      return resolve(e);
    });
}));

export default {
  get: ({
    url, headers, baseUrl,
  }) => request({
    url, headers, baseUrl, method: 'GET',
  }),

  post: ({
    url, headers, body, baseUrl,
  }) => request({
    url, headers, body, baseUrl, method: 'POST',
  }),

  put: ({
    url, headers, body, baseUrl,
  }) => request({
    url, headers, body, baseUrl, method: 'PUT',
  }),

  delete: ({
    url, headers, baseUrl,
  }) => request({
    url, headers, baseUrl, method: 'DELETE',
  }),

  patch: ({
    url, headers, body, baseUrl,
  }) => request({
    url, headers, body, baseUrl, method: 'PATCH',
  }),

  request: ({
    url, headers, baseUrl, body = null, method = 'GET',
  }) => request({
    url, headers, baseUrl, method, body,
  }),
};

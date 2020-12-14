export default {
  required: (message = '') => ({
    isValid: (value) => (
      !!Object.keys(typeof value === 'object' ? value : value.toString()).length
    ),
    message: () => message || 'This field is required!',
  }),

  email: (message = '') => ({
    isValid: (value) => {
      const emailRegex = /^([a-zA-Z0-9_\\-\\.\\+]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$/;
      return emailRegex.test(value);
    },
    message: () => message || 'The value must be a valid email',
  }),

  number: (message = '') => ({
    isValid: (value) => (
      /^[\d]+$/.test(value)
    ),
    message: () => message || 'The value is not a valid number',
  }),

  number_max: (number, message = '') => ({
    isValid: (value) => (
      parseFloat(value) < number
    ),
    message: () => message || `The value must be less then ${number}`,
  }),

  number_min: (number, message = '') => ({
    isValid: (value) => (
      parseFloat(value) > number
    ),
    message: () => message || `The value must be greater then ${number}`,
  }),

  string_max: (number, message = '') => ({
    isValid: (value) => (
      value.length < number
    ),
    message: () => message || `The value must be less then ${number} characters`,
  }),

  string_min: (number, message = '') => ({
    isValid: (value) => (
      value.length >= number
    ),
    message: () => message || `The value must be at least ${number} characters`,
  }),

  true: (message = '') => ({
    isValid: (value) => (
      value === true
    ),
    message: () => message || 'This field is required!',
  }),
};

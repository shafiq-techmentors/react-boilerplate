import React, { useEffect, useState } from 'react';
import Text from './text';
import Select from './select';
import TextArea from './text-area';

export default ({
  fields: fieldsProp = [],
}) => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    setFields(fieldsProp);
  }, [fieldsProp]);

  const setFieldValue = ({ name, value }) => {
    setFields(fields => {
      const fieldIndex = fields.findIndex(e => e.name === name);
      fields[fieldIndex].value = value;
      return [...fields];
    });
  }

  return (
    <form className="container">
      {fields.map((fieldProps) => {
        const { type = 'text', name } = fieldProps;
        if (type === 'text') {
          return <Text {...fieldProps} onChange={(value) => setFieldValue({ name, value })} key={name} />
        } else if (type === 'select') {
          return <Select {...fieldProps} onChange={(value) => setFieldValue({ name, value })} key={name} />
        } else if (type === 'textarea') {
          return <TextArea {...fieldProps} onChange={(value) => setFieldValue({ name, value })} key={name} />
        }

        return <></>;
      })}

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
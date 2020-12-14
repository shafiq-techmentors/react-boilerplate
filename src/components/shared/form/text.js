import React from 'react';

export default ({
  label,
  value,
  onChange,
  error,
}) => (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input type="email" className="form-control" onChange={e => onChange(e.target.value)} value={value} />
      {error && <div className="form-text text-danger">{error}</div>}
    </div>
  );

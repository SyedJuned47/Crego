import React from 'react';

const Expression = ({ expression, onDelete, onExpressionChange }) => {
  return (
    <div className="mb-3 border p-3">
      <label className="form-label">Rule Type</label>
      <select
        className="form-select"
        value={expression.key}
        onChange={(e) => onExpressionChange('key', e.target.value)}
      >
        <option value="age">Age</option>
        <option value="credit_score">Credit Score</option>
        <option value="account_balance">Account Balance</option>
      </select>

      <label className="form-label">Operator</label>
      <select
        className="form-select"
        value={expression.output.operator}
        onChange={(e) => onExpressionChange('operator', e.target.value)}
      >
        <option value=">">{">"}</option>
        <option value="<">{"<"}</option>
        <option value=">=">{">="}</option>
        <option value="<=">{"<="}</option>
        <option value="=">{"="}</option>
      </select>

      <label className="form-label">Value</label>
      <input
        type="number"
        className="form-control"
        value={expression.output.value}
        onChange={(e) => onExpressionChange('value', e.target.value)}
      />

      <label className="form-label">Score</label>
      <input
        type="number"
        className="form-control"
        value={expression.output.score}
        onChange={(e) => onExpressionChange('score', e.target.value)}
      />

      <button className="btn btn-danger mt-3" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Expression;

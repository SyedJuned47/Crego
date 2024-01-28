import React, { useState } from 'react';
import Expression from './Expression';

const ExpressionForm = () => {
  const [expressions, setExpressions] = useState([
    {
      key: '',
      output: { value: 0, operator: '>=', score: 0 },
    },
  ]);
  const [combinator, setCombinator] = useState('and');

  const addExpression = () => {
    setExpressions([...expressions, { key: '', output: { value: 0, operator: '>=', score: 0 } }]);
  };

  const deleteExpression = (index) => {
    const updatedExpressions = [...expressions];
    updatedExpressions.splice(index, 1);
    setExpressions(updatedExpressions);
  };

  const handleExpressionChange = (index, field, value) => {
    const updatedExpressions = [...expressions];
    updatedExpressions[index].output[field] = value;
    setExpressions(updatedExpressions);
  };

  const handleCombinatorChange = (value) => {
    setCombinator(value);
  };

// ... (existing code)

const generateJsonOutput = () => {
    const jsonOutput = {
      rules: expressions,
      combinator: combinator,
    };
    alert(JSON.stringify(jsonOutput, null, 2));
    console.log(JSON.stringify(jsonOutput, null, 2));
  };
  
  // ... (existing code)
  

  return (
    <div>
      <div className="mb-3">
        <div
          style={{
            background: '#007BFF',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '5px',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <h2 style={{ margin: '0' }}>Expression Engine UI</h2>
        </div>

        <label className="form-label">Connector Type</label>
        <select
          className="form-select"
          value={combinator}
          onChange={(e) => handleCombinatorChange(e.target.value)}
        >
          <option value="and">AND</option>
          <option value="or">OR</option>
        </select>
      </div>
      {expressions.map((expression, index) => (
        <Expression
          key={index}
          expression={expression}
          onDelete={() => deleteExpression(index)}
          onExpressionChange={(field, value) => handleExpressionChange(index, field, value)}
        />
      ))}
      <button className="btn btn-primary" onClick={addExpression}>
        Add Expression
      </button>
      <button className="btn btn-success mt-3" onClick={generateJsonOutput}>
        Generate JSON Output
      </button>
    </div>
  );
};

export default ExpressionForm;

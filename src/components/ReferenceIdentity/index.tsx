import React, { useState } from 'react';
import { getIdentityResult, Value } from './utils'

import styles from './styles.module.scss';

const INITIAL_VALUES = {
  name: '',
  equality1: '',
  equality2: '',
  equality3: '',
  equality4: '',
  equality5: '',
  equality6: '',
  equality7: '',
  equality8: '',
  equality9: '',
  equality10: '',
  equality11: '',
  equality12: '',
  equality13: ''
}

// 1. Read the following post: http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
// 5. Try to avoid using the console and instead, using the post mentioned above, think the answer
function ReferenceIdentity() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>();
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const response = await getIdentityResult(values);
    console.log(values);
    setLoading(false);
    setResult(response.ok ? response.data?.result : 'Service is not working');
  }

  return (
    <form onSubmit={handleSubmit}> {/* Add a form element here */}
      <span className={styles.result}>Result: {result ?? "No submission yet"}</span>
      <div className="row default-margin">
        <label className={styles.label}>Your name: </label>
        <input name="name" onChange={e => setValues({ ...values, name: e.target.value })} />
      </div>
      <div className="row default-margin">
        <label className={styles.label}>undefined === undefined </label>
        <input name="equality1" onChange={e => setValues({ ...values, equality1: e.target.value })} />
      </div>
      <div className="row default-margin">
        <label className={styles.label}>null === null </label>
        <input name="equality2" onChange={e => setValues({ ...values, equality2: e.target.value })} />
      </div>
      <div className="row default-margin">
        <label className={styles.label}>true === true </label>
        <input name="equality3" onChange={e => setValues({ ...values, equality3: e.target.value })} />
      </div>
      <div className="row default-margin">
        <label className={styles.label}>'foo' === 'foo' </label>
        <input name="equality4" onChange={e => setValues({ ...values, equality4: e.target.value })} />
      </div>
      <div className="row default-margin">
        <label className={styles.label}>0 === false </label>
        <input name="equality5" onChange={e => setValues({ ...values, equality5: e.target.value })} />
      </div>
      <div className="row default-margin">
        <label className={styles.label}>'17' === 17 </label>
        <input name="equality6" onChange={e => setValues({ ...values, equality6: e.target.value })} />
      </div>
      <div className="row default-margin">
        <label className={styles.label}>[1, 2] === '1,2' </label>
        <input name="equality7" onChange={e => setValues({ ...values, equality7: e.target.value })} />
      </div>
      <div className="row default-margin">
        <label className={styles.label}>null === undefined </label>
        <input name="equality8" onChange={e => setValues({ ...values, equality8: e.target.value })} />
      </div>
      <div className="row default-margin">
        <label className={styles.label}>null === false </label>
        <input name="equality9" onChange={e => setValues({ ...values, equality9: e.target.value })} />
      </div>
      <div className="row default-margin">
        <label className={styles.label}>false === undefined </label>
        <input name="equality10" onChange={e => setValues({ ...values, equality10: e.target.value })} />
      </div>
      <div className="row default-margin">
        <label className={styles.label}>{"{ foo: 'bar' }"} === { "{ foo: 'bar' }" } </label>
        <input name="equality11" onChange={e => setValues({ ...values, equality11: e.target.value })} />
      </div>
      <div className="row default-margin">
        <label className={styles.label}>['foo', 'bar' ] === ['foo', 'bar' ] </label>
        <input name="equality12" onChange={e => setValues({ ...values, equality12: e.target.value })} />
      </div>
      <div className="row">
        <label className={styles.label}>{"function(){ return 1; }"} === {"function(){ return 1; }"} </label>
        <input name="equality13" onChange={e => setValues({ ...values, equality13: e.target.value })} />
      </div>
      <button type="submit" disabled={loading}>Send responses</button>
    </form>
  )
}

export default ReferenceIdentity;
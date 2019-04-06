import React, { useState } from 'react';
import { api } from '../config';

export default function TodoForm() {
  const [service, setService] = useState({
    name: '',
    description: '',
    contact: '',
    provider: ''
  });

  const [message, setMessage] = useState({ message: '', type: '' });

  function onChange(e) {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  }

  async function handleSubmitForm(event) {
    try {
      event.preventDefault();
      if (!localStorage.getItem('user') || !localStorage.getItem('jwt')) {
        throw { message: 'Please login' };
      }
      await api.get(`/services`, service);
      setMessage({ message: 'Services successfully added', type: 'success' });
    } catch (err) {
      console.error(err);
      setMessage({ message: err.message || err.msg, type: 'error' });
    }
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <form onSubmit={handleSubmitForm} method="POST">
          <br />
          {message.message && (
            <div
              className={`alert alert-dismissible fade show alert-${
                message.type === 'success' ? 'success' : 'danger'
              }`}
              role="alert"
            >
              {message.message}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          <h4>Add Service</h4>
          <div className="form-group row">
            <label className="col-sm-2">Service Name</label>
            <div className="col-sm-8">
              <input
                className="form-control"
                name="name"
                value={service.name}
                autoFocus={true}
                placeholder="Add Your Service"
                onChange={onChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2">Service Details</label>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                name="description"
                value={service.description}
                autoFocus={true}
                placeholder="Add Your Service Description"
                onChange={onChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2">Contact Details</label>
            <div className="col-sm-8">
              <input
                className="form-control"
                name="contact"
                value={service.contact}
                autoFocus={true}
                placeholder="Add Your Contact"
                onChange={onChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group">
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

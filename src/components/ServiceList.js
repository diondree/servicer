import React, { useContext } from 'react';
import Store from '../context';

export default function ServiceList() {
  const { state } = useContext(Store);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-8">
            <br />
            <h4>Service List</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {state.services.map(s => (
              <div>
                <div key={s} class="card">
                  <h5 className="card-header">{s.title}</h5>
                  <div className="card-body">
                    <h6 className="card-title">{s.provider}</h6>
                    <p className="card-text">{s.description}</p>
                    <a href={`mailto:${s.email}`} className="btn btn-primary">
                      Contact
                    </a>
                  </div>
                </div>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

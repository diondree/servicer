import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../config';

export default function ServiceList() {
  const [services, setServices] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getServices = async () => {
      try {
        setIsError(false);
        const { data } = await axios.get(`${api.url}/services`);
        setServices(data);
        return data;
      } catch (err) {
        console.error(err);
        setIsError(true);
      }
    };
    getServices();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-8">
            <br />
            <h4>Service List</h4>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {isError && <div>Something went wrong ...</div>}
            {services.length === 0 && (
              <div>No services listed as yet. Feel free to list yours</div>
            )}
            {services.map(s => (
              <div key={s.id}>
                <div className="card">
                  <h5 className="card-header">{s.name}</h5>
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

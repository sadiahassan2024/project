import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Dashboard() {
  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Admin Dashboard</h2>

        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Filter
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/all">All Members</Dropdown.Item>
            <Dropdown.Item href="#/active">Active Plans</Dropdown.Item>
            <Dropdown.Item href="#/expired">Expired Plans</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <div className="card p-3">Members: ‑</div>
        </div>
        <div className="col-sm-4">
          <div className="card p-3">Active Plans: ‑</div>
        </div>
        <div className="col-sm-4">
          <div className="card p-3">Upcoming Classes: ‑</div>
        </div>
      </div>
    </div>
  );
}

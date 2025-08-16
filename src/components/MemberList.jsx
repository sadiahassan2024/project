import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

export default function MemberList() {
  const { data = [], isLoading, error } = useQuery(['members'], () => axios.get('/api/members').then(res => res.data));
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading members</p>;
  return (
    <Table striped bordered hover>
      <thead><tr><th>Name</th><th>Plan</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        {data.map(m => (
          <tr key={m.id}>
            <td>{m.name}</td><td>{m.plan}</td><td>{m.active ? 'Active' : 'Expired'}</td>
            <td><Button size="sm">View</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}


import React, { useState,useEffect } from "react";
import { Table, Header } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  });

  return (
    <div>
        <Header size='huge' textAlign="left">Employers</Header>
      <Table celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Mail</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.mail}</Table.Cell>
              <Table.Cell>{employer.website}</Table.Cell>
              <Table.Cell>{employer.phone}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

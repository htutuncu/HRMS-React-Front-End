import React from "react";
import { useState, useEffect } from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService";

export default function JobPositionList() {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then(result => setPositions(result.data.data));
  } );

  return (
    <div>
      <Header as="h2">
      <Icon name="bell outline" />
        <Header.Content>Job Position List</Header.Content>
      </Header>
      <Table color="purple" key="purple">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {positions.map((position) => (
            <Table.Row key={position.id}>
              <Table.Cell>{position.jobName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
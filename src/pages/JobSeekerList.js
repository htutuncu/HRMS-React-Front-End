import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";

export default function JobSeekerList() {
  const [jobseekers, setJobseekers] = useState([]);

  useEffect(()=>{
      let jobSeekerService = new JobSeekerService()
      jobSeekerService.getJobSeekers().then(result=>setJobseekers(result.data.data))
  })  

  return (
    <Table celled fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>Mail</Table.HeaderCell>
          <Table.HeaderCell>National Id</Table.HeaderCell>
          <Table.HeaderCell>Birth Year</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {jobseekers.map((jobseeker) => (
          <Table.Row>
            <Table.Cell>{jobseeker.firstName}</Table.Cell>
            <Table.Cell>{jobseeker.lastName}</Table.Cell>
            <Table.Cell>{jobseeker.mail}</Table.Cell>
            <Table.Cell>{jobseeker.nationalIdentity}</Table.Cell>
            <Table.Cell>{jobseeker.birthYear}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

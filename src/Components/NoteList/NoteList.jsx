import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import styles from "./styles.module.css";
import moment from "moment";

const NoteList = ({ data }) => {
    
  return (
    <>
      <Card className={styles.card}>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.message}</Card.Text>
          <Card.Text>{moment(data.createdAt).format("HH:mm")}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default NoteList;

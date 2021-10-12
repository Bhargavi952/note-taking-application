import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import styles from "./styles.module.css";
import moment from "moment";

const NoteList = ({ data }) => {
  return (
    <>
      <Card className={styles.card}>
        <Card.Body className={styles.card_body}>
          <div>
            <Card.Title>Title : {data.title}</Card.Title>
            <Card.Text>Message : {data.message}</Card.Text>
          </div>
          <div>
            <Card.Text>Time : {moment(data.createdAt).format("HH:mm")}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default NoteList;

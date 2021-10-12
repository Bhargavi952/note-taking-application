import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import styles from "./styles.module.css";

const NoteList = ({data} ) => {
    
  
  return (
    <div>
      <Card className={styles.card}>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
           {data.message}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoteList;

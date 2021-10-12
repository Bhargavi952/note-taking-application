import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createDataRequest, fetchAllDataRequest } from "../../Redux/actions";
import styles from "./styles.module.css";

const NoteForm = () => {
  // const data = useSelector((state) => state);
  // console.log(data);
  const dispatch = useDispatch();


  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    date: selectedDate,
    createdAt: new Date(),
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const { title, message } = formData;
  // console.log(selectedDate);

  const handleSubmit = () => {
    // console.log(formData);
    dispatch(createDataRequest(formData));
  };
  
  useEffect(() => {
    dispatch(fetchAllDataRequest());
  }, [formData]);

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
      />
      {open ? (
        <div style={{ width: "300px" }}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                value={title}
                onChange={handleChange}
                type="text"
                placeholder="Enter Title"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                name="message"
                value={message}
                onChange={handleChange}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
          <Button className={styles.btn} onClick={handleSubmit}>
            Sumbit
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default NoteForm;

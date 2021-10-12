import React, { useEffect } from "react";
import NoteForm from "../../Components/NoteForm/NoteForm";
import NavBar from "../../Components/NavBar/Navbar";
import NoteList from "../../Components/NoteList/NoteList";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDataRequest } from "../../Redux/actions";
// import {setData , getData} from '../../Utils/LocalStorage'

const Home = () => {
  const data = useSelector((state) => state);
  console.log(data);
  console.log(data.isLoading)
  // setData("data" , data.notedata.data)
  // console.log(getData('data'))
  // let isLoading = data.isLoading
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDataRequest());
  }, []);
  return (
    <>
      <NavBar />
      <section className={styles.home_container}>
        <div className={styles.right_container}>
          <NoteForm />
        </div>
        <div className={styles.left_container}>
          {data.notedata.data?.map((item) => {
            return <NoteList data={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Home;

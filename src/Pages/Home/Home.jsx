import React, { useEffect, useState } from "react";
import NoteForm from "../../Components/NoteForm/NoteForm";
import NavBar from "../../Components/NavBar/Navbar";
import NoteList from "../../Components/NoteList/NoteList";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDataRequest } from "../../Redux/actions";
import { setData, getData } from "../../Utils/LocalStorage";
import Footer from "../../Components/Footer/Footer";
import PropagateLoader from "react-spinners/PropagateLoader";

const Home = () => {
  let [color, setColor] = useState("#212529");

  const data = useSelector((state) => state);

  let isLoading = data.isLoading;

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
          {isLoading ? (
            <div className={styles.loader}>
              <PropagateLoader color={color} loading={isLoading} size={15} />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {data.Notedata.data?.map((item) => {
                return <NoteList data={item} />;
              })}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;

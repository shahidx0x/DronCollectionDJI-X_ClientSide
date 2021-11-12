import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddReview.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router";

const AddReview = () => {
  const notify = () => toast.success("Submitted Successfully ");
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const history = useHistory();
  const onSubmit = (data) => {
    const img_url = user.photoURL;
    const name = data.name;
    const rev = data.rev;
    console.log(img_url, name, rev);
    axios({
      method: "post",
      url: "https://dronsite.herokuapp.com/reviews",
      data: {
        img: img_url,
        name: name,
        rev: rev,
      },
    });
    notify();
    setTimeout(() => {
      history.push("/home");
    }, 1000);
  };
  return (
    <Container style={{ marginTop: "100px" }}>
      <ToastContainer />
      <div className="add-service">
        <h2 className="text-center">
          <span>Please Review Our Products</span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            defaultValue={user.displayName}
            {...register("name", { required: true, maxLength: 80 })}
          />
          <textarea
            {...register("rev", { required: true })}
            placeholder="Write Review"
          />
          <input
            style={{ border: "3px solid darkred", borderRadius: "15px" }}
            type="submit"
          />
        </form>
      </div>
    </Container>
  );
};

export default AddReview;

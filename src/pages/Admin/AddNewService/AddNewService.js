import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddNewService.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useHistory } from "react-router";

const AddNewService = () => {
  const notify = () => toast.success("Submitted Successfully ");
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    axios.post("http://dronsite.herokuapp.com/products", data);
    notify();
    setTimeout(() => {
      history.push("/packages");
    }, 1000);
  };
  return (
    <Container style={{ marginTop: "100px" }}>
      <ToastContainer />
      <div className="add-service">
        <h2 className="text-center">
          <span>Add a New Product</span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Product Name"
            {...register("name", { required: true, maxLength: 80 })}
          />
          <input
            type="number"
            placeholder="Price"
            {...register("price", { required: true })}
          />
          <input
            type="url"
            placeholder="Upload Image Url"
            {...register("img", { required: true })}
          />
          <textarea
            {...register("des", { required: true })}
            placeholder="description"
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

export default AddNewService;

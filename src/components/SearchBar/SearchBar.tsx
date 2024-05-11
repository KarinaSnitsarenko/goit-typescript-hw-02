import React from "react";
import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import * as yup from "yup";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSetSearchQuery: (searchTerm: string) => void;
}

const searchFormSchema = yup.object().shape({
  searchTerm: yup.string().required("Required"),
});

const initialValues = {
  searchTerm: "",
};

const SearchBar: React.FC<SearchBarProps> = ({ onSetSearchQuery }) => {
  const handleSubmit = (values: { searchTerm: string }, { resetForm }: any) => {
    if (!values.searchTerm.trim()) {
      toast.error("Please enter a search term");
      return;
    }
    onSetSearchQuery(values.searchTerm.trim());
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={searchFormSchema}
      onSubmit={handleSubmit}
    >
      <header className={css.header}>
        <Form>
          <Field
            type="text"
            name="searchTerm"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit" aria-label="Search">
            🔍
          </button>
        </Form>
      </header>
    </Formik>
  );
};

export default SearchBar;

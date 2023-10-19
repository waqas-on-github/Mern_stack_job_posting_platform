import { useFormik } from "formik";
import * as Yup from "yup";
const AddJob = () => {
  const formik = useFormik({
    initialValues: {
      company: "",
      position: "",
      jobStatus: "",
      jobType: "",
      jobLocation: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h3> Add Job </h3>

      <label htmlFor="position"> position</label>
      <input id="position" type="text" {...formik.getFieldProps("position")} />
      {formik.touched.position && formik.errors.position ? (
        <div>{formik.errors.position}</div>
      ) : null}

      <label htmlFor="company">company</label>
      <input id="company" type="text" {...formik.getFieldProps("company")} />
      {formik.touched.company && formik.errors.company ? (
        <div>{formik.errors.company}</div>
      ) : null}

      <label htmlFor="jobLocation"> Job Location</label>
      <input
        id="jobLocation"
        type="text"
        {...formik.getFieldProps("jobLocation")}
      />
      {formik.touched.jobLocation && formik.errors.jobLocation ? (
        <div>{formik.errors.jobLocation}</div>
      ) : null}

      <label htmlFor="jobStatus">job Status</label>
      <select
        name="jobStatus"
        type="text"
        {...formik.getFieldProps("jobStatus")}
      >
        <option value="#" hidden>job status</option>
        <option value="pending" selected>pending</option>
        <option value="interview">interview</option>
        <option value="declined">declined</option>
      </select>
      {formik.touched.jobStatus && formik.errors.jobStatus ? (
        <div> {formik.errors.jobStatus}</div>
      ) : null}

      <label htmlFor="jobType">job type</label>
      <select name="jobType" type="text" {...formik.getFieldProps("jobType")}>
        <option value="#" hidden>job type</option>
        <option value="full-time">full-time</option>
        <option value="part-time">part-time</option>
        <option value="internship">internship</option>
      </select>
      {formik.touched.jobType && formik.errors.jobType ? (
        <div> {formik.errors.jobType}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddJob;

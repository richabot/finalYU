// import React, { useState } from 'react';
// import * as Yup from 'yup';


// const validationSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   age: Yup.number().required('Age is required'),
//   sex: Yup.string().required('Sex is required'),
//   mobile: Yup.string()
//     .matches(/^[6-9]\d{9}$/, 'Mobile number must be a valid Indian mobile number')
//     .nullable(),
//   emergencyContactNumber: Yup.string()
//     .matches(/^[6-9]\d{9}$/, 'Emergency contact number must be a valid Indian mobile number')
//     .nullable(),
//   govtIdType: Yup.string().nullable(),
//   govtId: Yup.string()
//     .when('govtIdType', {
//       is: 'Aadhar',
//       then: Yup.string()
//         .matches(/^\d{12}$/, 'Govt ID must be a valid 12-digit numeric string')
//         .nullable(),
//       otherwise: Yup.string().nullable(),
//     })
//     .when('govtIdType', {
//       is: 'PAN',
//       then: Yup.string()
//         .matches(/^[A-Z]{5}\d{4}[A-Z]{1}$/, 'Govt ID must be a valid 10-digit alpha-numeric string')
//         .nullable(),
//       otherwise: Yup.string().nullable(),
//     }),
// });

// const LoginForm = () => {
//   const [values, setValues] = useState({
//     name: '',
//     age: '',
//     sex: '',
//     mobile: '',
//     emergencyContactNumber: '',
//     govtIdType: '',
//     govtId: '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setValues((prevValues) => ({ ...prevValues, [name]: value }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await validationSchema.validate(values, { abortEarly: false });
//       console.log(values);
//       setErrors({});
//     } catch (err) {
//       if (err instanceof Yup.ValidationError) {
//         const newErrors = {};
//         err.inner.forEach((error) => {
//           newErrors[error.path] = error.message;
//         });
//         setErrors(newErrors);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name</label>
//       <input
//         type="text"
//         name="name"
//         value={values.name}
//         onChange={handleChange}
//       />
//       {errors.name && <div>{errors.name}</div>}

//       <label htmlFor="age">Age</label>
//       <input
//         type="number"
//         name="age"
//         value={values.age}
//         onChange={handleChange}
//       />
//       {errors.age && <div>{errors.age}</div>}

//       <label htmlFor="sex">Sex</label>
//       <select name="sex" value={values.sex} onChange={handleChange}>
//         <option value="">Select</option>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//         <option value="other">Other</option>
//       </select>
//       {errors.sex && <div>{errors.sex}</div>}

//       <label htmlFor="mobile">Mobile</label>
//       <input
//         type="text"
//         name="mobile"
//         value={values.mobile}
//         onChange={handleChange}
//       />
//       {errors.mobile && <div>{errors.mobile}</div>}

//       <label htmlFor="emergencyContactNumber">Emergency Contact Number</label>
//       <input
//         type="text"
//         name="emergencyContactNumber"
//         value={values.emergencyContactNumber}
//         onChange={handleChange}
//       />
//       {errors.emergencyContactNumber && (
//         <div>{errors.emergencyContactNumber}</div>
//       )}

//       <label htmlFor="govtIdType">Govt ID Type</label>
//       <select
//         name="govtIdType"
//         value={values.govtIdType}
//         onChange={handleChange}
//       >
//         <option value="">Select</option>
//         <option value="Aadhar">Aadhar</option>
//         <option value="PAN">PAN</option>
//       </select>

//       <label htmlFor="govtId">Govt ID</label>
//       <input
//         type="text"
//         name="govtId"
//         value={values.govtId}
//         onChange={handleChange}
//         />
//         {errors.govtId && (
//         <div>{errors.govtId}</div>
//       )}
//       <form/>)
//       export default LoginForm



import React, { useState } from 'react'
import * as Yup from 'yup';

 const LoginForm = () => {


const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    age: Yup.number().required('Age is required'),
    sex: Yup.string().required('Sex is required'),
    mobile: Yup.string()
      .matches(/^[6-9]\d{9}$/, 'Mobile number must be a valid Indian mobile number')
      .nullable(),
    emergencyContactNumber: Yup.string()
      .matches(/^[6-9]\d{9}$/, 'Emergency contact number must be a valid Indian mobile number')
      .nullable(),
    govtIdType: Yup.string().nullable(),
    govtId: Yup.string().when('govtIdType', (govtIdType, schema) => {
      if (govtIdType == 'PAN') {
        return schema.matches(
          /^[A-Z]{5}\d{4}[A-Z]{1}$/,
          'Govt ID must be a valid 10-digit alpha-numeric string'
        );
      } else if (govtIdType == 'Aadhar') {
        return schema.matches(/^\d{12}$/, 'Govt ID must be a valid 12-digit numeric string');
      } else {
        return schema;
      }
    }),
  });
  
  const [values, setValues] = useState({
    name: '',
    age: '',
    sex: '',
    mobile: '',
    emergencyContactNumber: '',
    govtIdType: '',
    govtId: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate(values, { abortEarly: false });
      console.log(values,"success");


      
      
      setErrors({});
      
      const response = await fetch('http://localhost:8080/api/formdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });



      if (response.ok) {
        console.log('Form data successfully submitted');
      } else {
        console.error('Failed to submit form data');
      }
      
    } 
    
    
    
    
    catch (err) {
        console.log(err,"error")
      if (err instanceof Yup.ValidationError) {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
  
       <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      {errors.name && <div>{errors.name}</div>}

      <label htmlFor="age">Age</label>
      <input
        type="number"
        name="age"
        value={values.age}
        onChange={handleChange}
      />
      {errors.age && <div>{errors.age}</div>}

      <label htmlFor="sex">Sex</label>
      <select name="sex" value={values.sex} onChange={handleChange}>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {errors.sex && <div>{errors.sex}</div>}

      <label htmlFor="mobile">Mobile</label>
      <input
        type="text"
        name="mobile"
        value={values.mobile}
        onChange={handleChange}
      />
      {errors.mobile && <div>{errors.mobile}</div>}

      <label htmlFor="emergencyContactNumber">Emergency Contact Number</label>
      <input
        type="text"
        name="emergencyContactNumber"
        value={values.emergencyContactNumber}
        onChange={handleChange}
      />
      {errors.emergencyContactNumber && (
        <div>{errors.emergencyContactNumber}</div>
      )}

      <label htmlFor="govtIdType">Govt ID Type</label>
      <select
        name="govtIdType"
        value={values.govtIdType}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Aadhar">Aadhar</option>
        <option value="PAN">PAN</option>
      </select>

      <label htmlFor="govtId">Govt ID</label>
      <input
        type="text"
        name="govtId"
        value={values.govtId}
        onChange={handleChange}
        />
        {errors.govtId && (
        <div>{errors.govtId}</div>
      )}
      <input type='submit' />
      </form>
  )
}

export default LoginForm
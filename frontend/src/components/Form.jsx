import React from 'react'

const Form = () => {
  return (
    <div>
        <div style={{ display: 'flex' }}>
        <p style={{ display: 'inline-block', marginRight: '10px' }}>Name</p>
        <input style={{ marginRight: '10px' }} />
        <p style={{ display: 'inline-block', marginRight: '10px' }}>Date of Birth or age</p>
        <input style={{ marginRight: '10px' }} />
        <p style={{ display: 'inline-block', marginRight: '10px' }}>Sex</p>
        <select name="sex" >
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      </div>
      <div style={{ display: 'flex' }}>
        <p style={{ display: 'inline-block', marginRight: '10px' }}>Mobile</p>
        <input style={{ marginRight: '10px' }} />
        <p style={{ display: 'inline-block', marginRight: '10px' }}>Govt Issued Id</p>
        <select name="sex" >
        <option value="">Select</option>
        <option value="male">Aadhar</option>
        <option value="female">PAN</option>
      </select>
        <input style={{ marginRight: '10px' }} />
       
      
   
      </div>
<p>
    Personal Details</p>
    <div style={{ display: 'flex' }}>
        <p style={{ display: 'inline-block', marginRight: '10px' }}>Gaurdian Details</p>
       
      
        <select name="sex" >
        <option value="">Father</option>
        <option value="male">Mother</option>
        <option value="female">Other</option>
      </select>
        <input style={{ marginRight: '10px' }} />
       
      
        <p style={{ display: 'inline-block', marginRight: '10px' }}>Email</p>
        <input style={{ marginRight: '10px' }} />
        <p style={{ display: 'inline-block', marginRight: '10px' }}>Emergency contact number</p>
        <input style={{ marginRight: '10px' }} />
      </div>

      Address Details
      <div style={{ display: 'flex' }}>
        <p style={{ display: 'inline-block', marginRight: '10px' }}>Address</p>
        <input style={{ marginRight: '10px' }} />
        <p style={{ display: 'inline-block', marginRight: '10px' }}>State</p>
        <input style={{ marginRight: '10px' }} />
        <p style={{ display: 'inline-block', marginRight: '10px' }}>CIty</p>
        <input style={{ marginRight: '10px' }} />
      </div>
      
      <div style={{ display: 'flex' }}>
      <p style={{ display: 'inline-block', marginRight: '10px' }}>Country</p>
        <input style={{ marginRight: '10px' }} />
        <p style={{ display: 'inline-block', marginRight: '10px' }}>Pincode</p>
        <input style={{ marginRight: '10px' }} />
      </div>

Other Details
<div style={{ display: 'flex' }}>
      <p style={{ display: 'inline-block', marginRight: '10px' }}>Occupation</p>
        <input style={{ marginRight: '10px' }} />
        <p style={{ display: 'inline-block', marginRight: '10px' }}>Religion</p>
        <select name="sex" >
        <option value="">Select</option>
        <option value="male">Hindu</option>
        <option value="female">Muslim</option>
        <option value="female">Chritian</option>
      </select>

      
      </div>


    </div>
        

  )
}

export default Form
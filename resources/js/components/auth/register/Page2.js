import React, { useState } from 'react'


function Page2({ data, setBreed, setGender, setBirthday , setPhone }) {


  return (
    <div className='sub-reg-c'>
      <input
        onChange={(e) => setPhone(e.target.value.trim())}
        type="number" placeholder="Phone number" min={0}/>

      <label>Type : </label>
      <select onChange={(event) => { setBreed(event.target.value) }} >
        {
          data.breeds.map((breed, index) => <option key={index} value={breed.id} > {breed.name} </option>)
        }
      </select>

      <label>Gender : </label>
      <select onChange={(event) => { setGender(event.target.value) }}  >
        <option value={null}> Choose one... </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label>Birthday : </label>
      <input type="date" name="birthday"
        placeholder="dd-mm-yyyy"
        max="2030-12-31" onChange={(event) => { setBirthday(event.target.value) }} ></input>
    </div>

  );
}

export default Page2
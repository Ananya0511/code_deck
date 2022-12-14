import React from 'react'
// import styled from 'styled-components'
import { Header, Heading } from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'


const NewPlaygroundAndFolder = () => {
  return (
    <>
        <Header>
            <Heading>Create New Playground and Create New Folder</Heading> 
            <IoCloseSharp />
        </Header>
        <p>Enter Folder Name: <input type="text" /></p>
        <p>Enter Playground: <input type="text" /></p>
        <select name="" id="">
            <option value="c++">C++</option>
            <option value="java">Java</option>
            <option value="javascript">Javascript</option>
            <option value="python">Python</option>
        </select>
        <button>Create New Playground</button>

    </>
  )
}

export default NewPlaygroundAndFolder
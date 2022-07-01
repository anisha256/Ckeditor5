import React from 'react';
import Ckeditor from '../component/Ckeditor';
import styled from 'styled-components';

const FormContainer = styled.section`
  border: 1 px solid;
`;

const Form = () => {
  return (
    <FormContainer>
      <form>
        <div className="form-group">
          <label htmlFor="text">Title</label>
          <input type="text" name="text" id="text" />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Submit
          </button>
        </div>
      </form>
      <Ckeditor />
    </FormContainer>
  );
};

export default Form;

import styled from 'styled-components';

export default function Login({ onSubmit }) {
  return (
    <Box>
      <Form aria-labelledby="login-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Add your Name"
          autoComplete="off"
          required
        />
        <label htmlFor="color">Choose a color</label>
        <input
          type="color"
          id="color"
          name="color"
          placeholder="Choose a color"
        />
        <button id="login-form">Save</button>
      </Form>
    </Box>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.name;
    const inputColor = form.elements.color;
    onSubmit(inputElement.value, inputColor.value);
    form.reset();
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

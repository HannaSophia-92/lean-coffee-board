import styled from 'styled-components';

export default function Entry({ text, author, color }) {
  return (
    <Card>
      <p>{text}</p>
      <Author color={color}>{author}</Author>
    </Card>
  );
}

const Card = styled.section`
  word-wrap: break-word;
  margin: 20px;
  padding: 20px;
  max-width: 400px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const Author = styled.p`
  color: ${({ color }) => (color ? color : '#999')};
`;

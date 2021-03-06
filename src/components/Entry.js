import styled from 'styled-components';
import { TiDeleteOutline } from 'react-icons/ti';
import dayjs from 'dayjs';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function Entry({
  text,
  author,
  color,
  createdAt,
  onDelete,
  _id,
  isChecked,
  onCheck,
}) {
  return (
    <Card>
      <CheckBox>
        <label htmlFor={'mark-done' + _id}>
          <ScreenReaderOnly>Mark as done</ScreenReaderOnly>
        </label>
        <input
          checked={isChecked}
          onChange={onCheck}
          id={'mark-done' + _id}
          type="checkbox"
        />
      </CheckBox>
      <Date>{dayjs(createdAt).format('DD-MM-YY HH:mm')}</Date>
      <Text>{text}</Text>
      <Author color={color}>{author}</Author>
      <Delete onClick={onDelete}>
        <TiDeleteOutline />
      </Delete>
    </Card>
  );
}

const Card = styled.section`
  display: grid;
  grid-template-rows: 20% 60% 20%;
  align-content: space-between;
  padding: 20px;
  height: 100%;
  padding: 20px;
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const Author = styled.p`
  color: ${({ color }) => (color ? color : '#999')};
`;

const Text = styled.p`
  word-break: break-all;
`;

const Date = styled.small`
  text-align: end;
  color: lightgray;
`;

const Delete = styled.span`
  text-align: end;
  font-size: 1.2em;
  position: absolute;
  right: 10px;
  bottom: 5px;
  cursor: pointer;
  &:hover {
    color: #00beb7;
  }
`;

const CheckBox = styled.div`
  input[type='checkbox'] {
    width: 15px;
    height: 15px;
    color: hotpink;
  }
  position: absolute;
  bottom: 40px;
  right: 14px;
`;

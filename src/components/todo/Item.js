import styled from "styled-components";

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({id, text, onRemove}) {

  return(
    <Styledli>{text}<Styledremovebtn onClick={() => onRemove(id)}>삭제</Styledremovebtn>
    </Styledli>);
}

const Styledli = styled.li`

`;

const Styledremovebtn = styled.button`

`;

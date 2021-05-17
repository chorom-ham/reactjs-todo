import styled from "styled-components";

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({id, text}) {
  return(
    <Styledli>{text}

    </Styledli>);
}

const Styledli = styled.li`

`;

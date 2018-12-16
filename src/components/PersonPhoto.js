import React, { memo } from 'react';
import styled from '@emotion/styled/macro';

const Container = styled.div`
  position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
`;

const Text = styled.h3`
  && {
    margin-bottom: 0px;
    font-weight: 600;
    text-align: center;
    padding: 0.4em 0;
    width: 70%;
  }
`;

const Image = styled.img`
  && {
    @media (min-width: 768px) {
      width: 40%;
    }    
    @media (min-width: 375px) {
      width: 40%;
    }
  }
`;

const PersonPhoto = ({ name, photoLink }) => {
  return (
    <Container>
      <Text>{name}</Text>
      <Image src={photoLink} alt={name} />
    </Container>
  );
};

export default memo(PersonPhoto);

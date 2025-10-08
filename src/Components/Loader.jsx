import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    width: 150px;
    height: 100px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 4px;
  }

  .loader div {
    width: 12px;
    height: 10%;
    background-color: #d9e7f5;
    border-radius: 4px 4px 0 0;
    animation: wave 3.2s cubic-bezier(0.5, 0.2, 0.3, 1) infinite;
    transform-origin: bottom;
    box-shadow: 0 0 10px #578fca;
  }

  @keyframes wave {
    0%,
    100% {
      height: 10%;
    }
    25% {
      height: 100%;
    }
    50% {
      height: 50%;
    }
    75% {
      height: 75%;
    }
  }

  .loader div:nth-child(1) {
    animation-delay: 0.3s;
  }
  .loader div:nth-child(2) {
    animation-delay: 0.2s;
  }
  .loader div:nth-child(3) {
    animation-delay: 0.1s;
  }
  .loader div:nth-child(4) {
    animation-delay: 0.01s;
  }
  .loader div:nth-child(5) {
    animation-delay: 0.1s;
  }
  .loader div:nth-child(6) {
    animation-delay: 0.2s;
  }
  .loader div:nth-child(7) {
    animation-delay: 0.3s;
  }`;

export default Loader;

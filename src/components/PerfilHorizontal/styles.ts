import styled from "styled-components";

export const HeaderPerfil = styled.header`
  background-color: var(--header-color);
  text-align: center;
  height: 30vh;
  background-color: #38BDAE;
  font-family: sans-serif;

  .container {
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    bottom: -50%;

    .profile-avatar {
      border-radius: 50%;
      margin-bottom: 24px;
      width: 180px;
      height: 180px;
    }

    .profile-name {
      font-size: 2em;
    }

    .profile-username {
      margin: 16px 0 32px;
      font-size: 1.1em;
    }

    .profile-link {
      background-color: var(--header-color);
      color: var(--bg-color);
      padding: 8px 16px;
      display: inline-block;
      margin-top: 24px;
      margin-bottom: 24px;
      text-decoration: none;
    }

    .numbers {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .readme {
      margin-top: 20px;
    }
    @media (max-width: 650px) {
      .readme-img {
        width: 80%;
      }
    }

    .numbers-item {
      font-size: 3em;
      font-weight: bold;
    }

    .numbers-item h4 {
      font-size: 0.3em;
    }
  }
`;





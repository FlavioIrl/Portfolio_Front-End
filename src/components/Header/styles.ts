import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: #6d6d6d;
`;

export const NavHeader = styled.nav<{ $hidden: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  z-index: 1000;
  background-color: #1b1b1b;

  transform: ${({ $hidden }) =>
    $hidden ? "translateY(-100%)" : "translateY(0)"};
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  .NavContainer {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    padding: 0 80px;

    @media (max-width: 1024px) {
      justify-content: center;
    }

    @media (max-width: 600px) {
      justify-content: center;
    }
  }

  .LogoNome {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
      line-height: 0.6;
      margin: 0;
      font-size: clamp(1.3rem, 2.5vw, 2.3rem);
      color: #fff;
    }

    p {
      margin: 0 auto;
      font-size: clamp(0.75rem, 2vw, 0.9rem);
      color: #ccc;
    }
  }
  @media (max-width: 1024px) {
    padding: 40px 0 30px 0;
    height: 60px;
  }

  @media (max-width: 600px) {
    padding: 40px 0 25px 0;
    height: 50px;
  }
`;

export const ContainerBottons = styled.div<{ $hideHeader: boolean }>`
  position: fixed;
  top: 18px;
  left: ${({ $hideHeader }) => ($hideHeader ? "50%" : "40%")};
  transform: ${({ $hideHeader }) =>
    $hideHeader ? "translateX(-50%)" : "none"};
  transition:
    height 0.3s ease,
    top 0.3s ease,
    left 0.3s ease,
    transform 0.3s ease;
  z-index: 1100;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #353535;
  border-radius: 16px;
  padding: 0 16px;
  height: 55px;

  @media (max-width: 1024px) {
    z-index: 900;
    top: ${({ $hideHeader }) => ($hideHeader ? "20px" : "55px")};
    padding-top: ${({ $hideHeader }) => ($hideHeader ? "0" : "10px")};
    // height: ${({ $hideHeader }) => ($hideHeader ? "40px" : "60px")};
    overflow-x: auto;

    left: 50%;
    transform: translateX(-50%);
    width: 90%;
  }

  @media (max-width: 600px) {
    z-index: 900;
    top: ${({ $hideHeader }) => ($hideHeader ? "20px" : "50px")};
    padding-top: ${({ $hideHeader }) => ($hideHeader ? "0" : "10px")};
    height: ${({ $hideHeader }) => ($hideHeader ? "40px" : "50px")};
    width: 95%;
    overflow-x: auto;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: hidden;

  .isActive a {
    color: #38bdae;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
    white-space: nowrap;

    a {
      transition:
        transform 0.3s ease,
        text-shadow 0.3s ease;
      font-size: clamp(0.6rem, 2vw, 1rem);
      font-weight: bold;
      color: #fff;
      text-decoration: none;
      padding: 8px 0;

      &:hover {
        transform: scale(1.1);
      }
    }

    &:first-child {
      margin-left: 80px;
    }

    &:last-child {
      margin-right: 80px;
    }

    @media (max-width: 1024px) {
      &:first-child {
        margin-left: 60px;
        margin: 0;
      }

      &:last-child {
        margin-right: 60px;
      }

      padding: 0 16px;
    }

    @media (max-width: 600px) {
      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      padding: 0 12px;
    }
  }
`;

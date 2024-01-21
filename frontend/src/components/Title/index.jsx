/* eslint-disable react/prop-types */
import { Container } from "./styles.title";

export const Title = ({ title, subtitle }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </Container>
  );
};

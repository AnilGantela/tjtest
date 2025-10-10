// --------------------- Styled Components ---------------------
import styled from "styled-components";
export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Helvetica,
    Arial;
  color: #eaf6f3;
  background: linear-gradient(180deg, #020619 0%, #071229 100%);
`;

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
  @media print {
    display: none;
    color: red;
  }
`;

export const HeaderLeft = styled.div`
  flex: 1 1 300px;
  h1 {
    font-size: 1.5rem;
    margin: 0;
  }
`;

export const Meta = styled.div`
  color: #9fb3c8;
  font-size: 0.95rem;
`;

export const HeaderRight = styled.div`
  text-align: right;
  flex: 0 1 250px;
`;

export const Badge = styled.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 6px 10px;
  border-radius: 10px;
  color: #9fb3c8;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Controls = styled.div`
  button {
    background: #7ee7c7;
    color: #032022;
    border: 0;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 700;
  }
  @media print {
    display: none;
  }
`;

export const Card = styled.section`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0.01)
  );
  border: 1px solid rgba(255, 255, 255, 0.03);
  padding: 18px;
  border-radius: 12px;
  margin-bottom: 18px;
`;

export const MonthTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  font-weight: 700;
`;

export const Pill = styled.div`
  background: rgba(255, 255, 255, 0.025);
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 700;
  color: #7ee7c7;
`;

export const Goal = styled.p`
  margin-top: 8px;
  color: #9fb3c8;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th,
  td {
    padding: 10px 12px;
    vertical-align: top;
  }

  th {
    background: rgba(255, 255, 255, 0.02);
    text-align: left;
    color: #7ee7c7;
  }

  td.desc {
    color: #9fb3c8;
  }

  tr + tr td {
    border-top: 1px dashed rgba(255, 255, 255, 0.03);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const Summary = styled.p`
  margin-top: 10px;
  color: #9fb3c8;
`;

export const Footer = styled.footer`
  color: #9fb3c8;
  font-size: 0.9rem;
  margin-top: 20px;
  text-align: center;
`;

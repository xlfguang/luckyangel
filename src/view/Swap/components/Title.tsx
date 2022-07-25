import styled from "styled-components";

export const TitleStyle = styled.h2<{
  fs?: string;
  margin?: string;
  children: any;
  color?: string;
}>`
  font-size: ${({ fs }) => fs || "54px"};
  color: ${({ color }) => color || "#0f2559"};
  margin: ${({ margin }) => margin || "3px 0"};
  transition: all 0.5s;
  :hover{
    transform: scale(1.2);
  }
  `;


export const Title = ({
  margin,
  children,
  color,
  fs,
}: {
  fs?: string;
  margin?: string;
  children: any;
  color?: string;
}) => {
  return (
    <TitleStyle margin={margin} color={color} fs={fs}>
      {children}
    </TitleStyle>
  );
};

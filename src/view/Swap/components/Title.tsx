import styled from "styled-components";

export const TitleStyle = styled.h2<{
  fs?: string;
  margin?: string;
  children: any;
  color?: string;
  ta?: string;
}>`
  font-size: ${({ fs }) => fs || "54px"};
  color: ${({ color }) => color || "#0f2559"};
  margin: ${({ margin }) => margin || "3px 0"};
  text-align: ${({ ta }) => ta || "center"};
  transition: all 0.5s;
  :hover {
    transform: scale(1.2);
  }
`;

export const Title = ({
  margin,
  children,
  color,
  fs,
  ta,
}: {
  fs?: string;
  margin?: string;
  children: any;
  color?: string;
  ta?: string;
}) => {
  return (
    <TitleStyle margin={margin} color={color} fs={fs} ta={ta}>
      {children}
    </TitleStyle>
  );
};

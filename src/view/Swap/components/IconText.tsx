import { Svg } from "@pancakeswap/uikit";

export const IconText = ({ children }: { children: JSX.Element }) => {
  return (
    <p style={{ fontSize: "13px", marginBottom: "5px", color: "#585858" ,textAlign:'left' }}>
      <Svg color="#00407ac4" viewBox="0 0 18 13" mr={"10px"}>
        <path d="M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" />
      </Svg>
      {children}
    </p>
  );
};

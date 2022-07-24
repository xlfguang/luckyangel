import CountUp from "react-countup";
const countUpStyle = {
  border: " 2px solid #0034b4",
  fontSize: "72px",
  margin: "0 0 0 40px",
  borderRadius: "10px",
  padding: "20px",
};
const NumberBox = ({ num }: { num: string }) => {
  return (
    <div>
      {num.split("").map((item, index) => {
        return (
          <CountUp
            key={index}
            style={countUpStyle}
            duration={1}
            useEasing={false}
            end={Number(item)}
          ></CountUp>
        );
      })}
    </div>
  );
};
export default NumberBox;

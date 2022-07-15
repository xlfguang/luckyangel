export const Title = ({margin,children}:{margin?:string,children:any}) => {
  return (
    <h2 style={{ fontSize: "52px", color: "#585858", marginBottom: "20px" ,margin }}>
      {children}
    </h2>
  );
};

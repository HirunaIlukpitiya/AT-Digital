const Paragraph = ({ props }) => {
  return (
    <>
      <h2 className=" text-ATpurple font-semibold">{props.title}</h2>
      <p>{props.text}</p>
    </>
  );
};

export default Paragraph;

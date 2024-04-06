const OrangeButton = ({ props }) => {
  return (
    <button className=" bg-ATorange px-5 py-1 text-white uppercase font-semibold rounded">
      {props.text}
    </button>
  );
};

export default OrangeButton;

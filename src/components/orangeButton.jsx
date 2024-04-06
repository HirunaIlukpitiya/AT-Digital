const OrangeButton = ({ props }) => {
  return (
    <button className=" bg-ATorange px-7 py-2 text-white uppercase font-semibold rounded">
      {props.text}
    </button>
  );
};

export default OrangeButton;

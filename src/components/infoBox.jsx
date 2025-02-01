const InfoBox = ({text, numb, style}) => {
  return (
    <div class="info_box" style={style}>
      <span className="fs_">{text}</span>
      <span style={{opacity: '0.9', fontWeight: '500'}}>{numb}</span>
    </div>
  );
};

export default InfoBox;

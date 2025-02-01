import AlertCategory from './alertCategory';
const Alerts = () => {
  return (
    <div className="main_alert">
      <h6 className="_fs" style={{opacity: '0.9'}}>Alert Category</h6>
      <AlertCategory level="Critical Level" />
      <AlertCategory level="High Level" />
      <AlertCategory level="Medium Level" />
      <AlertCategory level="Low Level" />
    </div>
  );
};

export default Alerts;

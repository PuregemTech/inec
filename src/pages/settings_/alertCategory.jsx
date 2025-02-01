import {alertData} from '../../data';

const AlertCategory = ({level}) => {
  return (
    <div className="alert_container mb-3">
      <div className="alert_cont_header d-flex justify-content-between mb-2">
        <h6>{level}</h6>
        <h6>Add new type +</h6>
      </div>
      <div className="a_cont">
        {alertData.map (({id, title, level, icon}) => (
          <div className="alert_content bg-white" key={id}>
            <h6>{title}</h6>
            <h6>{level}</h6>
            {icon}
          </div>
        ))}

      </div>
    </div>
  );
};

export default AlertCategory;

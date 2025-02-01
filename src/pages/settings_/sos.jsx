import {GiCancel} from 'react-icons/gi';
import SosSection from './sosSection';
import react from 'react';
import Button from '../../components/button';

const Sos = () => {
  return (
    <react.Fragment>
      <SosSection>
        <div className="alert_container mb-3" style={{height: '100px'}}>
          <div className="a_cont sos">
            <div className="alert_content sos_content bg-white">
              <h6>09078467364</h6>
              <GiCancel className="opa" />
            </div>
            <div className="alert_content sos_content bg-white">
              <h6>09078467364</h6>
              <GiCancel className="opa" />
            </div>
            <div className="alert_content sos_content bg-white">
              <h6>09078467364</h6>
              <GiCancel className="opa" />
            </div>
            <div className="alert_content sos_content bg-white">
              <h6>09078467364</h6>
              <GiCancel className="opa" />
            </div>
            <h6
              style={{fontSize: '0.7rem', alignSelf: 'center'}}
              className="opa"
            >
              Type new recipient{' '}
            </h6>
          </div>
        </div>
      </SosSection>

      <SosSection>
        {' '}
        <textarea
          value="Type Emergency Message"
          style={{
            background: '#e9ecef',
            width: '100%',
            height: '100px',
            borderRadius: '0.5rem',
            padding: '1rem 0.7rem',
            fontSize: '0.7rem',
            opacity: '0.6',
            fontWeight: '600',
          }}
        />
      </SosSection>
      <Button
        name=" Save"
        style={{
          background: 'var(--color-primary)',
          color: 'rgba(255, 255, 255, 0.9)',
          width: '10%',
        }}
      />
    </react.Fragment>
  );
};

export default Sos;

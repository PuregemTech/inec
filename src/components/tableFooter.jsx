import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import Button from './button';
import {MdKeyboardArrowDown} from 'react-icons/md';

const TableFooter = () => {
  return (
    <div className="table_footer mt-4">
      <h6>1-8 of 23</h6>
      <div className="foot_icon">
        {/* <ArrowIcon icon={<AiOutlineArrowLeft />} />
                          <ArrowIcon icon={<AiOutlineArrowRight />} /> */}
        <Button
          name={<AiOutlineArrowLeft />}
          style={{
            background: '#fff',
            border: '1px solid var(--color-primary)',
            color: 'var(--color-primary)',
            padding: '0rem 0.4rem',
          }}
        />
        <Button
          name={<AiOutlineArrowRight />}
          style={{
            background: 'var(--color-primary)',
            color: 'rgba(255, 255, 255, 0.9)',
            padding: '0rem 0.4rem',
          }}
        />
      </div>
      <div style={{justifySelf: 'end'}}>
        <h6>
          Rows per page
          {' '}
          <span style={{marginLeft: '0.5rem'}}>
            5<MdKeyboardArrowDown />
          </span>
        </h6>
      </div>
    </div>
  );
};

export default TableFooter;

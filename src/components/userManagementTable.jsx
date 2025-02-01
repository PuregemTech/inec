import {AiTwotoneEdit} from 'react-icons/ai';
import {AiFillDelete} from 'react-icons/ai';
import {dataa} from '../data';
import Avatar from '../images/avatar.png';
import UserBtn from './userBtn';

const UserManagementTable = () => {
  let color = '#e9ecef';

  return (
    <table className="" style={{fontSize: '0.9rem', width: '100%'}}>
      <thead>
        <td>Name</td>
        <td>Phone No</td>
        <td>Password</td>
        <td>Date Added</td>
        <td>Role</td>
        <td>Action</td>
      </thead>
      <tbody>
        {Array (8).fill (dataa[0]).map ((row, index) => (
          <tr
            key={row.id}
            style={{
              backgroundColor: index % 2 === 1 ? color : '',
            }}
          >
            <td>
              <img
                src={Avatar}
                className="user-image rounded-circle shadow"
                alt="User"
                style={{
                  display: 'inline-block',
                  width: '2rem',
                  height: '2rem',
                  marginRight: '0.5rem',
                }}
              />

              {row.name}
            </td>
            <td>{row.phoneNumber}</td>
            <td>{row.password}</td>
            <td>{row.date}</td>
            <td>{row.role}</td>
            <td>
              <div className="d-flex gap-2">
                <UserBtn
                  icon={<AiTwotoneEdit />}
                  style={{
                    color: '#238f53',
                    background: '',
                    border: '1px solid #238f53',
                  }}
                />
                <UserBtn
                  icon={<AiFillDelete />}
                  style={{
                    color: '#ce3232',
                    background: '#f19292',
                    border: '1px solid #ce3232',
                  }}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  );
};

export default UserManagementTable;

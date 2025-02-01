import Button from '../../components/button';
import Input from '../../components/input';
import Avatar from '../../images/avatar.png';
const Profile = () => {
  return (
    <div className="profile_container">
      <div className="profile_pic_container d-flex flex-column gap-4 justify-content-center bg-white py-3">
        <img
          src={Avatar}
          alt="profile"
          className="rounded-circle shadow mx-auto"
        />
        <Button
          name="Upload Profile Picure"
          style={{
            background: '#fff',
            border: '1px solid var(--color-primary)',
            color: 'var(--color-primary)',
            width: '60%',
            margin: '0 auto',
          }}
        />
      </div>
      <div className="profile_details_cont">
        <div className="profile_content">
          <table style={{width: '100%'}}>
            <tr>
              <td><h6 className="_fs opa">First Name</h6></td>
              <td width="35%"><h6 className="_fs">Ifedayo</h6></td>
              <td><h6 className="_fs opa">Last Name </h6></td>
              <td><h6 className="_fs">Osy</h6></td>
            </tr>
            <tr>
              <td><h6 className="_fs opa">Email Address</h6></td>
              <td><h6 className="_fs">train@inec.com</h6></td>
              <td><h6 className="_fs opa">Pone Number</h6></td>
              <td><h6 className="_fs">+234807365764</h6></td>
            </tr>
            <tr>
              <td><h6 className="_fs opa">User Role</h6></td>
              <td rowSpan={3}><h6 className="_fs">Admin</h6></td>
            </tr>
          </table>

        </div>
        <div className="update_password_cont mt-3">
          <h6 className="opa">Update Password</h6>
          <div className="password_cont">
            <div className="form-group">
              <Input
                name="New Password"
                type="password"
                value="***********"
                className="passwordLabel"
                //style={{padding: '0.5rem 0.7rem !important'}}
              />
            </div>
            <div className="form-group">
              <Input
                name="Confirm Password"
                type="password"
                value="***********"
                className="passwordLabel"
                style={{padding: '0 !important'}}
              />
            </div>
          </div>
          <Button
            name="Update"
            style={{
              background: 'var(--color-primary)',
              color: 'rgba(255, 255, 255, 0.9)',
              width: '7rem',
              marginTop: '1rem',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;

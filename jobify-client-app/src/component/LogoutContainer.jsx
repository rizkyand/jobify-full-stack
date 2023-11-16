import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';

const LogoutContainer = () => {
    const {userDummy, isUserLogout} = useDashboardContext();
    const [showLogoutContainer, setShowLogoutContainer] = useState(false);
    return (
        <Wrapper>
            <button type='button'
                    className='btn logout-btn'
                    onClick={()=>setShowLogoutContainer(!showLogoutContainer)}>
                {userDummy.avatar? (
                    <img src={userDummy.avatar} alt='avatar' className='img' />
                ) : <FaUserCircle/>}{userDummy?.name}<FaCaretDown/>
            </button>
            <div className={showLogoutContainer? 'dropdown show-dropdown': 'dropdown'}>
                <button className='dropdown-btn'>logout</button>
            </div>
        </Wrapper>
    );
}

export default LogoutContainer;
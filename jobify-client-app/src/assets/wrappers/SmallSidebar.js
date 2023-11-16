import styled from 'styled-components';

const Wrapper = styled.aside`
  @media (min-width: 992px) {  //hide global change to big sidebar
    display: none;
  }
  
  @media(min-width: 320px){ //mobile
    .content{
      width: var(--fluid-width);
      align-items: center;
    }
    .sidebar-container{
      display: flex;
      justify-content: center;
    }
  }
  
  @media(min-width: 450px){ //web small
    .content{
      width: 50%;
      align-items: flex-start;
    }
    .sidebar-container{
      display: flex;
      justify-content: flex-start;
    }
  }
  
  
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    transform: translateX(-100%);
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
    transform:  translateX(0);
  }
  .content {
    background: var(--background-secondary-color);
    //background: #94a3b8;
    height: 95vh;
    border-radius: 20px;
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    //transition: var(--transition);
    //transform: translateX(-100%);
  }
  
  //.show-sidebar .content{
  //  transform: translateX(0);
  //}
  
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--text-secondary-color);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--primary-500);
  }
  
`;
export default Wrapper;

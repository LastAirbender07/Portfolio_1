import React from 'react'
import SideNavTitle from './SideNavTitle'

const SideNav = () => {
  return (
    <div className='px-7 py-4'>
      <SideNavTitle title="M" subTitle="enu"/>
      <ul>
        <li className='sideNavli'>Resume</li>
        <li className='sideNavli'>Hobbies</li>
      </ul>
      <hr />
      <SideNavTitle title="Pr" subTitle="ojects"/>
      <ul>
      <li className='sideNavli'>Project-1</li>
      <li className='sideNavli'>Project-2</li>
      <li className='sideNavli'>Project-3</li>
      <li className='sideNavli'>Project-4</li>
      <li className='sideNavli'>Project-5</li>
      </ul>
      <hr/>
      <SideNavTitle title="Lat" subTitle="est Posts"/>
      <ul>
      <li className='sideNavli'>Post-1</li>
      <li className='sideNavli'>Post-2</li>
      <li className='sideNavli'>Post-3</li>
      <li className='sideNavli'>Post-4</li>
      <li className='sideNavli'>Post-5</li>
      </ul>
    </div>
  )
}

export default SideNav

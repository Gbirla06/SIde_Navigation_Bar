import React, { useState } from 'react'

function SideNavBar() {
    const [open,setOpen] = useState(true);
    const menuList = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "Inbox", src: "Chat" },
        { title: "Accounts", src: "User", gap: true },
        { title: "Schedule ", src: "Calendar" },
        { title: "Search", src: "Search" },
        { title: "Analytics", src: "Chart" },
        { title: "Files ", src: "Folder", gap: true },
        { title: "Setting", src: "Setting" },
      ];
  return (
    <div className='flex'>
      <div className = {`${open?'w-72':'w-20'} h-screen p-4 relative bg-dark-purple transition-all duration-1000`} >

        <img src={require('../Assets/control.png')} alt="control" onClick={() => setOpen(!open)}
            className={`w-[20px] absolute -right-3 border-2 rounded-full border-dark-purple bg-dark-purple cursor-pointer ${!open&&'rotate-180'} transition-all duration-500`}/>
        <div className='flex gap-4'>
            <img src={require('../Assets/youtube.png')} alt="youtubeLogo" 
                className={`w-[40px] duration-500 ${!open && 'rotate-[360deg]'}`} />
            {open && <h3 className='text-white font-bold text-[20px]'>BirlaJi</h3>}
        </div>

        <ul className='mt-10 transition-all duration-500'>
            {menuList.map((item)=>(
                <li className={`flex gap-4 p-2
                    hover:bg-blue-700 rounded-md cursor-pointer
                    ${!open && 'justify-center'}
                    ${item.gap?"mt-9":"mt:2"}`
                }>
                    <img src={require(`../Assets/${item.src}.png`)} alt="" 
                        className={`duration-500 ${!open && 'rotate-[360deg]'}`}
                    />
                    {open && <span className='text-white hover:font-bold'>{item.title}</span>}
                </li>
            )

            )}
        </ul>
      </div>

    </div>
  )
}

export default SideNavBar

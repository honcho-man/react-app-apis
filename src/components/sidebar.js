import React from 'react';

function SideBar({action, menu, destAction, dest, dests}) {
    return (
        <>
            <div className={menu? "d-md-none slide-in-left col-8 menu p-5":"d-md-none slide-out-left col-8 menu p-5"}>
                <ul className='p-0'>
                {
                    dests.map(d => {
                        return <li key={d}>
                        <button title={d} className={d===dest?'text-capitalize active':'text-capitalize'} dest={d} onClick={destAction}>{d}</button>
                        </li>
                    })
                }
                </ul>
            </div>
            <div onClick={action} className={menu? "d-md-none slide-in-right col-4 menu-void p-5":"d-md-none slide-out-right col-4 menu-void p-5"}></div>
        </>    
    )
}

export default SideBar;
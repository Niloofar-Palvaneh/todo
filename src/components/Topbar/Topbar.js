import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Topbar() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div className='w-full flex items-center justify-center text-3xl font-bold text-orange-700 p-2 z-10'>
                <h1>
                    TO Do Web
                </h1>
            </div>
            <div className='w-full h-[1px] bg-orange-500'></div>
            <div className='w-full h-[1px] bg-orange-500 mt-[1px]'></div>
        </>
    );
}

export default Topbar;

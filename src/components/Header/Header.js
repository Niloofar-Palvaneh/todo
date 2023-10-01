import { useEffect, useState } from 'react';
import AddModal from '../AddModal/AddModal';

function Header() {
    const [isOpenModal, setIsOpemModal] = useState(false)

    const openModal = () => {
        setIsOpemModal(!isOpenModal)
    }



    return (
        <>
            {
                isOpenModal && (
                    <AddModal openModal={openModal} />
                )
            }
            <div className='flex items-center justify-between p-2 mt-2'>
                <div className='border border-orange-700 rounded p-2  flex gap-2 items-center'>
                    <input className='outline-none bg-inherit' type="text" placeholder='search for task...' />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <div>
                    <h2>
                        you are free
                    </h2>
                </div>
                <button
                    onClick={openModal}
                    className='bg-orange-500 text-white p-2 rounded shadow border border-orange-500
                 transition ease-in-out hover:bg-white hover:text-orange-500'>
                    Add New Task
                </button>
            </div>
        </>
    );
}

export default Header;

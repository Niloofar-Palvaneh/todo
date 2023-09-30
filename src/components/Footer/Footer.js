import { useState } from 'react';


function Footer() {

    const [activeLink, setActiveLink] = useState(1)

    const footerLinks = [
        {
            id: 1,
            title: "All",
            isActive: true,
            svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>

        },
        {
            id: 2,
            title: "Completed",
            isActive: false,
            svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        },
        {
            id: 3,
            title: "Active",
            isActive: false,
            svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        },
    ]

    const activeLinkHandler = (id) => {
        setActiveLink(id)
    }

    return (
        <>
            <ul className='w-full bg-orange-100 mt-4 flex items-center justify-center p-1'>
                {
                    footerLinks.map(link => (
                        <li
                            onClick={() => activeLinkHandler(link.id)}
                            className={`
                            cursor-pointer text-gray-600 px-8 flex flex-col items-center justify-center ${link.id === activeLink ? "text-orange-950 font-bold " : ""}`}>
                            {link.svg}
                            <span className='italic'>{link.title}</span>
                        </li>
                    ))
                }
            </ul>

        </>
    );
}

export default Footer;

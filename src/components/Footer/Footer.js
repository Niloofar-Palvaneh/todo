import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Footer() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
    <div className='w-full bg-blue-400'>
      footer
    </div>

    </>
  );
}

export default Footer;

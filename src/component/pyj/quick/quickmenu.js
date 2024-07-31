import Quickitem from './Quickitem';
import React, {useEffect} from "react";


const QuickMenu = () => {
  useEffect(() => {
    const handleToggleMenu = () => {
      document.querySelector("#quick_pyj").classList.toggle("showmenu");
    };

    const quickPlusIcon = document.querySelector("#quick_pyj .quickplusicon");
    quickPlusIcon.addEventListener("click", handleToggleMenu);

    return () => {
      quickPlusIcon.removeEventListener("click", handleToggleMenu);
    };
  }, []);
    
    return (
      <aside id="quick_pyj">
        <div className='radishQuick'>
            <ul className='d-flex flex-column'>
                <Quickitem></Quickitem>             
            </ul>
            <a href="#none" className='quickplusicon'>
                <img src="/img/img_pyj/quick/plus.svg" alt="플러스" className='quickIcon' />
            </a>
        </div>
      </aside>
    );
  };
  
  export default QuickMenu;

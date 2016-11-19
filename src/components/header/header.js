/**
 * Created by Vijay on 11/17/16.
 */
import React from 'react';

// Navigation
function Navigation(){
    return (
        <div id="navigation" className="Navigation">
            <nav>
                 <ul>
                    <li>
                        <a href="#">Browse</a>
                    </li>
                    <li>
                       <a href="#">My list</a>
                    </li>
                    <li>
                      <a href="#">Top picks</a>
                    </li>
                     <li>
                        <a href="#">Recent</a>
                    </li>
                </ul>
            </nav>
         </div>
);
}

export default Navigation;

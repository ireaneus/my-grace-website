import * as React from 'react';


export default function GraceAppBar() {

const DATEOPTIONS= {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

const DisplayDate = new Date().toLocaleDateString('en-US', DATEOPTIONS);

  return (
          <div className='w3-container w3-theme-d1 w3-card-4'>
            <div className='w3-bar'>
              <button className='w3-button w3-right w3-hover-blue-grey' sx={{display:{xs: 'none', sm: 'none', md: 'block'} }} >{ DisplayDate }</button>
              <h6 className='w3-wide w3-center white' >Grace Fellowship of Mountain Home Idaho</h6>
            </div>
          </div>
  );
}

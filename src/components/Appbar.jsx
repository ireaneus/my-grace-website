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
          <div className='w3-container w3-top w3-theme-d1 w3-card-4'>
            <div className='w3-display-container'>
            <button className="w3-button w3-display-left w3-hover-blue-grey" onclick="w3_open()"><i className="fas fa-church"></i></button>
              <button className='w3-button w3-display-right w3-hover-blue-grey' >{ DisplayDate }</button>
              <h6 className='w3-wide w3-display-center white' >Grace Fellowship of Mountain Home Idaho</h6>
            </div>
          </div>
  );
}

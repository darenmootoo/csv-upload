
import './App.scss';
import { Assessment } from '../src/components/Assessment'
import { HomePage } from './components/HomePage';
import { CsvUpload } from './components/CsvUpload';
import { useState, createRef, useEffect, useCallback, useRef } from 'react'

function App() {


  return (
    <div className='App'>
      <div className="container">
        <div className="container__inner">
          <CsvUpload>
            <div>Drag & Drop</div>
          </CsvUpload>
        </div>
      </div>
    </div>
  )
}

export default App;

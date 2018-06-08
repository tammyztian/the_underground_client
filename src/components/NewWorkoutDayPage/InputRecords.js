import React from 'react';
import '../../styles/on-boarding.css';
import WeightForm from'./input-records';
import { LiftingPrep } from './lifting-prep';
import Header from '../Utils/header';

export function InputNewRecordsPage(props) {
   
    return (

        <div className="lifting-prep-container">
          <Header />
          <LiftingPrep />
          <WeightForm />
        </div>
    );
}

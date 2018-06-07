import React from 'react';
import '../styles/on-boarding.css';
import WeightForm from'./lifting-experience';
import { LiftingPrep } from './lifting-prep';
import Header from './header';

export function LiftingPrepContainer(props) {
   
    return (
        <div className="lifting-prep-container">
          <Header />
          <LiftingPrep />
          <WeightForm />
        </div>
    );
}

import React from 'react';
import { DatePicker } from 'react-md';

export const SelectDate = () => (
            <div style={{ marginLeft: '450px'}} className="md-grid">
            <DatePicker
                id="fromDate"
                label="From Date"
                className="md-cell"
            />
            <DatePicker
                id="toDate"
                label="To Date"
                className="md-cell"
                displayMode="portrait"
            />
        </div>
);
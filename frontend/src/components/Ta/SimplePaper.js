/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Paper } from 'react-md';

export const SimplePaper = () => (
    <div className="papers__container">
        {Array.from(Array(6)).map((_, i) => (
            <Paper
                key={i}
                zDepth={i}
                raiseOnHover={i === 0}
                className="papers__example"
            >
                zDepth = {i}
            </Paper>
        ))}
    </div>
);

"use strict";

import React from 'react';
import {DataTable, TableHeader, TableBody, TableRow, TableColumn, Button} from 'react-md';

import Page from '../Page'

import {InventoryRow} from "./InventoryRow";

export const InventoryList = ({data}) => (
    <Page>
        <div style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }}>
        </div>
        <DataTable plain style={{
            marginLeft: '100px',
            marginRight: '100px',
            maxWidth: 1600,
            marginTop: '120px',
            marginBottom: '50px',
            paddingBottom: '20px',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }}>
            <TableHeader>
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn style={{fontSize: '15px'}}>Name</TableColumn>
                    <TableColumn style={{fontSize: '15px'}}>Date</TableColumn>
                    <TableColumn style={{fontSize: '15px'}}>Amount</TableColumn>
                    <TableColumn style={{fontSize: '15px'}}>OK</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((attraction, i) => <InventoryRow key={i} attraction={attraction}/>)}
            </TableBody>
        </DataTable>
    </Page>
);


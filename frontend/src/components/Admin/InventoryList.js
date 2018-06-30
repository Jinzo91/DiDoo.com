"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';

import Page from '../Page'

import { InventoryRow } from "./InventoryRow";

export const InventoryList = ({data}) => (
    <Page>
        <div style={{
            display: 'flex',
            flexDirection: 'row-reverse'
        }}>
        </div>
        <DataTable plain>
            <TableHeader>
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Date</TableColumn>
                    <TableColumn>Amount</TableColumn>
                    <TableColumn>OK</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((attraction, i) => <InventoryRow key={i} attraction={attraction}/>)}
            </TableBody>
        </DataTable>
    </Page>
);


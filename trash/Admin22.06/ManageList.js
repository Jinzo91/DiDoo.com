"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';

import Page from '../Page'
import {Autocomplete} from "react-md/es/index";
import {ManageRow} from "./ManageRow";


export const MovieList = ({data, onDelete}) => (
    <Page>
        <div style={{
            display: 'flex',
            flexDirection: 'row-reverse'
        }}>
                <Button onClick={() => this.props.history.push('/')} icon>search</Button>
                <Autocomplete style={{width: "300px"}}
                              data={['abc','bcd']}
                              filter={Autocomplete.caseInsensitiveFilter}
                ></Autocomplete>
        </div>
        <DataTable plain>
            <TableHeader>
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Edit</TableColumn>
                    <TableColumn>Remove</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((movie, i) => <ManageRow key={i} movie={movie} onDelete={(id) => onDelete(id)} />)}
            </TableBody>
        </DataTable>
    </Page>
);


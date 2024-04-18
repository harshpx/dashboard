import React, { useState } from 'react'
import data from './info.json';

const getData = () => {
    const uniqueEntriesMap = new Map();
    data.forEach(entry => {
        uniqueEntriesMap.set(entry.candidate_name,entry);
    })
    return Array.from(uniqueEntriesMap.values());
}

export default getData;
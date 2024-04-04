"use client";

import { FilterDate } from './filterDate';
import { FilterKPI } from "./filterKPI";
import { FilterStore } from './filterStore';

export function Menu (){
  return(
    <div className='w-full h-full flex flex-row justify-start items-center gap-2.5 p-2.5'>
        <FilterDate/>
        <FilterStore/>
        <FilterKPI/>
    </div>
  )
}
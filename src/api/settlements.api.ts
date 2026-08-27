import {calculateSummary} from '../lib/calculations';import{members,expenses,mockDelay}from'./mockStore';
export const settlementsApi={summary:(tripId:string)=>mockDelay(calculateSummary(tripId,members.filter(m=>m.tripId===tripId),expenses.filter(e=>e.tripId===tripId))),settlements:async(tripId:string)=>(await settlementsApi.summary(tripId)).settlements};

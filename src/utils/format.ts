import {Trip} from '../types';
export const formatCurrency=(amount:number,showPaise=amount%1!==0)=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:showPaise?2:0,minimumFractionDigits:showPaise?2:0}).format(amount);
export const formatDate=(iso:string)=>new Intl.DateTimeFormat('en-GB',{day:'2-digit',month:'short',year:'numeric'}).format(new Date(iso));
export const formatRange=(trip:Pick<Trip,'startDate'|'endDate'>)=>`${formatDate(trip.startDate)} — ${formatDate(trip.endDate)}`;
export const tripDuration=(start:string,end:string)=>{const days=Math.max(1,Math.round((+new Date(end)-+new Date(start))/86400000)+1);return `${days} days · ${Math.max(0,days-1)} nights`};
export const initials=(name:string)=>name.split(' ').map(p=>p[0]).join('').slice(0,2).toUpperCase();

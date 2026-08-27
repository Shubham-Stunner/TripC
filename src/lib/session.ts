import {User} from '../types';
export interface Session{user:User;isAuthenticated:true} export const currentSession:Session={isAuthenticated:true,user:{id:'u1',name:'Shubham',email:'shubham@example.com'}};

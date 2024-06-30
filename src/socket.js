// import { io } from "socket.io-client";
// const isBrowser = typeof window !== "undefined";
// export const socket = isBrowser ? io() : {};
import { io } from 'socket.io-client';
export const socket = io();

import { Navigate, useLocation, Route, } from "react-router-dom";
import React, { useEffect } from 'react';


export const setToken = (token) => {
    localStorage.setItem('rasyueToken', token)
}
export const getToken = (token) => {
    return localStorage.getItem('rasyueToken')
}
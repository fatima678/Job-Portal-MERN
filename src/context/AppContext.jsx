// React library se createContext hook import karo
// Yeh hook components ke beech data share karne ke liye context object banata hai, prop drilling ke baghair
import { createContext } from "react";
import { useState, useEffect } from "react";
import { jobsData } from "../assets/assets";

// Ek constant AppContext export karo, jo createContext() ko call karne ka result hai
// createContext() ek context object banata hai jiska initial value null hota hai (default taur par, kyunki koi argument nahi diya gaya)
// Yeh context application-wide state ya data ko hold karega jo child components use kar sakte hain
export const AppContext = createContext();

// Ek functional component AppContextProvider export karo jo 'props' ko input mein leta hai
// Yeh component wrapper ki tarah kaam karta hai jo context value ko apne saare child components ko provide karta hai
export const AppContextProvider = (props) => {
    const [searchFilter, setSearchFilter] = useState({
    title: '',
    location: ''
  });
  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]); 
  
  // Function to fetch jobs
const fetchJobs = async () => {
  setJobs(jobsData);
};

// useEffect hook to fetch jobs on component mount
useEffect(() => {
  fetchJobs();
}, []);// Jobs data ko state mein store karne ke liye
  
const value = {
    setSearchFilter,  // Function to update search filter
    searchFilter,     // Current search filter object
    isSearched,       // Boolean indicating if search has been performed
    setIsSearched , 
    jobs, 
    setJobs  // Function to set search status
  };
  
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
  // Note: Closing brace aur parenthesis component definition ko complete karte hain
};
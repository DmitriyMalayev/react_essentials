import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
}

export function Services() {
  return (
    <div>
      <h2>Services</h2>
    </div>
  );
}

export function CompanyHistory() {
  return (
    <div>
      <h2>Company History</h2>
    </div>
  );
}

export function Location() {
  return (
    <div>
      <h2>Our Location</h2>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
      <Link to="/events">Events</Link>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  console.log(useLocation);
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}

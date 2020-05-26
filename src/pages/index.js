import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
      <div style={{ color: `purple` }}>
        <h1>Hello Shinsen! YaY</h1>
        
        <Link to="/shinsen/">Contact</Link>
        <Link to="/query/">Query</Link>
        <br/>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
    );
}
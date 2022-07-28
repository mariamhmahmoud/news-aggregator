import React, { useState } from "react";
import Form from "./components/Form";
import Tabs from "./components/Tabs";



export default function App() {
  return (
    <div className="App">
      <div className='p-5 text-center'>
        <h1 className='mb-3'>RSS News Aggregator</h1>
        <h4 className='mb-3'>Aggregates news articles from major outlets.</h4>
      </div>
      <Tabs />
      <Form />
    </div>
  );
}
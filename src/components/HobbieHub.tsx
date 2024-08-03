import React from "react";
import { useState } from "react";

function HobbieHub() {
  return (
    <form className="launchlist-form flex flex-col h-[50%]" action="https://getlaunchlist.com/s/QaMB7u" method="POST">
    <input className="bg-primary border m-2" name="email" type="email" />
    <button type="submit" className="border">Sign Up</button>
    </form>
  )
}

export default HobbieHub;
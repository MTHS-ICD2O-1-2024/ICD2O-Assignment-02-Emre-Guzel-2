// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: March 18  2025
// This file contains the JS functions for index.html

function streetAddress() {
  // Setting the varibles
  const streetNumber = document.getElementById("street-number").value
  const streetName = document.getElementById("street-name").value
  document.getElementById("address").innerHTML ="Your address is: " +  streetNumber + " " + streetName + "."
}
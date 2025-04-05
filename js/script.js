// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: March 23  2025
// This file contains the JS functions for index.html

"use strict"

function calculationOfRightRectangle() {
  // Setting the varibles
  const lengthOfRightRectangularPrism = parseFloat(document.getElementById("length-of-right-rectangular-prism").value)
  const widthOfRightRectangularPrism = parseFloat(document.getElementById("width-of-right-rectangular-prism").value)
  const heightOfRightRectangularPrism = parseFloat(document.getElementById("hegiht-of-right-rectangular-prism").value)
  const calculationOfRightRectangle = (lengthOfRightRectangularPrism * widthOfRightRectangularPrism * heightOfRightRectangularPrism)

  // clacualtoins 
  document.getElementById("Volume").innerHTML = "Volume is: " + calculationOfRightRectangle + " " +  " cm³" 
}
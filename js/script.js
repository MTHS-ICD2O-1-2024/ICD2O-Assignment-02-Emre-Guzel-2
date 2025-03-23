// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: March 23  2025
// This file contains the JS functions for index.html

"use strict"

function CalculationOfRightRectangle() {
  // Setting the varibles
  const LengthOfRightRectangularPrism = parseFloat(document.getElementById("length-of-right-rectangular-prism").value)
  const WidthOfRightRectangularPrism = parseFloat(document.getElementById("width-of-right-rectangular-prism").value)
  const HeightOfRightRectangularPrism = parseFloat(document.getElementById("hegiht-of-right-rectangular-prism").value)
  const CalculationOfRightRectangle = (LengthOfRightRectangularPrism * WidthOfRightRectangularPrism * HeightOfRightRectangularPrism)

  // clacualtoins 
  document.getElementById("Volume").innerHTML = "Volume is: " + CalculationOfRightRectangle +  " cm³" 
}
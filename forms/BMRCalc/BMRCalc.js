
btnCalcBMR.onclick=function(){
  let weight = parseInt(inptWeight2.value)
  let heightFt = parseInt(inptHeight2ft.value)
  let Gender1 = ['male','female'] 
  let heightIn = parseInt(inptHeight2in.value)
  let age = parseInt(inptAge.value) 
  
  let maleCalcWeight = weight * 6.32
  let maleCalcHeight = ((heightFt*12) + heightIn) * 12.7
  let maleCalcAge = age*6.8
  let maleBMR = 66 + maleCalcWeight + maleCalcHeight - maleCalcAge
  
   let femaleCalcWeight = weight * 4.35
  let femaleCalcHeight = ((heightFt*12) + heightIn) * 4.7
  let femaleCalcAge = age * 4.7
  let femaleBMR = 655 + femaleCalcWeight + femaleCalcHeight - femaleCalcAge
  lblResults2.value = (`Your BMR is: ${femaleBMR}`)

BMRCalc.onshow=function(){
  drpGender.clear()
  for (i = 0; i <= Gender1.length - 1; i++) 
        drpGender.addItem(Gender1[i])
} 
 
 
drpGender.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    switch(s) {
    case "female":
      lblResults2.value = ("Your BMR is:"+ femaleBMR)
      break
    case "male":
      lblResults2.value = ("Your BMR is:" + maleBMR)
      break
      }
    }
  }
}

hmbrMenuCopy2.onclick=function(s){
     // when just click the control. 's' is
                                 // the object returned
    if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
    
        // if user clicked on a form name change based on what they chose (s)
        switch(s) {
        case "Sign Out":
            // hide the hamberger menu and show the signin button
            hmbrMenu.hide()
            btnSignIn.show()
            break
        case "Home Page":
          ChangeForm(HomePage)
          break
        case "Gyms Near Me":
            // Go to the Home form
            ChangeForm(healthyPlaces)
            break
        case "BMI Calculator":
            ChangeForm(BMICalc)  
            break
      case "Add Vitals": 
            ChangeForm(vitalsAdd)
            break
  case "Food Log":
    ChangeForm(fatSecret)
    break
  case "Get Vitals":
    ChangeForm(getVitals)
    break
  case "Fitness Survey": 
    ChangeForm(satisfactionRating)
    break
  case "BMR Calculator": 
    ChangeForm(BMRCalc)
    break
        }
    }
}

btnReset2.onclick=function(){
  let weight = ''
  let heightFt = ''
  let heightIn = ''
  let gender = ''
  let age = ''
}

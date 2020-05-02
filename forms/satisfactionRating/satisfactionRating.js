

hmbrMenuCopy6.onclick=function(s){
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
    case "Home Page":
        ChangeForm(HomePage)
        break
    case "BMR Calculator": 
    ChangeForm(BMRCalc)
    break
        }
    }
}

btnDone.onclick=function(){
  lblActivity.value= (`Your results have been submitted.`)
  lblSatisfaction.value = (`Your results have been submitted.`)
}

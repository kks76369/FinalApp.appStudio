vitalsAdd.onshow=function(){
  query = `SELECT * FROM vitals`
  //alert(query)
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kks76369&pass=Project1&database=kks76369&query=" + query)
  
customers=JSON.parse(req.responseText)
      
    if(req.status==200){
          let mes='These are the current vitals'
          
          for(i=0;i<=customers.length-1;i++){
          mes=mes+'\n'+customers[i][1]
        txtAddVitals.value=mes
        }
      }else{
        txtAddVitals.value=(`There was an error with code ${req.status}`)
      }
}

btnEnter.onclick=function(){
  let name = inptNames.value
    let bloodPressure = inptBP.value
    let heartRate = inptHR.value
    let temp = inptTemp.value
    let pulse = inptPulse.value
    let pw = "Project1"
    let query = "INSERT INTO vitals (name,heart_rate,blood_pressure,temp,pulse) VALUES ('" + name + "', '" + bloodPressure + "','" + heartRate + "', '" + temp+ "', '" + pulse + "')"
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kks76369&pass=Project1&database=kks76369&query=" + query)

 if (req.status == 200) { //transit worked.
        if (req.responseText == 500) {   // means the insert succeeded
            NSB.MsgBox("You have successfully added the vitals!")
        } else
            NSB.MsgBox("There was a problem with adding the customer to the database.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req.status);
    }  
}

hmbrMenuCopy3.onclick=function(s){
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

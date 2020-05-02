let req=''
let query=''
let vitals=''
let allEntries=[]

getVitals.onshow=function(){
  txtGet_contents.style.height='150px'
  query='SELECT * FROM vitals'
  req=Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=kks76369&pass=Project1&database=kks76369&query=' + query) 

  if(req.status==200) {
    vitals=JSON.parse(req.responseText)
    console.log(vitals)
    allEntries=vitals
    
    if(vitals.length==0){
      NSB.MsgBox("There are no vitals.")
    } else{
      
       console.log(`The parsed JSON is ${vitals}.`)
      console.log(`The first row/item in the big array is a small array: ${vitals[0]}.`)
      
      let message=''
      for(i=0;i<=vitals.length-1;i++){
        dpdPerson.addItem(vitals[i][1])
        }
    }
  } else {
    NSB.MsgBox('AN ERROR OCCURRED WITH CODE ' + req.status)
  }
}

dpdPerson.onclick=function(s){
  let personName=''
  let name=''
  let options=[]
  
  if (typeof(s)=='object'){
    return
  } else {
    dpdPerson.value=s
    personName=dpdPerson.selection
    for(i=0;i<=allEntries.length-1;i++){
      if(personName==allEntries[i][1]){
        name=allEntries[i][4]
        console.log(name)
        break
      }
    }
    
    for(i=0;i<=allEntries.length-1;i++){
      if(name==allEntries[i][4]){
        options.push(allEntries[i][1])
        console.log(options)
      }
    }
    
    query=`SELECT blood_pressure FROM vitals WHERE temp='${name}'`
    
    req=Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=kks76369&pass=Project1&database=kks76369&query=' + query)
    
   if(req.status==200){
      vitals=JSON.parse(req.responseText)
      
      if(vitals.length==0){
        NSB.MsgBox('There are no vitals')
      } else {
        let mes=''
        for(i=0;i<=vitals.length-1;i++){
          mes=mes+vitals[i][0]+'\n'
        txtGet.value=mes
        }
      
      } 
    }else{
        NSB.MsgBox('ERROR WITH CODE ' + req.status)
    }
  }
}
hmbrMenuCopy5.onclick=function(s){
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

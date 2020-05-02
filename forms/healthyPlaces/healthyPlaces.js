// url that Postman made with all the parameters embedded into it
let requestURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyD6KDDJArbcOX3hr0mZShTrBm-X-dvmTyU&location=41.276900,-95.942310&rankby=distance&keyword=gym"
      
function addtoDB() {
// add data to DB if you want to - just some sample code

// need to add/use global database password, query, and results variables to project
    query = "whatever"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=" + pw + "&database=clc90595&query=" + query)

    if (req.status == 200) { //transit worked.
        // code goes here to process data or check for 500 code
    } else 
        // transit error
        NSB.MsgBox("Network error: " + req.status)
}

function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    for (i = 0; i <= apiData.results.length - 1; i++) {
        //console.log(`${apiData.results[i].name}`)
        message = message + apiData.results[i].name + "\n" + apiData.results[i].vicinity + "\n"  + " " + "\n"
    }
    // change name of textArea below
    txtaPlaces.value = message
    // if want to add to database call a function here that does that
    // addToDatabase()
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
        xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
    
    // if you DON'T need cors use this code
        //xhttp.open('GET',URL)
    
    // if you need to set the returned data type, use this line of code: 
        //xhttp.setRequestHeader('Content-Type', 'application/json')
    
    // if you need authorization token (stored in myToken) use this line of code: 
        // xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
    
    // if you need a key and it's not in the url use code in one of the following
    // examples (think of headers as parameters)
    // or just use the Postman url which has all the parameters already added like I did here. 
    
        
        //xhttp.setRequestHeader('key','AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY')
        //xhttp.setRequestHeader('location','41.276900,-95.942310')
        //xhttp.setRequestHeader('rankby','distance')
        //xhttp.setRequestHeader('type','restaurant')
        

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}


// change name of button below
btnPlaces.onclick=function(){
  // call the API calling code above
  callAPI(requestURL)
}


//  change name of Form below
healthyPlaces.onshow=function(){
  // set size of text area
  // change name of text area below:
  txtaPlaces_contents.style.height = "100px"
}
hmbrMenuCopy.onclick=function(s){
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

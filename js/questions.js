
    let formChosen = sessionStorage.getItem("form")
    console.log(formChosen)
    //select what form to use then build from from the list of available lists
    // ***FIX ME*** lists need to be completed. Generic text is in place to test function
    if(formChosen == 'vibration'){
        var firstQuestions = ['Any time','Only intermittently', 'Only when the vehicle is first started',
        'After the vehicle has been driven', 'In cold weather', 'In warm weather','Its something else'];
        var secondQuestions= ['0mph','0-25mph','25-35mph','35-45mph','45-55mph','55-65mph','65+mph'];
        var thirdQuestions= ['Can\'t tell','Drivers front','Passengers front','Center of vehicle','Drivers rear','Passengers rear'];
        var fourthQuestions= ['Can\'t tell','All over','Steering wheel','Brake pedal','Floor','Seat',];
        var fifthQuestions = ['Just starting','Driving for less then a few miles','Only happens on long drives','Only happens rarely']
        var imgLocs=["styles\\img\\underhood.jpg"];
        var questionGroups = [firstQuestions,secondQuestions,thirdQuestions,fourthQuestions,fifthQuestions];
        var progress= 0;
        var currentQuestions = '';
        var cardHeaders = ['When does it happen?','What speed are you going?','What part of the vehicle does it come from?','Can you feel in certain parts of the vehicle?','What does it take to duplicate concern?']
        document.querySelector('#pageTitle').textContent = 'A Vibration Then,';
        document.querySelector('#breadCrumb').textContent = 'vibrations';
        document.querySelector('#progressBar').innerHTML = Math.round(100/questionGroups.length) +'%'
        document.querySelector('#progressBar').setAttribute('style','width:'+Math.round(100/questionGroups.length)+'%');
        var newText = buildQuestions(progress)
        document.querySelector('.card-body').innerHTML = newText
    }else if (formChosen == 'clank'){
        var firstQuestions = ['Any time','Only intermittently', 'Only when the vehicle is first started',
        'After the vehicle has been driven', 'In cold weather', 'In warm weather','Its something else'];
        var secondQuestions= ['0mph','0-25mph','25-35mph','35-45mph','45-55mph','55-65mph','65+mph'];
        var thirdQuestions= ['Can\'t tell','Drivers front','Passengers front','Center of vehicle','Drivers rear','Passengers rear'];
        var fourthQuestions= ['Can\'t tell','All over','Steering wheel','Brake pedal','Floor','Seat',];
        var fifthQuestions = ['Just starting','Driving for less then a few miles','Only happens on long drives','Only happens rarely']
        var imgLocs=["styles\\img\\underhood.jpg"];
        var questionGroups = [firstQuestions,secondQuestions,thirdQuestions,fourthQuestions,fifthQuestions];
        var progress= 0;
        var currentQuestions = '';
        var cardHeaders = ['When does it happen?','What speed are you going?','What part of the vehicle does it come from?','Can you feel in certain parts of the vehicle?','What does it take to duplicate concern?']
        document.querySelector('#pageTitle').textContent = 'A Clank Then,';
        document.querySelector('#breadCrumb').textContent = 'clanks';
        document.querySelector('#progressBar').innerHTML = Math.round(100/questionGroups.length) +'%'
        document.querySelector('#progressBar').setAttribute('style','width:'+Math.round(100/questionGroups.length)+'%')
        var newText = buildQuestions(progress)
        document.querySelector('.card-body').innerHTML = newText 
    }else if(formChosen =='squeak'){
        var firstQuestions = ['Any time','Only intermittently', 'Only when the vehicle is first started',
        'After the vehicle has been driven', 'In cold weather', 'In warm weather','Its something else'];
        var secondQuestions= ['0mph','0-25mph','25-35mph','35-45mph','45-55mph','55-65mph','65+mph'];
        var thirdQuestions= ['Can\'t tell','Drivers front','Passengers front','Center of vehicle','Drivers rear','Passengers rear'];
        var fourthQuestions= ['Can\'t tell','All over','Steering wheel','Brake pedal','Floor','Seat',];
        var fifthQuestions = ['Just starting','Driving for less then a few miles','Only happens on long drives','Only happens rarely']
        var imgLocs=["styles\\img\\underhood.jpg"];
        var questionGroups = [firstQuestions,secondQuestions,thirdQuestions,fourthQuestions,fifthQuestions];
        var progress= 0;
        var currentQuestions = '';
        var cardHeaders = ['When does it happen?','What speed are you going?','What part of the vehicle does it come from?','Can you feel in certain parts of the vehicle?','What does it take to duplicate concern?']
        document.querySelector('#pageTitle').textContent = 'A Squeak Then,';
        document.querySelector('#breadCrumb').textContent = 'Squeaks';
        document.querySelector('#progressBar').innerHTML = Math.round(100/questionGroups.length) +'%'
        document.querySelector('#progressBar').setAttribute('style','width:'+Math.round(100/questionGroups.length)+'%')
        var newText = buildQuestions(progress)
        document.querySelector('.card-body').innerHTML = newText 
    }else{
        var firstQuestions = ['Any time','Only intermittently', 'Only when the vehicle is first started',
        'After the vehicle has been driven', 'In cold weather', 'In warm weather','Its something else'];
        var secondQuestions= ['0mph','0-25mph','25-35mph','35-45mph','45-55mph','55-65mph','65+mph'];
        var thirdQuestions= ['Can\'t tell','Drivers front','Passengers front','Center of vehicle','Drivers rear','Passengers rear'];
        var fourthQuestions= ['Can\'t tell','All over','Steering wheel','Brake pedal','Floor','Seat',];
        var fifthQuestions = ['Just starting','Driving for less then a few miles','Only happens on long drives','Only happens rarely']
        var imgLocs=["styles\\img\\underhood.jpg"];
        var questionGroups = [firstQuestions,secondQuestions,thirdQuestions,fourthQuestions,fifthQuestions];
        var progress= 0;
        var currentQuestions = '';
        var cardHeaders = ['When does it happen?','What speed are you going?','What part of the vehicle does it come from?','Can you feel in certain parts of the vehicle?','What does it take to duplicate concern?']
        document.querySelector('#pageTitle').textContent = 'Something else then,';
        document.querySelector('#breadCrumb').textContent = 'something else';
        document.querySelector('#progressBar').innerHTML = Math.round(100/questionGroups.length) +'%'
        document.querySelector('#progressBar').setAttribute('style','width:'+Math.round(100/questionGroups.length)+'%')
        var newText = buildQuestions(progress)
        document.querySelector('.card-body').innerHTML = newText 
    }

    // simple function to build the html of the questions
    function buildQuestion(i=' ',f =' ',txt=' '){
        let newHtml = '<div class=\"row\"><div class=\"col form-check\"> <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id="'+i+'\"><label id=\"'+i+'label'+'\" class=\"form-check-label\" for=\"'+f+'\">'+txt+'</label> </div></div><hr>';

        return newHtml
    }

    // use the simple function above to concatanate and create a list of questions. 
    function buildQuestions(progress){ 
        let questions = questionGroups[progress];
        let newBody = '';
        var ids = ['one','two','three','four','five','six','seven','eight','nine'];
        var currentQuestions = '';
        for(i=0;i<questions.length;i++){       
            currentQuestions += buildQuestion(ids[i],ids[i],questions[i])     
        }
        
        currentQuestions += '<div class="form-group row"><div class="col text-right"><a id="nxtBtn" onclick="incProgress()" class="btn btn-primary text-white">NEXT</a></div></div>'
        // document.querySelector('#image').src = imgLocs[0]; // **FIX ME** uncomment and correct when image library is created.    
        return currentQuestions  
    }

    //function for next button to rerun functions and change the questions    
    function incProgress(){
        var dList = [];
        var ids = ['one','two','three','four','five','six','seven','eight','nine'];
        for(i=0;i<questionGroups[progress].length;i++){
            if(document.getElementById(ids[i]).checked ){
                let text = document.getElementById(ids[i]+'label').textContent;
                dList.push(text)
            }
         }
        txt = document.getElementById('cardHeader').innerText
        let concatText = txt.split(" ").join("")
        console.log(concatText,dList)
        sessionStorage.setItem(concatText,dList)

        if (progress+1 <= questionGroups.length-1){
        document.querySelector('.card-body').innerHTML = '';
        progress +=1;
        document.querySelector('#progressBar').innerHTML = (Math.round(100/questionGroups.length)*(progress+1)) +'%'
        document.querySelector('#progressBar').setAttribute('style','width:'+(100/questionGroups.length*(progress+1))+'%');
        document.querySelector('#cardHeader').innerHTML = cardHeaders[progress];
        console.log('In the increment function',progress);
        let newHtml = buildQuestions(progress);
        document.querySelector('.card-body').innerHTML = newHtml;
        // document.querySelector('#image').src = imgLocs[0]; **FIX ME** uncomment and correct when image library is created.   
        //**FIX ME** add functions for generating html for the final page.  
        for(i=0;i<progress;i++){
            let txt = cardHeaders[i].split(" ").join("")
            console.log('from storage',sessionStorage.getItem(txt))
            }}else{
            console.log('questions finished')
            document.querySelector('.card-body').innerHTML = 'All Finshed\n Submit';
            document.querySelector('#cardHeader').innerHTML = 'Finished';
            window.open('mailto:test@example.com'); // **FIX ME*** update mail address with selected option and add correct information ot body from local stoarge. 
            completedForm = 'This still needs filled out';
            window.open('mailto:test@example.com?subject="Vehicle noise concerns"&body="'+completedForm+'"');
        }
    }



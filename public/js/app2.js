"use strict"


class App {

	constructor() {
		this.displays = [
		{
		  "id":1,
		  "photo":"images/1.jpg",
		  "destination":"DOHA QATAR",
		  "from":"Manila",
          "to":"ENGLAND",
          "contacts":"+639233477",
          "plainName":"images/9.jpg",
          "description":"Before leaving this beautiful country, make sure that you have not missed the many landmarks and activities to do in Italy. Tour the Colosseum, Pantheon or Roman Forum and immerse yourself in its long history. Visit the Florence Cathedral or St. Peter’s Basilica and wonder at its ornate architecture. Take that cliché photo of yourself supporting the Leaning Tower of Pisa and make a wish at the Trevi Fountain. Those are just a few of the more popular tourist spots in Italy.",
		  "comments":"Always looking afast flight to day"   
      },

         {

		  "id":2,
		  "photo":"images/2.jpg",
		  "destination":"Sydney-Bundaberg flights",
		  "from":"Singapor",
          "to":"EUROPE",
          "contacts":"+739246777",
           "comments":"It is nice to go back Home." 
		  },	

		 {
		  "id":3,
		  "photo":"images/3.jpg",
		  "destination":"SAUDI ARABIA",
		  "from":"Japan",
          "to":"MAYANA ITALY",
          "contacts":"+759233000",
          "comments":"I hope for a good weather thanks to GOD."
		}, 	

		 {
		  "id":4,
		  "photo":"images/5.jpg",
		  "destination":"MONGGOLIA",
		  "from":"Manila",
          "to":"ESTADUS UNIDOS",
          "contacts":"+17923688",
          "comments":"Please update me if it is Good weather."
		 },	

		{
			"id":5,
		  "photo":"images/4.jpg",
		  "destination":"CHINA",
		  "from":"Taiwan",
           "to":"DOHA QATAR",
            "contacts":"+639233477",
           "comments":"I want an emediate schedule."
		   
		 }	
   
			];  



			this.airplain = [
		{
		  "id":1,
		  "origin":"CHINA",
          "photo":"images/a1.jpg",
          "description":"Before leaving this beautiful country, make sure that you have not missed the many landmarks and activities to do in Italy. Tour the Colosseum, Pantheon or Roman Forum and immerse yourself in its long history. Visit the Florence Cathedral or St. Peter’s Basilica and wonder at its ornate architecture. Take that cliché photo of yourself supporting the Leaning Tower of Pisa and make a wish at the Trevi Fountain. Those are just a few of the more popular tourist spots in Italy.",
		  "comments":"Always looking afast flight to day"   
       },
       {
		  "id":2,
		  "origin":"DOHA QATAR",
          "photo":"images/a2.jpg",
          "description":"Before leaving this beautiful country, make sure that ",
		  "comments":"Always looking afast flight to day"   
       },
       {
		  "id":3,
		  "origin":"CHINA",
          "photo":"images/a3.jpg",
          "description":"Before leaving this beautiful country, make sure that you have not missed the many landmarks and activities to do in Italy. Tour the Colosseum, Pantheon or Roman Forum and immerse yourself in its long history. Visit the Florence Cathedral or St. Peter’s Basilica and wonder at its ornate architecture. Take that cliché photo of yourself supporting the Leaning Tower of Pisa and make a wish at the Trevi Fountain. Those are just a few of the more popular tourist spots in Italy.",
		  "comments":"Always looking afast flight to day"   
       },
       {
		  "id":4,
		  "origin":"CHINA",
          "photo":"images/a4.jpg",
          "description":"Before leaving this beautiful country, make sure that you have not missed the many landmarks and activities to do in Italy. Tour the Colosseum, Pantheon or Roman Forum and immerse yourself in its long history. Visit the Florence Cathedral or St. Peter’s Basilica and wonder at its ornate architecture. Take that cliché photo of yourself supporting the Leaning Tower of Pisa and make a wish at the Trevi Fountain. Those are just a few of the more popular tourist spots in Italy.",
		  "comments":"Always looking afast flight to day"   
       },
       {
		  "id":5,
		  "origin":"CHINA",
          "photo":"images/a5.jpg",
          "description":"Before leaving this beautiful country, make sure that you have not missed the many landmarks and activities to do in Italy. Tour the Colosseum, Pantheon or Roman Forum and immerse yourself in its long history. Visit the Florence Cathedral or St. Peter’s Basilica and wonder at its ornate architecture. Take that cliché photo of yourself supporting the Leaning Tower of Pisa and make a wish at the Trevi Fountain. Those are just a few of the more popular tourist spots in Italy.",
		  "comments":"Always looking afast flight to day"   
       },
       {
		  "id":6,
		  "origin":"CHINA",
          "photo":"images/a6.jpg",
          "description":"Before leaving this beautiful country, make sure that you have not missed the many landmarks and activities to do in Italy. Tour the Colosseum, Pantheon or Roman Forum and immerse yourself in its long history. Visit the Florence Cathedral or St. Peter’s Basilica and wonder at its ornate architecture. Take that cliché photo of yourself supporting the Leaning Tower of Pisa and make a wish at the Trevi Fountain. Those are just a few of the more popular tourist spots in Italy.",
		  "comments":"Always looking afast flight to day"   
       },
       {
		  "id":7,
		  "origin":"CHINA",
          "photo":"images/a7.jpg",
          "description":"Before leaving this beautiful country, make sure that you have not missed the many landmarks and activities to do in Italy. Tour the Colosseum, Pantheon or Roman Forum and immerse yourself in its long history. Visit the Florence Cathedral or St. Peter’s Basilica and wonder at its ornate architecture. Take that cliché photo of yourself supporting the Leaning Tower of Pisa and make a wish at the Trevi Fountain. Those are just a few of the more popular tourist spots in Italy.",
		  "comments":"Always looking afast flight to day"   
       },
       {
		  "id":8,
		  "origin":"CHINA",
          "photo":"images/a8.jpg",
          "description":"Before leaving this beautiful country, make sure that you have not missed the many landmarks and activities to do in Italy. Tour the Colosseum, Pantheon or Roman Forum and immerse yourself in its long history. Visit the Florence Cathedral or St. Peter’s Basilica and wonder at its ornate architecture. Take that cliché photo of yourself supporting the Leaning Tower of Pisa and make a wish at the Trevi Fountain. Those are just a few of the more popular tourist spots in Italy.",
		  "comments":"Always looking afast flight to day"   
       }
    //    {
		  // "id":9,
		  // "origin":"CHINA",
    //       "photo":"images/a9.jpg",
    //       "description":"Before leaving this beautiful country, make sure that you have not missed the many landmarks and activities to do in Italy. Tour the Colosseum, Pantheon or Roman Forum and immerse yourself in its long history. Visit the Florence Cathedral or St. Peter’s Basilica and wonder at its ornate architecture. Take that cliché photo of yourself supporting the Leaning Tower of Pisa and make a wish at the Trevi Fountain. Those are just a few of the more popular tourist spots in Italy.",
		  // "comments":"Always looking afast flight to day"   
    //    },
    //    {
		  // "id":10,
		  // "origin":"CHINA",
    //       "photo":"images/a10.jpg",
    //       "description":"Before leaving this beautiful country, make sure that you have not missed the many landmarks and activities to do in Italy. Tour the Colosseum, Pantheon or Roman Forum and immerse yourself in its long history. Visit the Florence Cathedral or St. Peter’s Basilica and wonder at its ornate architecture. Take that cliché photo of yourself supporting the Leaning Tower of Pisa and make a wish at the Trevi Fountain. Those are just a few of the more popular tourist spots in Italy.",
		  // "comments":"Always looking afast flight to day"   
    //    },
    //    {
		  // "id":11,
		  // "origin":"CHINA",
    //       "photo":"images/a11.jpg",
    //       "description":"Before leaving this beautiful country, make sure that you have not missed the many landmarks and activities to do in Italy. Tour the Colosseum, Pantheon or Roman Forum and immerse yourself in its long history. Visit the Florence Cathedral or St. Peter’s Basilica and wonder at its ornate architecture. Take that cliché photo of yourself supporting the Leaning Tower of Pisa and make a wish at the Trevi Fountain. Those are just a few of the more popular tourist spots in Italy.",
		  // "comments":"Always looking afast flight to day"   
    //    },

    //    {
		  // "id":12,
		  // "origin":"CHINA",
    //       "photo":"images/a12.jpg",
    //       "description":"Before leaving this beautiful country, make sure that you have not missed the many landmarks and activities to do in Italy. Tour the Colosseum, Pantheon or Roman Forum and immerse yourself in its long history. Visit the Florence Cathedral or St. Peter’s Basilica and wonder at its ornate architecture. Take that cliché photo of yourself supporting the Leaning Tower of Pisa and make a wish at the Trevi Fountain. Those are just a few of the more popular tourist spots in Italy.",
		  // "comments":"Always looking afast flight to day"   
    //    }
    ];

       this.state = [
			{
				"bind": {
					"content_plain":[],
					"plain_type":[],
					"plain_desc":[]
					
				}
			}
		];

    }
  
	render(html, component){
		component.innerHTML += html;
	}

	reRender(html, component){
		component.innerHTML = html;
	}

    createFlight() {
				
				let id = document.getElementById('id');
				let photo = document.getElementById('photo');
				let destination = document.getElementById('destination');
				let from = document.getElementById('from');
				let to = document.getElementById('to');
				let contacts = document.getElementById('contacts');
				let comments = document.getElementById('comments');

		              let accessflight=[];
		          for(let i=0;i<this.state[0].bind.plain_type.length;i++){
			           accessflight.push({
				          "plainphoto" : this.state[0].bind.plain_type[i],
				          "description" : this.state[0].bind.plain_desc[i]
			      });
		        }

		         let nameOfPlaine = accessflight; 
		         let thiscontentplaine = []; 
		         for(let i=0;i<this.state[0].bind.content_plain.length;i++){
		         	thiscontentplaine.push(this.state[0].bind.content_plain[i]);
		         }

		         let variableplain = thiscontentplaine;

		 		 let display = {
                 "id":id.value,
                 "photo":photo.value,
                 "destination":destination.value,
                 "from":from.value,
                 "to":to.value,
                 "contacts":contacts.value,
                 "plainName":nameOfPlaine, 
                 "comments":comments.value
                 
               };

               this.displays.push(display);
                this.state[0].bind.content_plain = this.state[0].bind.plain_type = this.state[0].bind.plain_desc = [];
		       id.value = photo.value = destination.value = from.value = to.value = contacts.value = comments.value = '';
		       this.passView();
    } // end of create



	deleteAirPlaine(key){
		let r = this.displays;
		for(let i=0;i<r.length;i++){
			if(r[i].id == key){
				this.displays.splice(i,1);
				break;
			}
		}		
		this.passView();
	}

	findAirPlaneByID(id){
		let r = this.displays;
		for(let i=0;i<r.length;i++){
			if(id==r[i].id){
				return r[i];
			}
		}
	}	



	bindPlainNewData(val,id,obj){
		let bind = null;
		if(obj === "plainphoto"){
			bind = this.state[0].bind.plain_type;
		}
		else if(obj === "description"){
			bind = this.state[0].bind.plain_desc;
		}
		bind[id] = val;
		 console.log(bind);
	}	
         
	findAirPlaneByDestination(destination){  //use for search...
		let objects = [];
		let r = this.displays;
		for(let i=0;i<r.length;i++){
			let expr = (r[i].destination.toUpperCase().indexOf(destination.toUpperCase()) > -1);
			 console.log(destination," vs ",r[i].destination," = ",expr);
			if(expr){
				objects.push(r[i]);
			}
		}
		return objects;
	}


	bindAirPlaneNewContentplain(val,id){

		let bind = this.state[0].bind.procdures;
		bind[id] = val;
		console.log(bind);
	}
       
  bindAirPlaneNewplainName(val,id,obj){
		let bind = null;
		if(obj === "plainphoto"){
			bind = this.state[0].bind.plain_type;
		}
		else if(obj === "description"){
			bind = this.state[0].bind.plain_desc;
		}
		bind[id] = val;

		console.log(bind);
	}	

	   updateDetails(key){
     //     id = id - 1;
            //    let id = document.getElementById('id');
      let ph = document.getElementById('photo');
    let des = document.getElementById('dest');
    let fr = document.getElementById('from');
    let to = document.getElementById('to');
    let com = document.getElementById('comments');
    let con = document.getElementById('contacts');
 
    let m = this.displays[key];
    let display = {"id":m.id,"photo":m.photo,"destination":des.value,"from":fr.value,"to":to.value,"contacts":con.value, "comments":com.value};
             
    this.displays[key] = display;
    let details = document.getElementById('plainView');
    details.innerHTML = "";
    this.passView();  
    
	  }		  
} //end of app

							class Component extends App {

								constructor(){
									super();
								}

    layOut(){

    	let html = `     

       <div id="airLayOut" class="container-fixed">
	<nav id="header">
    <div class="nav-wrapper">
      <a href="#showStarter" class="brand-logo" onclick="component.displayParalax()"><img src="images/btk.jpg" class="circle responsive-img">HOME</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#showForm" onclick="component.formCreate()">Take your Flight</a></li>
        <li><a href="#passView" onclick="component.passView()">People on Board</a></li>
      </ul>
    </div>
  </nav>
                        
              <div id="displayStarter"></div>
              <div id="displayParalax"></div>
              <div id="formCreate"></div>
              <div id="passView"></div>
              <div id="plainView"></div>
               <div id="updatePlane"></div>
               <div id="Edit"></div>
           

  <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">ABOUTS US</h5>
                <p class="grey-text text-lighten-4"><a href="http://www.jetstar.com/ph/en/help/articles/when-to-get-to-the-airport-for-international-flights"/>Tour yourself around the world.</p>
                 <div class="row">
				      <div class="col s3"><a href="#showStarter" class="brand-logo" onclick="component.displayParalax()">HOME</div>
				      <div class="col s3"><a href="#showForm" onclick="component.formCreate()">RESERVED YOUR Flight</div>
				      <div class="col s3"><a href="#passView" onclick="component.passView()">PEOPLE ON YOUR FLIGHT</div>
				    </div>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">FOLLOW</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://www.facebook.com/?stype=lo&jlou=Affd_zmu0oQ34q2V00SweCI3MTqjhpWR7h4pvXnIej55iR-PTzolfoafz401D9kLREuUaBLRehuRUOT0l6ILIZyfM-xuDF2VAxaBE95wisXBCA&smuh=39032&lh=Ac8PoaDK_BMt0cWr"><img src="images/logof.png">SHARE </a></li>
                  <li><a class="grey-text text-lighten-3" href="http://www.youtube.com"><img src="images/logoy.png">SHARE</a></li>
                  <li><a class="grey-text text-lighten-3" href="http://www.google.com"><img src="images/gogol.png">SHARE </a></li>
                  
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-copyright">
            <div class="container">
            <div class="row">© 2016 2017  Web - Developer Design
             <div class="col 1 offset-2 s1">
             <img src="images/home.jpg" class="none">
              </div>
                <div class="col 1 offset-1 s1">
                     <img src="images/home2.jpg" class="none">
                     </div>      
                        <div class="col 1 offset-1 s1">      
                           <img src="images/home3.jpg" class="none">
                           </div>
                              <div class="col 1 offset-0 s1">      
                                <img src="images/home4.jpg" class="none">
                                </div>
                                   <div class="col 1 offset-0 s1">      
                                     <img src="images/home5.png" class="none">
                                     </div>
            <a class="grey-text text-lighten-4 right" href="http://www.jetstar.com/ph/en/help/articles/when-to-get-to-the-airport-for-international-flights">FLIGHT HISTORY AROUND THE WORLD</a>
            </div>
          </div>
        </footer></div>
           </div>
         </div>
    		`;
    	this.reRender(`
    	${html}`	  
    		,document.getElementById("app"));
    	this.displayStarter();

    }

   
	nameSearch(destination){ // use for Search
		let html = ``;
		let r = this.findAirPlaneByDestination(destination);
		for(let i=0;i<r.length;i++){
			html+= `
				 <div class="row">
			            <div class="col s6 m4">
			    <h4 class="header">${r[i].destination}</h4>
			    <div class="card">
			      <div class="card-image">
			        <img src="${r[i].photo}">
			      </div>
			      <div class="card-stacked">
			        <div class="card-content">
			          <p><h3>From</h3>${r[i].from}</p>
			        </div>
			        <div class="card-action">
			          <a href="#plainView" onclick="component.plainView(${r[i].id})">Detail</a>
			        </div>
			      </div>
			    </div>
			   </div>
			`;
		}		
		this.reRender(`
			${html}
			`,document.getElementById("nameSearch"));	

		$('#passView').show();	
	}

       passView(){

      let  html = `
                     <br/>
		  	<nav>
	    		<div class="nav-wrapper red">
	    		    <form>
						<div class="input-field">				
							<input onkeyup="component.nameSearch(this.value)" id="search" type="search" placeholder="Search" required>
							<label for="search"><i class="material-icons">search</i></label>
							<i class="material-icons">close</i>
						</div>
					</form>		
				</div>
			</nav>
			<br/> `;

			html += `<div class="row" id="nameSearch">`;
            html += `
			        <h5 class="center-align">List of Destination</h5>
			        <div class="row">
            `;
        
		      let r = this.displays;
		      for(let i = 0;i<r.length;i++){

		      	 html += `
		      	 <div class="row">
			            <div class="col s6 m4">
			    <h4 class="header">${r[i].destination}</h4>
			                 <div class="card">
			      <div class="card-image" col s6 m4>
			        <img src="${r[i].photo}" class="passView">
			           </div>
			      <div class="card-stacked">
			        <div class="card-content">
			          <p><h3>From</h3>${r[i].from}</p>
			        </div>
			        <div class="card-action">
			          <a href="#plainView" onclick="component.plainView(${r[i].id})">Detail</a>
			        </div>
			      </div>
			    </div>
			   </div>
          `;
      }   

        html += `</div>`;
 
            this.reRender(`
		         ${html}
		                `,document.getElementById("passView"));
	                   this.showPassView();
	                 
      }

         Edit(id){
         
             let html = `
                 <div class="col s12 m7">
    <h2 class="header">${this.display[id].destination}</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img src="${this.display[id].photo}">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>${this.display[id].comments}</p>
        </div>
        <div class="card-action">
         <span onclick="component.deleteAirPlaine(${id})" class="new badge small red" data-badge-caption="">UPDATE</span>								
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>

             `;
                this.reRender(`${html}`,document.getElementById("Edit"));
                  this.showEdit();


         }



         plainView(id) {

         	
             let r = this.findAirPlaneByID(id);
         	  let html = `		  
                    <div class="col s6 m4 offset-m2 6 offset-l3">
				        <div class="card-panel grey lighten-5 z-depth-20">
				          <div class="row valign-wrapper">
				            <div class="col s2">
				              <img src="${r.photo}" class="circle responsive-img">
				            </div> 
				            <div class="col s10">
				            <h5>Destination</h5>
				              <span class="black-text">${r.destination}</span>			              
				            </div>
				          </div>
				        </div>
				      </div>
                  <div class="col s12 m2">
			      <p class="z-depth-20" style="center-align"></p>
			      </div>                     
         	       <ul class="collection with-header">
			        <li class="collection-header"><h4>${r.destination}</h4></li>
			        <li class="collection-item">From:  ${r.from}</li>
			        <li class="collection-item">Flight:  ${r.to}</li>
			        <li class="collection-item">Contacts:  ${r.contacts}</li>
			        <li class="collection-item">comments:  ${r.comments}</li>
			      </ul>
			      <div class="card-action small">
			      <span onclick="component.updatePlane(${r.id})" class="new badge small green" data-badge-caption="">Change</span>
			      <span onclick="component.deleteAirPlaine(${r.id})" class="new badge small red" data-badge-caption="">DELETE</span>								
				    <span onclick="component.passView()" class="new badge small" data-badge-caption="">GO BACK</span>
				  </div>
				  </br>			      
			       `;  
         
			    html += `

               `;   
                  this.reRender(`${html}`,document.getElementById("plainView"));
                  this.showPlainView();
         }

	formCreate() {

		let html = `
		
    <form class="col s6" id="now">
          <div class="row">
          <div class="center-align">
        <div class="input-field col s12">
          <input disabled value="${this.displays.length+1}" id="id" type="text" class="validate">
          <label for="id"></label>
        </div>
      </div>
      
        <div class="input-field col s6">
          <input  id="photo" type="text" class="validate" required>
          <label for="photo" data-error="wrong" data-success="right">Link your image</label>
       </div>  
        <div class="input-field col s6">
          <input id="destination" type="text" class="validate" required>
          <label for="destination" data-error="wrong" data-success="right">Destination Address</label>
        </div>
       
   
         <div class="row">
        <div class="input-field col s6">
          <input  id="from" type="text" class="validate">
          <label for="from">From</label>
        </div>
        <div class="input-field col s6">
          <input id="to" type="text" class="validate" required>
          <label for="to" data-error="wrong" data-success="right">To:</label>
        </div>
      </div>

         <div class="row">
        <div class="input-field col s12">
          <input id="contacts" type="text" class="validate" required>
          <label for="contacts" data-error="wrong" data-success="right">Contact Details</label>
        </div>
  
       <div class="input-field col s6">
       <textarea id="comments" class="textarea-field" required></textarea>
       <label for="comments" data-error="wrong" data-success="right">Leave comments here.</center>


        </div> 
      </div>  
    </div>
    </div>
          
            <div class="center-align">
              <center><button type="button" onclick="component.createFlight()" class="btn waves-effect waves-light">Save</button></center>
		    </div>
        </div>
    </form>
  </div>
        
		`;
          this.reRender(`
			${html}
			`,document.getElementById("formCreate"));  
              this.showForm();
              this.state[0].bind.content_plain = [];		
		      this.state[0].bind.plain_type = [];		
		      this.state[0].bind.plain_desc = [];	
       }

         displayStarter(){

           let html = `  
        
        <div class="container">
           <div class="section no-pad-bot" id="index-banner">
    <div class="containere">
      <br><br>
      <h1 class="header center blue-text">Find Your Flight Now.</h1>
      <div class="row center">
        <h5 class="header col s12 light">LETS FLY  FLY AWAY...</h5>
      </div>
      <div class="row center">
        <btn class="btn btn-info" href="" onclick="component.displayParalax()">Get Started!</btn>
      </div>
      <br><br>
    </div>
  </div>
     </div></div>
  `;              
       this.reRender(`
			${html}
			`,document.getElementById("displayStarter")); 
			this.showStarter(); 
}

	  displayParalax(){
			        
		let html = `
			<h5 class="center-align">Flight Your Home Anywhere</h5>
			<div class="row">
		`;

        let r = this.airplain;
        let count = 0;
        for(let i=(r.length-1);i>=0;i--){

        	if(count++ === 8)
        		break;
			 html += `
			<div class="col s6 m8 offset-m2 2 offset-l2">     
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col l10">
              <img src="${r[i].photo}" alt="" class="triangle responsive-img">
            </div>
            <div class="col s10">
              <span class="black-text">${r[i].description}
              </span>
            </div>
            <div class="col s10">
                <span onclick="component.deleteAirPlaine(${r.id})" class="new badge small green" data-badge-caption="">VIEW PLAIN</span>
                </div>
          </div>
        </div>
      </div>`;     

		    this.reRender(`
				${html}
			`,document.getElementById("displayParalax")); 
		  this.showParalax();
        }
    }  



	//let bt = this.findAirPlaneByID(id);
     
// 	let html = `

// <form class="col s12" id="form">
// <div class="row">
// <field>
// <center><span><label><h1>Update Plane Reservation </h1></label></span></center>
// <center>
// <div class="col s2">
// <img src="${this.displays[id].photo}" alt="" class="circle responsive-img"></label></center>
// </div>
// <span><label><span class="required">Update destination</span></span>
// <input type="text"id="destination" name="dest" value="${this.displays[id].destination}"/></label>

// <span><label><span class="required">Update from</span></span>
// <input type="text"id="from" name="from" value="${this.displays[id].from}"/></label>

// <span><label><span class="required">Update to</span></span>
// <input type="text"id="to" name="to" value="${this.displays[id].to}"/></label>

// <span><label><span class="required">Update Comments</span></span>
// <input type="text"id="comments"  name="com" value="${this.displays[id].comments}"/></label>

// <span><label><span class="required">Update contacts</span></span>
// <input type="text"id="contacts" name="cont" value="${this.displays[id].contacts}"/></label>

// <label>
// <div class="center-align">
// <button  onclick="component.updateDetails(${id})" class="waves-effect blue waves-light btn">Update</button>
// </div></label>
// </field>
// </div>
// </form>
// </center>
// `; 
 //                        function validate(){
							
 //             	var ph = document.getElementById('photo');
	// 	        var des = document.getElementById('dest').value;
	// 	        var fr = document.getElementById('from').value;
	// 	        var to = document.getElementById('to').value;
	// 	        var com = document.getElementById('comments').value;
	//         	var con = document.getElementById('contacts').value;
 
	// 						if( des ==='' || fr ===''){
	// 						alert("Please fill all fields...!!!!!!");
	// 						return false;
	// 						}else if(!(des).match(fr)){
	// 						alert("Invalid Email...!!!!!!");
	// 						return false;
	// 						}else{
	// 						return true;
	// 						}
	// 						}


 //            function submitByID(){

 //             	var ph = document.getElementById('photo');
	// 	        var des = document.getElementById('dest').value;
	// 	        var fr = document.getElementById('from').value;
	// 	        var to = document.getElementById('to').value;
	// 	        var com = document.getElementById('comments').value;
	//         	var con = document.getElementById('contacts').value;
 
	// 				if (validate()) // Calling validation function
	// 			{
	// 			  document.getElementById("contactform").submit(); //form submission
	// 	     	alert(" Name : " + ph + " \n Email : " + des + " \n Form Id : "
	// 	     	 + document.getElementById("contactform").getAttribute("id") + "\n\n Form Submitted Successfully......");
	// 									}

	// 	        var m = this.displays[key];
	// 	        var display = {"id":m.id,"photo":m.photo,"destination":des.value,"from":fr.value,"to":to.value,"contacts":con.value, "comments":com.value};
             
	// 	this.displays[key] = display;
	// 	var details = document.getElementById('plainView');
	// 	details.innerHTML = "";
	// 	this.passView();
 // }

   // html += `
    // <div class="container">
    //   <form class="form-signin" method="post" onchange="component.updateDetails(${id});" action="#">
    //     <h2 class="form-signin-heading">Please sign in</h2>

    //     <label for="inputEmail" class="sr-only">Email address</label>
    //      <img src="${this.displays[id].photo}" class="featurette-image img-responsive center-block" data-src="holder.js/200x200/auto" alt="Generic placeholder image">

    //       <label for="dest" class="sr-only">Email address</label>
    //     <input type="text" id="dest" class="form-control"  value="${this.displays[id].destination}" placeholder="" required autofocus>

    //     <label for="from" class="sr-only">Password</label>
    //     <input type="text" id="from" class="form-control" value="${this.displays[id].from}" placeholder="" required>

    //        <label for="to" class="sr-only">Password</label>
    //     <input type="text" id="to" class="form-control" value="${this.displays[id].to}" placeholder="" required>

    //     <label for="comments" class="sr-only">Password</label>
    //     <input type="text" id="comments" class="form-control" value="${this.displays[id].comments}" placeholder="" required>

    //     <label for="contacts" class="sr-only">Password</label>
    //     <input type="text" id="contacts" class="form-control" value="${this.displays[id].contacts}" placeholder="" required>

    //     <div class="checkbox"> 
    //       <label>
    //         <input type="checkbox" value="remember-me"> Remember me
    //       </label>
    //     </div>
    //     <button class="btn btn-lg btn-primary btn-block" type="button"  name ="data" onclick="return component.updateDetails(${id})">Sign in</button>
    //   </form>

    // </div> <!-- /container -->

     //        function chkform() {
            //   if (document.getElementById("from").value === "" ) 
            // {
            //    document.getElementById("dest").innerHTML = "field cant be left blank"; 
            //            return false;
            //  }

            //       if(document.getElementById("from").value === "" )
            //     {     
            //        document.getElementById("from").innerHTML = "field cant be left blank"; 
            //                        return true;
            //  }
                   
            //       if(document.getElementById("to").value === "" )
            //     {     
            //        document.getElementById("to").innerHTML = "field cant be left blank"; 
            //                      return true;
            //  }
                   
            //       if(document.getElementById("comments").value === "" )
            //     {     
            //        document.getElementById("comments").innerHTML = "field cant be left blank"; 
            //                           return true;
            //  }  

            //       if(document.getElementById("contacts").value === "" )
            //     {     
            //        document.getElementById("contacts").innerHTML = "field cant be left blank"; 
            //                   return true;
            //  }   

            //  document.getElementById('contactform') = chckform();
            //  this.component.updateDetails();



     updatePlane(id){
	    id = id - 1;  

//           let html = `
//           <h1 id="banner"><a href="http://jqueryvalidation.org/">jQuery Validation Plugin</a> Demo</h1>
// <div id="main">
// 	<form method="post" class="cmxform" id="form" action="login.action">
// 		<fieldset>
// 			<legend>Login Form (Enter "foobar" as password)</legend>
// 			<p>
// 				<label for="user">Username</label>
// 				<input id="user" name="user" title="Please enter your username (at least 3 characters)" class="required" minlength="3">
// 			</p>
// 			<p>
// 				<label for="pass">Password</label>
// 				<input type="password" name="password" id="password" class="required" minlength "5">
// 			</p>
// 			<p>
// 				<input class="submit" type="submit" value="Login">
// 			</p>
// 		</fieldset>
// 	</form>
// 	<div id="result" class="warning">Please login!</div>
//
    
       // <div class="container">   
       // <div class="row">
       // <div class="container">   
       // <div class="row">
// `

     let  html = `
    <form class="col s1" id="contactform" action="#">
         <fieldset>
        <div class="row">
             <div class="col s3 offset-m0 2 offset-60">
				<img src="${this.displays[id].photo}" alt="" class="triangle responsive-img"></label></center>
				</div>

            <div class="input-field col s6 offset-m1 6 offset-13">
                <input id="dest" type="text" value="${this.displays[id].destination}" class="form-control" required autofocus>
                <label for="dest" data-error="wrong" data-success="right">Change Destination</label>
            </div>

            <div class="input-field col s6 offset-m1 6 offset-13">
                <input id="from" name="from" type="text" value="${this.displays[id].from}" class="form-control" required autofocus>
                <label for="from" data-error="wrong" data-success="right">Change origin</label>
            </div>

            <div class="input-field col s6 offset-m4 6 offset-13">
                <input id="to" name="to" type="text" value="${this.displays[id].to}" class="form-control" required autofocus>
                <label for="to" data-error="wrong" data-success="right">Change ongoing</label>
            </div>
               </div>

             <div class="row">
            <div class="input-field col s6 offset-m4 6 offset-13">
                <input id="comments" name="comments" type="text" value="${this.displays[id].comments}" class="form-control" required autofocus>
                <label for="comments" data-error="wrong" data-success="right">Comments</label>
            </div>
         </div>

            <div class="input-field col s6 offset-m4 6 offset-13">
                <input id="contacts" name="contacts" type="text" value="${this.displays[id].contacts}" class="form-control"
                 required>
                <label for="contacts" data-error="wrong" data-success="right">Contact Details</label>
            </div>
            <div class="input-field col s6 offset-m5 6 offset-30">
                <button id="adlawan" class="btn btn-lg btn-primary btn-block" type="submit" onclick="component.updateDetails(${id}); return false;"  name ="data">UPDATE</button>
            </div>
        </div>
     </fieldset>   
    </form>
   x
      `
   ; 
          
         
  // jQuery(function() {
  //   $.mockjax({
  //     url: "login.action",
  //     response: function(settings) {
  //       var user = settings.data.match(/user=(.+?)($|&)/)[1],
  //         password = settings.data.match(/password=(.+?)($|&)/)[1];
  //       if (password !== "foobar") {
  //         this.responseText = "Your password is wrong (must be foobar).";
  //         return;
  //       }
  //       this.responseText = "Hi " + user + ", welcome back.";
  //     },
  //     responseStatus: 200,
  //     responseTime: 500
  //   });

  //   // show a simple loading indicator
  //   var loader = jQuery('<div id="loader"><img src="images/loading.gif" alt="loading..."></div>')
  //     .css({
  //       position: "relative",
  //       top: "1em",
  //       left: "25em",
  //       display: "inline"
  //     })
  //     .appendTo("body")
  //     .hide();
  //   jQuery().ajaxStart(function() {
  //     loader.show();
  //   }).ajaxStop(function() {
  //     loader.hide();
  //   }).ajaxError(function(a, b, e) {
  //     throw e;
  //   });

  //   var v = jQuery("#form").validate({
  //     submitHandler: function(form) {
  //       jQuery(form).ajaxSubmit({
  //         target: "#result"
  //       });
  //     }
  //   });

  //   jQuery("#reset").click(function() {
  //     v.resetForm();
  //   });
  // });



this.reRender(`

  ${html}

  `,document.getElementById("updatePlane"));   
this.showUpdatePlane();
}

		showStarter() {
		$('#displayStarter').show();
		$('#displayParalax').hide();
		$('#formCreate').hide();
		$('#passView').hide();
		$('#updatePlane').hide();
		$('#plainView').hide();
		$('#updateFlight').hide();
			$('#Edit').hide();
		}

        showForm() {
		$('#formCreate').show();
		$('#displayStarter').hide();
		$('#displayParalax').hide();
		$('#passView').hide();
		$('#updatePlane').hide();
		$('#plainView').hide();
	    $('#updateFlight').hide();
	    	$('#Edit').hide();
		}

		showParalax(){
		$('#displayParalax').show();
		$('#displayStarter').hide();
		$('#formCreate').hide();
		$('#passView').hide();
		$('#updatePlane').hide();
        $('#parallax').hide();
        $('#plainView').hide();
        $('#updateFlight').hide();
        	$('#Edit').hide();	
	}

		showPassView(){
	    $('#passView').show();
		$('#displayParalax').hide();
		$('#displayStarter').hide();
		$('#formCreate').hide();
		$('#plainView').hide();
		$('#updatePlane').hide();
		$('#updateFlight').hide();
			$('#Edit').hide();
    }       

       showPlainView(){
	    $('#plainView').show();
		$('#displayParalax').hide();
		$('#displayStarter').hide();
		$('#formCreate').hide();
		$('#passView').hide();
		$('#updatePlane').hide();
		$('#updateFlight').hide();
			$('#Edit').hide();
    }      

showUpdatePlane(){
	    $('#plainView').hide();
		$('#displayParalax').hide();
		$('#displayStarter').hide();
		$('#formCreate').hide();
		$('#passView').hide();
		$('#updatePlane').show();
		$('#updateDetails').hide();
			$('#Edit').hide();
}
       showUpdateFlight(){
       	$('#updateFlight').show();
	    $('#plainView').hide();
		$('#displayParalax').hide();
		$('#displayStarter').hide();
		$('#updatePlane').hide();
		$('#formCreate').hide();
		$('#passView').hide();
			$('#Edit').hide();
   }


       showEdit(){
       	$('#Edit').show();
       	$('#updateFlight').hide();
	    $('#plainView').hide();
		$('#displayParalax').hide();
		$('#updatePlane').hide();
		$('#displayStarter').hide();
		$('#formCreate').hide();
		$('#passView').hide();
   }


       showNameSearch(){
       	$('#nameSearch').show();
       	$('#Edit').hide();
       	$('#updateFlight').hide();
	    $('#plainView').hide();
		$('#displayParalax').hide();
		$('#updatePlane').hide();
		$('#displayStarter').hide();
		$('#formCreate').hide();
		$('#passView').show();
   }
}

let component = new Component();
    component.layOut();
    
           

        
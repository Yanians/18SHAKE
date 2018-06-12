"use strict"

class App {

	constructor() {
		this.images_carousel = [

		{ "id":0,
			"photo":"images/Banana.png",
			"description":"<strong>18Shake</strong> is an all-natural luxury meal replacement shake made in the USA. There's no added artificial sweeteners, soy, gluten, or unhealthy ingredients that many other meal replacements have. Contained inside is a superior dual-protein formula and potent fiber that not only suppresses appetite, but it can help you lose weight naturally."
		},{ "id":1,
			"photo":"images/Apple.png",
			"description":"The combination of fruits and vegetables that can reduce your weight 100%"
	     },	{"id":2,
			"photo":"images/Orange18Shake.png",
			"description":"The combination of fruits and vegetables that can reduce your weight 100%"
	     },{"id":3,
			"photo":"images/Banana.png",
			"description":"The combination of fruits and vegetables that can reduce your weight 100%"
		 },{"id":4,
			"photo":"images/Apple.png",
			"description":"The combination of fruits and vegetables that can reduce your weight 100%"
		},{"id":5,
			"photo":"images/Orange18Shake.png",
			"description":"The combination of fruits and vegetables that can reduce your weight 100%"
		},{"id":6,
			"photo":"images/Banana.png",
			"description":"The combination of fruits and vegetables that can reduce your weight 100%"
		},{"id":7,
			"photo":"images/Apple.png",
			"description":"The combination of fruits and vegetables that can reduce your weight 100%"
		},{"id":8,
			"photo":"images/Orange18Shake.png",
			"description":"The combination of fruits and vegetables that can reduce your weight 100%"
		 }
         
			];  

			this.airplain = [
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
				let comments = document.getElementById('comments');
				let contacts = document.getElementById('contacts');
                
		 		 let display = {
                 "id":id.value,
                 "photo":photo.value,
                 "destination":destination.value,
                 "from":from.value,
                 "to":to.value,
                 "comments":comments.value,
                 "contacts":contacts.value
                 // "plainName":nameOfPlaine, 
                 
                 
               };

               this.displays.push(display);
              //  this.state[0].bind.content_plain = this.state[0].bind.plain_type = this.state[0].bind.plain_desc = [];
		       id.value = photo.value = destination.value = from.value = to.value = comments.value = contacts.value = '';
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
			if(r[i].id===id){
				return r[i];
			}
		}
	}	

	findID(id){
		let r = this.airplain;
		let count = 0;
		for(let i=0;i<r.length;i++){
			if(id===r[i].id){
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

		let bind = this.state[0].bind.procedures;
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
  
    let id = document.getElementById('id');
    let photo = document.getElementById('photo');
    let destination = document.getElementById('dest');
    let from = document.getElementById('from');
    let to = document.getElementById('to');
    let comments = document.getElementById('comments');
    let contacts = document.getElementById('contacts');
 
    let m = this.displays[key];
    let display = {"id":m.id, "photo":m.photo, "destination":destination.value, "from":from.value, "to":to.value, "comments":comments.value, "contacts":contacts.value};        
    this.displays[key] = display;
    //this.displays.push(display); 
    let details = document.getElementById('passView');
    details.innerHTML = "";
    this.passView();  
   
	  }	

} //end of app

							class Component extends App {

								constructor(){
									super();
								}
								//<i class="small material-icons left"> <img src="images/b4.png"/> //store class //supervisor_account
    carousel(){
     let html = ``;
      let r = this.images_carousel;
       	     html +=` 
       	     <!-------------------------------Scroll Spy Here!--------------------->

                      <div class="row scrollspy">
						    <div class="col s12 m9 l10">
						      <div id="introduction" class="section scrollspy">
						        <p></p>
						      </div>

						      <div id="structure" class="section scrollspy">
						        <p></p>
						      </div>

						      <div id="initialization" class="section scrollspy">
						        <p></p>
						      </div>
						    </div>
						    <div class="col hide-on-small-only m3 l2">
						      <ul class="section table-of-contents">
						        <li><h5>Contents</h5></li>
						        <li><a href="#structure">Structure</a></li>
						        <li><a href="#initialization">Intialization</a></li>
						        <li><a href="#initialization">Mango 18Shake</a></li>
						        <li><a href="#initialization">Banana 18Shake</a></li>
						        <li><a href="#initialization">Apple 18Shake</a></li>
						        <li><a href="#initialization">Pepino 18Shake</a></li>
						        </br></br></br>
						        <li><a href="#initialization">Strewberry 18Shake</a></li>
						        <li><a href="#initialization">Malunggay 18Shake</a></li>
						        <li><a href="#initialization">Papaya 18Shake</a></li>
						        <li><a href="#initialization">Intialization</a></li>
						        <li><a href="#initialization">Intialization</a></li>
						        <li><a href="#initialization">Intialization</a></li>
						      </ul>
						    </div>
                     </div>

       	      <!------------------FLOATING BUTTON HERE!------------------->
               
                   <div class="fixed-action-btn toolbar">
					  <a class="btn-floating btn-large orange darken-3">
					    <i class="large material-icons">menu</i>
					  </a>
					  <ul>
					    <li><a class="btn-floating small pink darken-3">18 SHAKE</a></li>
					    <li><a class="btn-floating orange darken-3"><i class="material-icons">search</i></a></li>
					    <li><a class="btn-floating orange darken-3"><i class="material-icons">message</i></a></li>
					    <li><a class="btn-floating orange darken-3"><i class="material-icons">send</i></a></li>
					    <li><a class="btn-floating orange darken-3"><i class="material-icons">attachment</i></a></li>
					    <li><a class="btn-floating orange darken-3"><i class="material-icons">people</i></a></li>
					  </ul>
                   </div>`;

      html +=` 	     <div class="carousel" id="imagebackground">`;

       	      let count = 0;
			     for(let i=(r.length-1);i>=0;i--){
				 if(count++ === r[i])break;
				 r[i] = r[i];
		            // console.log(r[i]);   
	          html +=`    <a class="carousel-item" href="#one!"><img  class="formatImage" src="${r[i].photo}"></a> `;
	     } 
        	  html +=`</div>`;  

	     html +=`
	<!-- <nav>
    <div class="nav-wrapper blue lighten-100 z-depth-600">
    <ul class="left brand-logo">
    <li><a href="#formCreate" onclick="component.displayStarter()"><i class="large material-icons left">store</i>HOME</a></li>
    </ul>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="#displayParalax" onclick="component.displayParalax()" style="margin-left:2px;"><img src="images/pi.png" class="triangle responsive-img" style="border-radius:10em; width:20px; height:17px;">Flight</a></li>
        <li><a href="#formCreate" onclick="component.formCreate()"><i class=" small material-icons left">class</i>take your flight</a></li>
        <li><a href="#passView" onclick="component.passView()"><i class="small material-icons left">supervisor_account</i>People on Board</a></li>
      </ul>
    </div>
  </nav>     --> 
               <div id="parallax"></div>
               <div id="displayParalax"></div>
               <div id="cardsContent"></div>
               <div id="passView"></div>
               <div id="plainView"></div>
               <div id="updatePlane"></div>
               <div id="plainDetail"></div>

  <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s6">
                <h5 class="white-text">ABOUTS US</h5>
                <p class="grey-text text-lighten-4"><a href="http://www.jetstar.com/ph/en/help/articles/when-to-get-to-the-airport-for-international-flights"/>Tour yourself around the world.</p>
                 <div class="row">
				      <div class="black-text col s3"><a href="#showStarter" onclick="component.displayStarter()">HOME</div>
				      <div class="col s12"><a href="#showForm" onclick="component.formCreate()">RESERVED YOUR Flight</div>
				      <div class="col s6"><a href="#passView" onclick="component.passView()">PEOPLE ON YOUR FLIGHT</div>
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
            <div class="row">© 2016 2017  Web - Developer Design @Adlawan
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
    		this.parallax();
    		this.cardsContent();	
    }

       parallax(){

       	  let html = ``;
       	      html+=`
                <div id="index-banner" class="parallax-container">
				    <div class="section no-pad-bot">
				      <div class="container">
				        <br><br>
				        <h2 class="center white-text text-darken-2">NEW 18SHAKE'S Unique Formula</h2>
				        <div class="row center">
				          <h5 class="header white-text col s12 light">A modern responsive front-end framework based on Material Design</h5>
				        </div>
				        <div class="row center">
				          <a href="" id="download-button" class="btn-large waves-effect waves-light red darken-4">Get Started</a>
				            <a href="" id="download-button" class="btn-large waves-effect waves-light green darken-4">Get Started</a>
				              <a href="" id="download-button" class="btn-large waves-effect waves-light violet darken-4">Get Started</a>
				        </div>
				        <br><br>

				      </div>
				    </div>
				    <div class="parallax"><img src="images/vegetable.jpg" alt="Unsplashed background img 1"></div>
                </div>

       	      `;this.reRender(`${html}`,document.getElementById("parallax"));
       	      $b('.parallax').show();
       }

              cardsContent(){

              	let html = ``;

       
              	  let r = this.images_carousel;
       	      let count = 0;

	       	         html +=`  <div class="col xs12 s12 m12 l12 white accent-3">
						       
					        `;

			     for(let i=(r.length-1);i>=0;i--){
				 if(count++ === r[i])break;
				 r[i] = r[i];
              	html +=`
              	          <div class="card horizontal large hoverable">
						         <div class="card-image white accent-3">
					             <img src="${r[i].photo}">
					             </div>
					            <div class="card-stacked">
					         <div class="card-content indigo lighten-5">
					          <h2 class="contentTextcard">&nbsp;&nbsp;&nbsp;&nbsp;${r[i].description}</p>
					        </div>
					        <div class="card-action">
					         <span class="new badge red">This is a link</span>
					        </div>
					      </div>
					       </div> `;
			    }		      
                   html +=`
					   
                    </div>

              	`;this.reRender(`${html}`,document.getElementById("cardsContent"));
              	 $b('.cardsContent').show();
              }
               
} 
let component = new Component();
    component.carousel();
    

        
/**
 * Javascript variables
 */
 
//RTL support
var rtl = false;                                //Set to true if your website is RTL. Otherwise, keep it false.

//ONE-PAGE NAVIGATION HIGHLIGHT
var onepage_nav = true;                         //If true, each menu item will highlight when scrolling to each respective section.

//MOBILE MENU TITLE
var mobile_menu_title = "Menu";                 //The title of the mobile menu.

//HERO FULLSCREEN VARIABLE
var hero_full_screen = true;                    //If true, the hero section will fit to screen size. If false, hero height will be the height of its content.

//HERO BACKGROUND SLIDESHOW IMAGES
var slidehow_images = [
    "images/slide1.png",
    "images/slide2.png",
    "https://via.placeholder.com/1920x1080.png"
];

//TIMELINE PARALLAX
var timeline_parallax = true;                   //If false, the timeline items will not move on mousemove.


//CONTACT FORM VARIABLES
var contact_form_success_msg = "Form successfully submitted! :)";
var contact_form_error_msg = "Error sending message :(";
var contact_form_recaptcha_error_msg = "Error verifying reCaptcha!";


//COUNTDOWN VARIABLES
var c_days = "DÍAS";                            //Countdown "Days" label
var c_hours = "HORAS";                          //Countdown "Hours" label
var c_minutes = "MIN";                         //Countdown "Minutes" label
var c_seconds = "SEG";                         //Countdown "Seconds" label
var countdown_end_msg = "¡El evento ha comenzado!";       //Message to display when the countdown reaches the end


//GOOGLE MAP VARIABLES
var map_canvas_id = "map_canvas";               //The HTML "id" of the map canvas
var map_color = "#8eaeba";                      //Google map color
var map_initial_zoom = 15;                       //The initial zoom when Google map loads
var map_initial_latitude = 0.0852;               //Google map initial Latitude for Lago Agrio, Ecuador
var map_initial_longitude = -76.8822;            //Google map initial Longitude for Lago Agrio, Ecuador
var use_default_map_style = false;               //If true, default map style will be used

//List of map markers
var map_markers = [
    {
        "title": "Recepción",
        "latitude": 0.04608886,
        "longitude": -76.89090264,
        "icon": "fas fa-glass-cheers", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Quinta Mestanza <br> Lago Agrio, Ecuador"
    },
    
    {
        "title": "Ceremonia",
        "latitude": 0.084628,
        "longitude": -76.8826278,
        "icon": "fas fa-bell", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Catedral Nuestra Señora del Cisne <br> Lago Agrio, Ecuador"
    }
];
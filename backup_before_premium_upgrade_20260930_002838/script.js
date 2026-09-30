document.addEventListener("DOMContentLoaded",function(){

const nav=document.getElementById("navMenu");
const toggle=document.getElementById("menuToggle");

toggle.addEventListener("click",function(){
nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(function(link){
link.addEventListener("click",function(){
nav.classList.remove("open");
});
});

document.getElementById("year").textContent=new Date().getFullYear();

const gallery=document.getElementById("galleryContainer");

if(window.CHEF_BEN_IMAGES && window.CHEF_BEN_IMAGES.length){

window.CHEF_BEN_IMAGES.forEach(function(file,index){

const img=document.createElement("img");

img.src="images/"+file;
img.alt="Chef Ben culinary work "+(index+1);
img.loading="lazy";

gallery.appendChild(img);

});

const first="images/"+window.CHEF_BEN_IMAGES[0];

document.getElementById("chefPhoto").style.backgroundImage=
"url('"+first+"')";

if(window.CHEF_BEN_IMAGES.length>1){

document.getElementById("pastryPhoto").style.backgroundImage=
"url('images/"+window.CHEF_BEN_IMAGES[1]+"')";

}

}

const videos=document.getElementById("videoContainer");

if(window.CHEF_BEN_VIDEOS && window.CHEF_BEN_VIDEOS.length){

window.CHEF_BEN_VIDEOS.forEach(function(file){

const video=document.createElement("video");

video.controls=true;
video.preload="metadata";
video.playsInline=true;

const source=document.createElement("source");

source.src="videos/"+file;
source.type="video/mp4";

video.appendChild(source);
videos.appendChild(video);

});

}

});

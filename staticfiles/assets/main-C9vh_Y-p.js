(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();let a=[];async function l(){try{a=await(await fetch("/cars/api/")).json()}catch(e){console.error("Error loading cars:",e),a=[{id:1,make:"BMW",model:"X5",year:2023,price:65e5,mileage:12e3,image:"https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=500",features:["Leather Seats","Navigation","Sunroof","AWD"]},{id:2,make:"Mercedes",model:"C-Class",year:2022,price:45e5,mileage:18e3,image:"https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=500",features:["Premium Sound","Heated Seats","Bluetooth","Backup Camera"]}]}const r=document.getElementById("car-grid");r.innerHTML="",a.forEach(e=>{const s=document.createElement("div");s.className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300";const i=new Intl.NumberFormat("en-KE",{style:"currency",currency:"KES",minimumFractionDigits:0,maximumFractionDigits:0}).format(e.price),t=e.mileage.toLocaleString();s.innerHTML=`
            <div class="relative">
                <img src="${e.image}" alt="${e.make} ${e.model}" class="w-full h-48 object-cover">
                <div class="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${e.year}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${e.make} ${e.model}</h3>
                <div class="flex justify-between items-center mb-4">
                    <span class="text-2xl font-bold text-blue-600">${i}</span>
                    <span class="text-gray-600">${t} km</span>
                </div>
                <div class="mb-4">
                    <div class="flex flex-wrap gap-2">
                        ${e.features.slice(0,2).map(o=>`<span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">${o}</span>`).join("")}
                        ${e.features.length>2?`<span class="text-gray-500 text-sm">+${e.features.length-2} more</span>`:""}
                    </div>
                </div>
                <div class="flex space-x-2">
                    <button onclick="viewDetails(${e.id})" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                        View Details
                    </button>
                    <button onclick="contactDealer(${e.id})" class="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                        <i class="fab fa-whatsapp mr-1"></i> Contact
                    </button>
                </div>
            </div>
        `,r.appendChild(s)})}document.getElementById("test-drive-form").addEventListener("submit",function(r){r.preventDefault(),alert("Thank you for your test drive request! We will contact you within 24 hours to confirm your appointment."),this.reset()});document.getElementById("contact-form").addEventListener("submit",function(r){r.preventDefault(),alert("Thank you for your message! We will get back to you as soon as possible."),this.reset()});document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",function(e){e.preventDefault();const s=document.querySelector(this.getAttribute("href"));s&&s.scrollIntoView({behavior:"smooth",block:"start"})})});document.addEventListener("DOMContentLoaded",l);document.querySelector(".bg-gradient-to-r button").addEventListener("click",function(r){r.preventDefault(),alert("Search functionality would filter the cars below based on your criteria!")});

// Sample car data
const cars = [
    {
        id: 1,
        make: "BMW",
        model: "X5",
        year: 2023,
        price: 65000,
        mileage: 12000,
        image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=500",
        features: ["Leather Seats", "Navigation", "Sunroof", "AWD"]
    },
    {
        id: 2,
        make: "Mercedes",
        model: "C-Class",
        year: 2022,
        price: 45000,
        mileage: 18000,
        image: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=500",
        features: ["Premium Sound", "Heated Seats", "Bluetooth", "Backup Camera"]
    },
    {
        id: 3,
        make: "Audi",
        model: "A4",
        year: 2023,
        price: 52000,
        mileage: 8000,
        image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=500",
        features: ["Quattro AWD", "Virtual Cockpit", "LED Headlights", "Sport Package"]
    },
    {
        id: 4,
        make: "Toyota",
        model: "Camry",
        year: 2023,
        price: 28000,
        mileage: 15000,
        image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=500",
        features: ["Hybrid Engine", "Safety Sense", "Apple CarPlay", "Wireless Charging"]
    },
    {
        id: 5,
        make: "Honda",
        model: "Accord",
        year: 2022,
        price: 32000,
        mileage: 22000,
        image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=500",
        features: ["Turbo Engine", "Honda Sensing", "Leather Interior", "Moonroof"]
    },
    {
        id: 6,
        make: "Tesla",
        model: "Model 3",
        year: 2023,
        price: 48000,
        mileage: 5000,
        image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=500",
        features: ["Autopilot", "Supercharging", "Premium Interior", "Over-the-Air Updates"]
    }
];

// Load cars into the grid
function loadCars() {
    const carGrid = document.getElementById('car-grid');
    
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300';
        
        carCard.innerHTML = `
            <div class="relative">
                <img src="${car.image}" alt="${car.make} ${car.model}" class="w-full h-48 object-cover">
                <div class="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${car.year}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${car.make} ${car.model}</h3>
                <div class="flex justify-between items-center mb-4">
                    <span class="text-2xl font-bold text-blue-600">$${car.price.toLocaleString()}</span>
                    <span class="text-gray-600">${car.mileage.toLocaleString()} miles</span>
                </div>
                <div class="mb-4">
                    <div class="flex flex-wrap gap-2">
                        ${car.features.slice(0, 2).map(feature => 
                            `<span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">${feature}</span>`
                        ).join('')}
                        ${car.features.length > 2 ? `<span class="text-gray-500 text-sm">+${car.features.length - 2} more</span>` : ''}
                    </div>
                </div>
                <div class="flex space-x-2">
                    <button onclick="viewDetails(${car.id})" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                        View Details
                    </button>
                    <button onclick="contactDealer(${car.id})" class="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                        <i class="fab fa-whatsapp mr-1"></i> Contact
                    </button>
                </div>
            </div>
        `;
        
        carGrid.appendChild(carCard);
    });
}

// View car details
function viewDetails(carId) {
    const car = cars.find(c => c.id === carId);
    if (car) {
        alert(`${car.make} ${car.model} ${car.year}\n\nPrice: $${car.price.toLocaleString()}\nMileage: ${car.mileage.toLocaleString()} miles\n\nFeatures:\n${car.features.join('\n')}\n\nContact us for more details!`);
    }
}

// Contact dealer via WhatsApp
function contactDealer(carId) {
    const car = cars.find(c => c.id === carId);
    if (car) {
        const message = `Hi! I'm interested in the ${car.make} ${car.model} ${car.year} listed for $${car.price.toLocaleString()}. Can you provide more information?`;
        const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// Handle form submissions
document.getElementById('test-drive-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your test drive request! We will contact you within 24 hours to confirm your appointment.');
    this.reset();
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you as soon as possible.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Load cars when page loads
document.addEventListener('DOMContentLoaded', loadCars);

// Add some interactivity to the search form
document.querySelector('.bg-gradient-to-r button').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Search functionality would filter the cars below based on your criteria!');
});
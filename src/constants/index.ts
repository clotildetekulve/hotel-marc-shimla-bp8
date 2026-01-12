export const HOTEL_INFO = {
  name: 'Hotel Marc',
  tagline: 'Your Home Away from Home in the Queen of Hills',
  phone: '+91-8091280700',
  email: 'shimlahotelmarc@gmail.com',
  address: 'Hotel Marc, Next to Kotshera College, Chaura Maidan, Shimla, Himachal Pradesh 171004',
  checkIn: '12:00 PM',
  checkOut: '12:00 PM',
  whatsappNumber: '918091280700',
  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.5!2d77.1685!3d31.1048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHotel%20Marc!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  coordinates: {
    lat: 31.1048,
    lng: 77.1685,
  },
};

export const WHATSAPP_LINK = `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent('Hello! I would like to inquire about room availability at Hotel Marc, Shimla.')}`;

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Rooms & Suites', path: '/rooms' },
  { name: 'Dining', path: '/dining' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Attractions', path: '/attractions' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
];

export const DISTANCES = [
  { place: 'Shimla Railway Station', distance: '1.6 km', time: '10 min drive' },
  { place: 'Mall Road / The Ridge', distance: '~3 km', time: '10-15 min drive' },
  { place: 'Viceregal Lodge', distance: '1.8 km', time: 'Walking distance' },
  { place: 'State Museum', distance: '750 m', time: 'Walking distance' },
  { place: 'ISBT (New Bus Stand)', distance: '~5 km', time: '15 min drive' },
];

export const ROOMS = [
  {
    id: 'semi-deluxe',
    name: 'Semi Deluxe Room',
    subtitle: 'Cozy Comfort',
    bestFor: 'Solo Travelers & Budget Stays',
    description: 'A comfortable and well-appointed room with all essential amenities for a pleasant stay in Shimla.',
    amenities: ['Double bed', 'Attached Bathroom', 'TV with cable', 'Room Service', 'Free Wi-Fi'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    featured: false,
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    subtitle: 'Comfortable Stay',
    bestFor: 'Couples & Business Travelers',
    description: 'Spacious rooms with enhanced amenities and comfortable interiors for a relaxing experience.',
    amenities: ['Queen-size bed', 'Attached Bathroom', 'LCD TV', 'Intercom', 'Room Service', 'Free Wi-Fi'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    featured: false,
  },
  {
    id: 'super-deluxe',
    name: 'Super Deluxe Room',
    subtitle: 'Valley View',
    bestFor: 'Couples and View Lovers',
    description: 'Our premium offering featuring large windows with sweeping views of the Shimla valley. Spacious interiors with a cozy seating area.',
    amenities: ['King-size bed', 'Valley View', 'Free Wi-Fi', 'Wardrobe', 'LCD TV', 'Tea/Coffee Maker', 'Toiletries'],
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
    featured: true,
  },
  {
    id: 'family-suite',
    name: 'Family Suite',
    subtitle: 'Spacious Comfort',
    bestFor: 'Families of 4 (2 Adults + 2 Kids)',
    description: 'A spacious unit with two double beds ensuring the whole family stays together comfortably with ample space.',
    amenities: ['Two double beds', 'Ample luggage space', 'Seating area', 'Large bathroom', 'Free Wi-Fi', 'LCD TV'],
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
    featured: false,
  },
];

export const FACILITIES = [
  {
    name: 'Free Wi-Fi',
    description: 'High-speed internet access in rooms and public areas',
    icon: 'Wifi',
  },
  {
    name: 'Secure Parking',
    description: 'Safe and free drive-in parking space for guests',
    icon: 'Car',
  },
  {
    name: 'Travel Desk',
    description: 'Arrange sightseeing taxis and pick-up/drop services',
    icon: 'MapPin',
  },
  {
    name: 'Laundry Service',
    description: 'Same-day laundry and dry cleaning available',
    icon: 'Shirt',
  },
  {
    name: 'Doctor on Call',
    description: 'Medical assistance available for emergencies',
    icon: 'Stethoscope',
  },
  {
    name: 'Power Backup',
    description: '24-hour generator backup for uninterrupted stay',
    icon: 'Zap',
  },
  {
    name: 'Open Terrace',
    description: 'Enjoy the beautiful Shimla weather from our terrace',
    icon: 'Sun',
  },
  {
    name: 'Room Service',
    description: '24-hour room service for your convenience',
    icon: 'ConciergeBell',
  },
];

export const ATTRACTIONS = [
  {
    name: 'Viceregal Lodge',
    description: 'Historic British-era building now housing the Indian Institute of Advanced Study. Stunning architecture and gardens.',
    distance: '1.8 km',
    duration: '30 min visit',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
  },
  {
    name: 'Mall Road & The Ridge',
    description: 'The heart of Shimla with colonial architecture, shops, cafes, and stunning mountain views.',
    distance: '3 km',
    duration: '2-3 hours',
    image: 'https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?w=800&q=80',
  },
  {
    name: 'State Museum',
    description: 'Houses a rich collection of Himachali art, sculptures, and historical artifacts.',
    distance: '750 m',
    duration: '1-2 hours',
    image: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&q=80',
  },
  {
    name: 'Kufri',
    description: 'Popular hill station known for skiing, horse riding, and panoramic Himalayan views.',
    distance: '16 km',
    duration: 'Half day trip',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80',
  },
  {
    name: 'Naldehra',
    description: 'Home to India\'s oldest golf course with magnificent deodar forests.',
    distance: '22 km',
    duration: 'Half day trip',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    name: 'Jakhu Temple',
    description: 'Ancient temple dedicated to Lord Hanuman with the world\'s largest Hanuman statue.',
    distance: '5 km',
    duration: '2 hours',
    image: 'https://images.unsplash.com/photo-1609766418204-94f3a3a8629e?w=800&q=80',
  },
  {
    name: 'Christ Church',
    description: 'Second oldest church in North India with beautiful stained glass windows.',
    distance: '3 km',
    duration: '30 min visit',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
  },
  {
    name: 'Chail',
    description: 'Former summer capital of Patiala with the world\'s highest cricket ground.',
    distance: '45 km',
    duration: 'Full day trip',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Soumitra Hirlekar',
    review: 'A little off from the hustle bustle of Shimla but good connectivity provided from the hotel itself. The rooms are spotlessly clean and overall service is good. I would recommend it to everyone and take the room with the view - it\'s quite spectacular.',
    rating: 5,
    source: 'Goibibo',
  },
  {
    name: 'Sandeep Sharma',
    review: 'Nice hotel and hygienic. Very cooperative staff and delicious food quality. The team guides very well for HP tourism. Thanks Hotel Marc Team Shimla!',
    rating: 5,
    source: 'Goibibo',
  },
  {
    name: 'Ketan Mehta',
    review: 'It was a good stay! The food was excellent and the staff superb! There was a staff member who was particularly helpful. Really looking forward to dropping down here again in future.',
    rating: 5,
    source: 'Goibibo',
  },
  {
    name: 'Amit Sharma',
    review: 'The hotel is small in size but amazingly maintained. You will get anything you want by them in their service. Mr. Rajesh is very polite and courteous to provide you the best services. Overall big Yes from me.',
    rating: 5,
    source: 'Goibibo',
  },
];

export const ALL_FIVE_STAR_REVIEWS = [
  {
    name: 'Soumitra Hirlekar',
    review: 'A little off from the hustle bustle of Shimla but good connectivity provided from the hotel itself. The rooms are spotlessly clean and overall service is good. I would recommend it to everyone and take the room with the view - it\'s quite spectacular.',
    rating: 5,
    source: 'Goibibo',
  },
  {
    name: 'Amit Sharma',
    review: 'The hotel is small in size but amazingly maintained. You will get anything you want by them in their service. Mr. Rajesh is very polite and courteous to provide you the best services. Slight far from mall road but okay for me as you will enjoy trekking and natural beauty here. Overall big Yes from me.',
    rating: 5,
    source: 'Goibibo',
  },
  {
    name: 'Pooja Priyadarshi',
    review: 'The Hotel was very good. Very nice service. Very cooperative staff. Mr. Dev and Mr. Sagar were very helpful. Service was good and nice rooms and restaurant. Good food. Thank you Hotel Marc for making my trip very good!',
    rating: 5,
    source: 'Goibibo',
  },
  {
    name: 'Govind Bhat',
    review: 'Service quality is good, food is good, amenities extremely good, cleanliness is to my expectation. Only drawback is the location - it took some time to find the hotel due to the hilly roads of Shimla.',
    rating: 5,
    source: 'Goibibo',
  },
  {
    name: 'Ketan Mehta',
    review: 'It was a good stay! The food was excellent and the staff superb! There was a staff member who was particularly helpful. Really looking forward to dropping down here again in future.',
    rating: 5,
    source: 'Goibibo',
  },
  {
    name: 'Sandeep Sharma',
    review: 'Nice hotel and hygienic. Very cooperative staff and delicious food quality. Mr. Abhishek\'s nature is very nice and guides very well for HP tourism. Thanks Hotel Marc Team Shimla!',
    rating: 5,
    source: 'Goibibo',
  },
  {
    name: 'Rohan Verma',
    review: 'Very good staff, very supportive. Manager is well behaved. Nice budget hotel, a bit far but they give pick and drop. Overall very nice experience.',
    rating: 5,
    source: 'Goibibo',
  },
  {
    name: 'Sangeetha Bhat',
    review: 'The rooms are small but very very neatly maintained. The approach road is very confusing. Took time to find the place, but still worth it.',
    rating: 5,
    source: 'Goibibo',
  },
  {
    name: 'Anurag Thakur',
    review: 'Good hotel and food. Parking available. Near to HP Vidhan Sabha and Chaura Maidan. Good discounts available.',
    rating: 5,
    source: 'Goibibo',
  },
  {
    name: 'Vincent S',
    review: 'Everything was good about this hotel. In this hotel you will find one of the best hotel rooms. Staff is excellent. Food quality and quantity excellent. Good location; near by Mall Road. Overall very good experience.',
    rating: 5,
    source: 'TripAdvisor',
  },
  {
    name: 'Joel J',
    review: 'We visited Hotel Marc on 4th June. Our stay was wonderful as the manager and people made us feel at home. They have awesome food which was a rarity in Shimla. They ensured we received everything. Thank you!',
    rating: 5,
    source: 'TripAdvisor',
  },
  {
    name: 'Raju T',
    review: 'This hotel is very good. Staff are great too. The hotel has car parking. Room is very clean. There is a half-hour walk to Mall Road. I advise everyone that when you go to Shimla then book this hotel. I am so grateful that I chose Hotel Marc.',
    rating: 5,
    source: 'TripAdvisor',
  },
  {
    name: 'Saurabh M',
    review: 'Great place to stay in Shimla. Hotel has a restaurant in Mall Road which is excellent. Parking facility, drop and pick up, great view of the valley. Really quiet place to spend your weekend getaway.',
    rating: 5,
    source: 'TripAdvisor',
  },
  {
    name: 'MayuShinde',
    review: 'Would recommend this hotel for families. All the basic requirements available. Clean and big bedrooms. Clean washroom. Restaurant available. Near to the station. Helpful staff. Food quality served too good. About the hotel - it\'s peaceful and good for people on budget.',
    rating: 5,
    source: 'TripAdvisor',
  },
  {
    name: 'Madapusimukundan',
    review: 'This is a very good hotel for a family and is about 15 minutes drive from The Mall Road. The hotel staff are very courteous. We reached Shimla very late, still could get food at 10:30 PM! We were very happy with our stay!',
    rating: 5,
    source: 'TripAdvisor',
  },
  {
    name: 'Guest User',
    review: 'Nice stay. Staff was very courteous. Food was homely. Service excellent. Location good. Amenities excellent.',
    rating: 5,
    source: 'Trip.com',
  },
];

export const GOOGLE_REVIEWS_URL = 'https://www.google.com/travel/search?q=hotel%20marc%20shimla&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72485658%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73107089%2C73192290&hl=en-IN&gl=in&ssta=1&ts=CAESCgoCCAMKAggDEAAaHhIcEhQKBwjqDxABGA0SBwjqDxABGA4YATIECAAQACoHCgU6A0lOUg&qs=CAEyFENnc0l4TVhIMXZHd3U3N0VBUkFCOAhCCRHp8xI2xK6AmkIJEb_3Dxnw-vMC&ap=aAG6AQdyZXZpZXdz&ictx=111';

export const IMAGES = {
  hero: '/facade1.jpg',
  heroAbout: '/facade1.jpg',
  heroRooms: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=80',
  heroDining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80',
  heroFacilities: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80',
  heroContact: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
  heroAttractions: 'https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?w=1920&q=80',
  shimlaValley: '/view1.jpg',
  hotelExterior: '/facade1.jpg',
  dining: '/rest1.jpg',
  terrace: '/room1.jpg',
};

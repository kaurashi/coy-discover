const profiles = [
  {
    id: 1,
    name: "Aarav",
    age: 22,
    city: "Delhi",
    college: "Delhi University",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    bio: "Love travelling, photography and discovering new cafes.",
    interests: ["Travel", "Photography", "Music"]
  },
  {
    id: 2,
    name: "Ananya",
    age: 21,
    city: "Mumbai",
    college: "Mumbai University",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
    bio: "A book lover who enjoys music and weekend adventures.",
    interests: ["Books", "Music", "Travel"]
  },
  {
    id: 3,
    name: "Rohan",
    age: 23,
    city: "Bangalore",
    college: "Christ University",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
    bio: "Tech enthusiast, foodie and amateur guitarist.",
    interests: ["Technology", "Food", "Music"]
  },
  {
    id: 4,
    name: "Meera",
    age: 22,
    city: "Delhi",
    college: "Amity University",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    bio: "Enjoys art, exploring places and meeting new people.",
    interests: ["Art", "Travel", "Fitness"]
  },
  {
    id: 5,
    name: "Kabir",
    age: 24,
    city: "Pune",
    college: "Symbiosis University",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600",
    bio: "Football fan, coffee addict and movie enthusiast.",
    interests: ["Football", "Movies", "Coffee"]
  },
  {
    id: 6,
    name: "Ishita",
    age: 21,
    city: "Jaipur",
    college: "Manipal University Jaipur",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    bio: "Creative soul who loves painting and exploring new places.",
    interests: ["Painting", "Travel", "Music"]
  },
  {
    id: 7,
    name: "Vihaan",
    age: 23,
    city: "Hyderabad",
    college: "Osmania University",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    bio: "Fitness enthusiast and weekend trekker.",
    interests: ["Fitness", "Trekking", "Sports"]
  },
  {
    id: 8,
    name: "Aditi",
    age: 22,
    city: "Chandigarh",
    college: "Panjab University",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600",
    bio: "Love fashion, coffee dates and meaningful conversations.",
    interests: ["Fashion", "Coffee", "Reading"]
  },
  {
    id: 9,
    name: "Arjun",
    age: 24,
    city: "Mumbai",
    college: "IIT Bombay",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600",
    bio: "Engineer by day, musician by night.",
    interests: ["Music", "Technology", "Movies"]
  },
  {
    id: 10,
    name: "Kiara",
    age: 21,
    city: "Bangalore",
    college: "Christ University",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600",
    bio: "Adventure seeker who loves beaches and sunsets.",
    interests: ["Beaches", "Travel", "Photography"]
  },
  {
    id: 11,
    name: "Reyansh",
    age: 22,
    city: "Lucknow",
    college: "University of Lucknow",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
    bio: "Food explorer and cricket lover.",
    interests: ["Food", "Cricket", "Travel"]
  },
  {
    id: 12,
    name: "Sanya",
    age: 23,
    city: "Delhi",
    college: "GGSIPU",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
    bio: "Love dancing, movies and spontaneous plans.",
    interests: ["Dance", "Movies", "Music"]
  },
  {
    id: 13,
    name: "Aditya",
    age: 24,
    city: "Pune",
    college: "Fergusson College",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    bio: "Bookworm, gamer and aspiring entrepreneur.",
    interests: ["Gaming", "Books", "Startups"]
  },
  {
    id: 14,
    name: "Myra",
    age: 22,
    city: "Kolkata",
    college: "Jadavpur University",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
    bio: "Artist who finds beauty in little things.",
    interests: ["Art", "Nature", "Photography"]
  },
  {
    id: 15,
    name: "Dev",
    age: 23,
    city: "Ahmedabad",
    college: "Nirma University",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    bio: "Startup enthusiast and passionate cyclist.",
    interests: ["Cycling", "Business", "Fitness"]
  },
  {
    id: 16,
    name: "Tara",
    age: 21,
    city: "Chennai",
    college: "Loyola College",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    bio: "Love poetry, classical music and long walks.",
    interests: ["Poetry", "Music", "Nature"]
  },
  {
    id: 17,
    name: "Karan",
    age: 24,
    city: "Delhi",
    college: "DTU",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600",
    bio: "Football player and adventure lover.",
    interests: ["Football", "Adventure", "Fitness"]
  },
  {
    id: 18,
    name: "Riya",
    age: 22,
    city: "Jaipur",
    college: "JECRC University",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    bio: "Love baking, travelling and cute little cafes.",
    interests: ["Baking", "Travel", "Food"]
  },
  {
    id: 19,
    name: "Ishaan",
    age: 23,
    city: "Hyderabad",
    college: "BITS Pilani",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600",
    bio: "Coding enthusiast and chess player.",
    interests: ["Coding", "Chess", "Gaming"]
  },
  {
    id: 20,
    name: "Diya",
    age: 21,
    city: "Mumbai",
    college: "St. Xavier's College",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600",
    bio: "Dancer, dreamer and lover of sunsets.",
    interests: ["Dance", "Travel", "Photography"]
  },
  {
    id: 21,
    name: "Nikhil",
    age: 22,
    city: "Bhopal",
    college: "MANIT Bhopal",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    bio: "Nature lover who enjoys hiking and camping.",
    interests: ["Hiking", "Camping", "Nature"]
  },
  {
    id: 22,
    name: "Avni",
    age: 23,
    city: "Indore",
    college: "Devi Ahilya University",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
    bio: "Foodie who loves trying different cuisines.",
    interests: ["Food", "Cooking", "Travel"]
  },
  {
    id: 23,
    name: "Manav",
    age: 24,
    city: "Chandigarh",
    college: "Chandigarh University",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
    bio: "Basketball fan and aspiring filmmaker.",
    interests: ["Basketball", "Movies", "Photography"]
  },
  {
    id: 24,
    name: "Sara",
    age: 22,
    city: "Kochi",
    college: "CUSAT",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600",
    bio: "Love beaches, books and peaceful mornings.",
    interests: ["Reading", "Beaches", "Music"]
  },
  {
    id: 25,
    name: "Dhruv",
    age: 23,
    city: "Noida",
    college: "Amity University",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    bio: "Tech geek who loves gaming and sci-fi movies.",
    interests: ["Gaming", "Technology", "Movies"]
  },
  {
    id: 26,
    name: "Naina",
    age: 21,
    city: "Delhi",
    college: "Miranda House",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    bio: "Coffee lover and passionate reader.",
    interests: ["Books", "Coffee", "Art"]
  },
  {
    id: 27,
    name: "Yash",
    age: 24,
    city: "Surat",
    college: "SCET",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600",
    bio: "Entrepreneurial mind with a love for travel.",
    interests: ["Business", "Travel", "Fitness"]
  },
  {
    id: 28,
    name: "Prisha",
    age: 22,
    city: "Pune",
    college: "MIT World Peace University",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
    bio: "Music lover who enjoys exploring new cultures.",
    interests: ["Music", "Culture", "Travel"]
  },
  {
    id: 29,
    name: "Aryan",
    age: 23,
    city: "Gurgaon",
    college: "GD Goenka University",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    bio: "Car enthusiast and weekend road tripper.",
    interests: ["Cars", "Road Trips", "Photography"]
  },
  {
    id: 30,
    name: "Kiara",
    age: 21,
    city: "Bangalore",
    college: "Mount Carmel College",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    bio: "Love animals, painting and outdoor adventures.",
    interests: ["Animals", "Painting", "Adventure"]
  }
]

export default profiles

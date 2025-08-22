// data.js

// This array holds your dummy book data.
// Each object represents a single book with various properties.
const books = [
    {
        id: 'book1',
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        genre: 'Thriller',
        price: 14.99,
        // Using placehold.co for dummy images. Replace with your actual image paths later.
        image: 'images/silent-patient.jpg',
        description: 'A shocking psychological thriller about a woman’s act of violence against her husband—and the psychotherapist obsessed with uncovering what happened.',
        sampleLink: 'path/to/silent-patient-sample.pdf', // Placeholder for a sample link
        rating: 4.5, // Example rating
        isFeatured: true,
        isNewArrival: false
    },
    {
        id: 'book2',
        title: 'Where the Crawdads Sing',
        author: 'Delia Owens',
        genre: 'Mystery',
        price: 12.50,
        image: 'images/crawdads-sing.jpeg',
        description: 'A wild young woman living in the marsh becomes a suspect in a murder investigation.',
        sampleLink: 'path/to/crawdads-sample.pdf',
        rating: 4.8,
        isFeatured: false,
        isNewArrival: true
    },
    {
        id: 'book3',
        title: 'Atomic Habits',
        author: 'James Clear',
        genre: 'Self-Help',
        price: 18.00,
        image: 'images/atomic-habits.jpg',
        description: 'An easy & proven way to build good habits & break bad ones.',
        sampleLink: 'path/to/atomic-habits-sample.pdf',
        rating: 4.9,
        isFeatured: true,
        isNewArrival: false
    },
    {
        id: 'book4',
        title: 'The Midnight Library',
        author: 'Matt Haig',
        genre: 'Fantasy',
        price: 13.75,
        image: 'images/the-midnight-library.jpg',
        description: 'Between life and death, there is a library, and within that library, the possibility to undo regrets and try out different lives.',
        sampleLink: 'path/to/midnight-library-sample.pdf',
        rating: 4.7,
        isFeatured: false,
        isNewArrival: true
    },
    {
        id: 'book5',
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        genre: 'Science Fiction',
        price: 16.99,
        image: 'images/project-hail.jpeg',
        description: 'An astronaut wakes up on a spaceship with no memory of how he got there, on a mission to save humanity.',
        sampleLink: 'path/to/hail-mary-sample.pdf',
        rating: 4.9,
        isFeatured: true,
        isNewArrival: false
    },
    {
        id: 'book6',
        title: 'Circe',
        author: 'Madeline Miller',
        genre: 'Mythology',
        price: 11.25,
        image: 'images/circe.jpg',
        description: 'In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child.',
        sampleLink: 'path/to/circe-sample.pdf',
        rating: 4.6,
        isFeatured: false,
        isNewArrival: false
    },
    {
        id: 'book7',
        title: 'The Henna Artist',
        author: ' Alka Joshi',
        genre: 'Historical Fiction',
        price: 10.50,
        image: 'images/the-henna-artist.jpg',
        description: 'Seventeen-year-old Lakshmi escapes from an abusive marriage and makes her way to Jaipur, India, to become the city’s most highly requested henna artist.',
        sampleLink: 'path/to/henna-artist-sample.pdf',
        rating: 4.3,
        isFeatured: false,
        isNewArrival: true
    },
    {
        id: 'book8',
        title: 'Educated',
        author: 'Tara Westover',
        genre: 'Memoir',
        price: 15.99,
        image: 'images/educated.jpg',
        description: 'The inspiring story of a young woman who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.',
        sampleLink: 'path/to/educated-sample.pdf',
        rating: 4.7,
        isFeatured: true,
        isNewArrival: false
    },
    {
        id: 'book9',
        title: 'Dune',
        author: 'Frank Herbert',
        genre: 'Science Fiction',
        price: 10.00,
        image: 'images/dune.jpg',
        description: 'Set in the distant future, Dune tells the story of Paul Atreides, whose family accepts control of the desert planet Arrakis.',
        sampleLink: 'path/to/dune-sample.pdf',
        rating: 4.6,
        isFeatured: false,
        isNewArrival: false
    },
    {
        id: 'book10',
        title: 'The Guest List',
        author: 'Lucy Fokley',
        genre: 'Mystery',
        price: 13.00,
        image: 'images/the-guest-list.jpg',
        description: 'A wedding celebration turns dark and deadly in this deliciously wicked and atmospheric thriller.',
        sampleLink: 'path/to/guest-list-sample.pdf',
        rating: 4.2,
        isFeatured: false,
        isNewArrival: true
    }
];

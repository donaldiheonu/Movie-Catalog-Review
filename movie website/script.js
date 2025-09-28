// Movie data with comprehensive details
const movies = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        genre: "sci-fi",
        poster: "image/incep.jpeg",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy", "Elliot Page", "Michael Caine"],
        duration: "148 min",
        trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
        id: 2,
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        genre: "action",
        poster: "image/The Dark Knight.jpeg",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine", "Maggie Gyllenhaal"],
        duration: "152 min",
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
        id: 3,
        title: "Pulp Fiction",
        year: 1994,
        rating: 8.9,
        genre: "drama",
        poster: "image/pulp.jpeg",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        director: "Quentin Tarantino",
        cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis", "Ving Rhames"],
        duration: "154 min",
        trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY"
    },
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },
    {
        id: 5,
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        genre: "drama",
        poster: "image/godfa.jpeg",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        director: "Francis Ford Coppola",
        cast: ["Marlon Brando", "Al Pacino", "James Caan", "Diane Keaton", "Robert Duvall"],
        duration: "175 min",
        trailer: "https://www.youtube.com/watch?v=sY1S34973zA"
    },
    {
        id: 6,
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        genre: "sci-fi",
        poster: "image/The Matrix (1999).jpeg",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        director: "The Wachowskis",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving", "Joe Pantoliano"],
        duration: "136 min",
        trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
    },
    {
        id: 7,
        title: "The Social Network",
        year: 2010,
        rating: 7.8,
        genre: "drama",
        poster: "image/social.jpeg",
        description: "The story of Facebook founder Mark Zuckerberg and his Harvard classmates as they launch the social networking site that would become known as Facebook.",
        director: "David Fincher",
        cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake", "Rooney Mara", "Armie Hammer"],
        duration: "120 min",
        trailer: "https://www.youtube.com/embed/lB95KLmpLR4"
    },
    {
        id: 8,
        title: "Blood Diamond",
        year: 2006,
        rating: 8.6,
        genre: "horror",
        poster: "image/blood.jpeg",
        description: "A fisherman, a diamond trader, and a warlord search for a rare diamond in war-torn Sierra Leone while caught between the interests of Western nations and the blood diamond smugglers.",
        director: "Edward Zwick",
        cast: ["Leonardo DiCaprio", "Jennifer Connelly", "Djimon Hounsou", "Arnold Schwarzenegger", "Steven Waddington"],
        duration: "143 min",
        trailer: "https://www.youtube.com/watch?v=yknIZsvQjG4"
    },
    {
        id: 9,
        title: "Catch Me If You Can",
        year: 1994,
        rating: 8.1,
        genre: "drama",
        poster: "image/catch.jpeg",
        description: "A con man, on the run from the FBI, poses as a doctor to steal artwork and diamonds.",
        director: "Steven Spielberg",
        cast: ["Leonardo DiCaprio", "Tom Hanks", "Christopher Walken", "Martin Sheen", "Amy Adams"],
        duration: "141 min",
        trailer: "https://www.youtube.com/watch?v=ppunAo8ckBc"
    },
    {
        id: 10,
        title: "The Great Gatsby",
        year: 2013,
        rating: 8.8,
        genre: "Drama",
        poster: "image/great.jpeg",
        description: "A young and charming man becomes involved with a wealthy family and the party girl of his dreams, while he is swept on a downward spiral towards tragedy.",
        director: "Baz Luhrmann",
        cast: ["Leonardo DiCaprio", "Tobey Maguire", "Carey Mulligan", "Joel Edgerton", "Isla Fisher"],
        duration: "178 min",
        trailer: "https://www.youtube.com/watch?v=5Wa696KmE34"
    },
    {
        id: 11,
        title: "Interstellar",
        year: 2014,
        rating: 8.8,
        genre: "Sci-Fi",
        poster: "image/intersteller.jpeg",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        director: "Christopher Nolan",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Ellen Burstyn", "Bill Irwin"],
        duration: "139 min",
        trailer: "https://www.youtube.com/watch?v=Lm8p5rlrSkY"
    },
    {
        id: 12,
        title: "The Wolf of Wall Street",
        year: 2013,
        rating: 8.0,
        genre: "Drama",
        poster: "image/wolf.jpeg",
        description: "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking, and mob infiltration.",
        director: "Martin Scorsese",
        cast: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie", "Matthew McConaughey", "Kyle Chandler"],
        duration: "156 min",
        trailer: "https://www.youtube.com/watch?v=iszwuBzp97k"
    },
    {
        id: 13,
        title: "The Revenant",
        year: 2015,
        rating: 8.0,
        genre: "Adventure",
        poster: "image/revenant.jpeg",
        description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
        director: "Alejandro G. Iñárritu",
        cast: ["Leonardo DiCaprio", "Tom Hardy", "Will Poulter", "Domhnall Gleeson", "Paul Anderson"],
        duration: "157 min",
        trailer: "https://www.youtube.com/watch?v=L5n9Lq03xhY"
    },
    {
        id: 14,
        title: "Tenet",
        year: 2020,
        rating: 8.0,
        genre: "Sci-Fi",
        poster: "image/tenet.jpeg",
        description: "A secret agent is given a single word as his assignment and must travel through time and space to complete it.",
        director: "Alejandro G. Iñárritu",
        cast: ["Leonardo DiCaprio", "Tom Hardy", "Will Poulter", "Domhnall Gleeson", "Paul Anderson"],
        duration: "143 min",
        trailer: "https://www.youtube.com/watch?v=z9Uje_0_BUo"
    },
    {
        id: 15,
        title: "Joker",
        year: 2019,
        rating: 8.0,
        genre: "Drama",
        poster: "image/joker.jpeg",
        description: "A mentally ill man takes revenge on a wealthy family for the death of his brother.",
        director: "Todd Phillips",
        cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz", "Frances Conroy", "Brett Cullen"],
        duration: "152 min",
        trailer: "https://www.youtube.com/watch?v=zAGVvN0e3JA"
    },
    {
        id: 16,
        title: "Limitless",
        year:  2011,
        rating: 7.8,
        genre: "Sci-Fi",
        poster: "image/limitless.jpeg",
        description: "A man discovers a pill that allows him to use 100% of his brain and becomes a genius.",
        director: "Neil Burger",
        cast: ["Bradley Cooper", "Robert De Niro", "Abbie Cornish", "Andrew Howard", "Jennifer Jason Leigh"],
        duration: "143 min",
        trailer: "https://www.youtube.com/watch?v=4TLppsfzQH8"
    },
    {
        id: 17,
        title: "The Avengers",
        year: 2012,
        rating: 8.0,
        genre: "action",
        poster: "https://images.unsplash.com/photo-1489599808001-1b2b0a0b0b0b?w=400&h=600&fit=crop&crop=faces",
        description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        director: "Joss Whedon",
        cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson"],
        duration: "143 min",
        trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },,
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "drama",
        poster: "image/shaw.jpeg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        duration: "142 min",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },
    
];

// DOM elements
const moviesGrid = document.getElementById('moviesGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('movieModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

// Current filter state
let currentFilter = 'all';
let currentSearch = '';

// Reviews storage
let reviews = JSON.parse(localStorage.getItem('movieReviews')) || {};

// Pagination state
let currentPage = 1;
let moviesPerPage = 16;
let totalPages = 1;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderMovies();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    // Modal functionality
    closeModal.addEventListener('click', closeMovieModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeMovieModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMovieModal();
        }
    });
}

// Handle search
function handleSearch(e) {
    currentSearch = e.target.value.toLowerCase();
    renderMovies();
}

// Handle filter
function handleFilter(e) {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentFilter = e.target.dataset.filter;
    renderMovies();
}

// Render movies based on current filter and search
function renderMovies() {
    const filteredMovies = movies.filter(movie => {
        const matchesFilter = currentFilter === 'all' || movie.genre === currentFilter;
        const matchesSearch = movie.title.toLowerCase().includes(currentSearch) ||
                            movie.director.toLowerCase().includes(currentSearch) ||
                            movie.cast.some(actor => actor.toLowerCase().includes(currentSearch));
        
        return matchesFilter && matchesSearch;
    });
    
    // Calculate pagination
    totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
    currentPage = Math.min(currentPage, totalPages) || 1;
    
    // Get movies for current page
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const moviesToShow = filteredMovies.slice(startIndex, endIndex);
    
    moviesGrid.innerHTML = '';
    
    if (filteredMovies.length === 0) {
        moviesGrid.innerHTML = '<div class="loading">No movies found matching your criteria.</div>';
        renderPagination();
        return;
    }
    
    moviesToShow.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesGrid.appendChild(movieCard);
    });
    
    renderPagination();
}

// Create movie card element
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card fade-in';
    card.onclick = () => openMovieModal(movie);
    
    const stars = '★'.repeat(Math.floor(movie.rating / 2));
    
    card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" loading="lazy">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-year">${movie.year}</p>
            <div class="movie-rating">
                <span class="stars">${stars}</span>
                <span class="rating-text">${movie.rating}/10</span>
            </div>
            <div class="movie-genres">
                <span class="genre-tag">${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Open movie modal with details
function openMovieModal(movie) {
    const stars = '★'.repeat(Math.floor(movie.rating / 2));
    
    modalBody.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="modal-poster">
        <div class="modal-details">
            <h2 class="modal-title">${movie.title}</h2>
            <p class="modal-year">${movie.year}</p>
            <div class="modal-rating">
                <span class="modal-stars">${stars}</span>
                <span class="modal-rating-text">${movie.rating}/10</span>
            </div>
            <p class="modal-description">${movie.description}</p>
            
            <div class="details-grid">
                <div class="detail-item">
                    <span class="detail-label">Director</span>
                    <span class="detail-value">${movie.director}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Duration</span>
                    <span class="detail-value">${movie.duration}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Genre</span>
                    <span class="detail-value">${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Year</span>
                    <span class="detail-value">${movie.year}</span>
                </div>
            </div>
            
            <div class="detail-item">
                <span class="detail-label">Cast</span>
                <div class="cast-list">
                    ${movie.cast.map(actor => `<span class="cast-member">${actor}</span>`).join('')}
                </div>
            </div>
            
            <div class="trailer-container">
                <button class="trailer-btn" onclick="toggleTrailer('${movie.id}')">
                    <i class="fas fa-play"></i>
                    Watch Trailer
                </button>
                <iframe class="trailer-video" id="trailer-${movie.id}" src="${movie.trailer}" frameborder="0" allowfullscreen></iframe>
            </div>
            
            <div class="reviews-section">
                <h3 class="reviews-title">
                    <i class="fas fa-star"></i>
                    Reviews (${getMovieReviews(movie.id).length})
                </h3>
                
                <div class="review-form">
                    <h4>Write a Review</h4>
                    <form id="reviewForm-${movie.id}" onsubmit="submitReview(event, ${movie.id})">
                        <div class="form-group">
                            <label for="reviewerName-${movie.id}">Your Name</label>
                            <input type="text" id="reviewerName-${movie.id}" name="name" required placeholder="Enter your name">
                        </div>
                        
                        <div class="form-group">
                            <label for="reviewRating-${movie.id}">Rating</label>
                            <div class="rating-input">
                                <input type="radio" id="star5-${movie.id}" name="rating" value="5">
                                <label for="star5-${movie.id}">★</label>
                                <input type="radio" id="star4-${movie.id}" name="rating" value="4">
                                <label for="star4-${movie.id}">★</label>
                                <input type="radio" id="star3-${movie.id}" name="rating" value="3">
                                <label for="star3-${movie.id}">★</label>
                                <input type="radio" id="star2-${movie.id}" name="rating" value="2">
                                <label for="star2-${movie.id}">★</label>
                                <input type="radio" id="star1-${movie.id}" name="rating" value="1">
                                <label for="star1-${movie.id}">★</label>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="reviewText-${movie.id}">Your Review</label>
                            <textarea id="reviewText-${movie.id}" name="text" required placeholder="Share your thoughts about this movie..." rows="4"></textarea>
                        </div>
                        
                        <button type="submit" class="submit-review-btn">
                            <i class="fas fa-paper-plane"></i>
                            Submit Review
                        </button>
                    </form>
                </div>
                
                <div class="reviews-list" id="reviewsList-${movie.id}">
                    ${renderMovieReviews(movie.id)}
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Toggle trailer visibility
function toggleTrailer(movieId) {
    const trailer = document.getElementById(`trailer-${movieId}`);
    const button = event.target.closest('.trailer-btn');
    
    if (trailer.style.display === 'none' || trailer.style.display === '') {
        trailer.style.display = 'block';
        button.innerHTML = '<i class="fas fa-pause"></i> Hide Trailer';
    } else {
        trailer.style.display = 'none';
        button.innerHTML = '<i class="fas fa-play"></i> Watch Trailer';
    }
}

// Close movie modal
function closeMovieModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Hide all trailers when closing modal
    const trailers = document.querySelectorAll('.trailer-video');
    trailers.forEach(trailer => {
        trailer.style.display = 'none';
    });
}

// Smooth scrolling for better UX
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add loading animation for better UX
function showLoading() {
    moviesGrid.innerHTML = '<div class="loading"><div class="spinner"></div>Loading movies...</div>';
}

// Debounce search for better performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced search
const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener('input', debouncedSearch);

// Add intersection observer for lazy loading
const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
}, observerOptions);

// Enhanced movie card creation with lazy loading
function createMovieCardWithLazyLoading(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card fade-in';
    card.onclick = () => openMovieModal(movie);
    
    const stars = '★'.repeat(Math.floor(movie.rating / 2));
    
    card.innerHTML = `
        <img data-src="${movie.poster}" alt="${movie.title}" class="movie-poster lazy" loading="lazy">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-year">${movie.year}</p>
            <div class="movie-rating">
                <span class="stars">${stars}</span>
                <span class="rating-text">${movie.rating}/10</span>
            </div>
            <div class="movie-genres">
                <span class="genre-tag">${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</span>
            </div>
        </div>
    `;
    
    // Observe the image for lazy loading
    const img = card.querySelector('img');
    imageObserver.observe(img);
    
    return card;
}

// Review Functions
function getMovieReviews(movieId) {
    return reviews[movieId] || [];
}

function addReview(movieId, review) {
    if (!reviews[movieId]) {
        reviews[movieId] = [];
    }
    
    const newReview = {
        id: Date.now(),
        name: review.name,
        rating: parseInt(review.rating),
        text: review.text,
        date: new Date().toLocaleDateString()
    };
    
    reviews[movieId].unshift(newReview);
    localStorage.setItem('movieReviews', JSON.stringify(reviews));
    
    return newReview;
}

function submitReview(event, movieId) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const review = {
        name: formData.get('name'),
        rating: formData.get('rating'),
        text: formData.get('text')
    };
    
    if (!review.rating) {
        alert('Please select a rating!');
        return;
    }
    
    addReview(movieId, review);
    
    // Update the reviews list
    const reviewsList = document.getElementById(`reviewsList-${movieId}`);
    if (reviewsList) {
        reviewsList.innerHTML = renderMovieReviews(movieId);
    }
    
    // Update review count
    const reviewsTitle = document.querySelector('.reviews-title');
    if (reviewsTitle) {
        reviewsTitle.innerHTML = `<i class="fas fa-star"></i> Reviews (${getMovieReviews(movieId).length})`;
    }
    
    // Clear form
    form.reset();
    
    // Show success message
    showNotification('Review submitted successfully!', 'success');
}

function renderMovieReviews(movieId) {
    const movieReviews = getMovieReviews(movieId);
    
    if (movieReviews.length === 0) {
        return '<div class="no-reviews">No reviews yet. Be the first to review this movie!</div>';
    }
    
    return movieReviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <div class="reviewer-info">
                    <h5 class="reviewer-name">${review.name}</h5>
                    <div class="review-rating">
                        ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                    </div>
                </div>
                <span class="review-date">${review.date}</span>
            </div>
            <p class="review-text">${review.text}</p>
        </div>
    `).join('');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Pagination Functions
function renderPagination() {
    const pagination = document.getElementById('pagination');
    const pageNumbers = document.getElementById('pageNumbers');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (totalPages <= 1) {
        pagination.classList.add('hidden');
        return;
    }
    
    pagination.classList.remove('hidden');
    
    // Update button states
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    // Generate page numbers
    pageNumbers.innerHTML = '';
    
    if (totalPages <= 7) {
        // Show all pages if 7 or fewer
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = createPageButton(i);
            pageNumbers.appendChild(pageBtn);
        }
    } else {
        // Show first page
        pageNumbers.appendChild(createPageButton(1));
        
        if (currentPage > 4) {
            pageNumbers.appendChild(createEllipsis());
        }
        
        // Show pages around current page
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);
        
        for (let i = start; i <= end; i++) {
            if (i !== 1 && i !== totalPages) {
                pageNumbers.appendChild(createPageButton(i));
            }
        }
        
        if (currentPage < totalPages - 3) {
            pageNumbers.appendChild(createEllipsis());
        }
        
        // Show last page
        if (totalPages > 1) {
            pageNumbers.appendChild(createPageButton(totalPages));
        }
    }
}

function createPageButton(pageNum) {
    const button = document.createElement('button');
    button.className = `page-number ${pageNum === currentPage ? 'active' : ''}`;
    button.textContent = pageNum;
    button.onclick = () => goToPage(pageNum);
    return button;
}

function createEllipsis() {
    const ellipsis = document.createElement('span');
    ellipsis.className = 'page-number ellipsis';
    ellipsis.textContent = '...';
    return ellipsis;
}

function goToPage(page) {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
        currentPage = page;
        renderMovies();
        
        // Scroll to top of movies grid
        document.getElementById('moviesGrid').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

function changePage(direction) {
    const newPage = currentPage + direction;
    if (newPage >= 1 && newPage <= totalPages) {
        goToPage(newPage);
    }
}

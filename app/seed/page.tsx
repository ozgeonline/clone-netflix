import { Button } from "@/components/ui/button";
import prisma from "../utils/db";

export default function SeedDatabase() {
  async function postData() {
    "use server";
    try {
      await prisma.movie.createMany({
        data: [
          {
            title: "The Blacklist",
            age: 16,
            duration: 0,
            imageString: "https://utfs.io/f/b953ce61-0155-4c85-a7b1-fe148faa78ac-1juv3z.webp",
            overview: `Raymond "Red" Reddington, one of the FBI's most wanted fugitives, surrenders in person at FBI Headquarters in Washington, D.C. He claims that he and the FBI have the same interests: bringing down dangerous criminals and terrorists. In the last two decades, he's made a list of criminals and terrorists that matter the most but the FBI cannot find because it does not know they exist. Reddington calls this "The Blacklist". Reddington will co-operate, but insists that he will speak only to Elizabeth Keen, a rookie FBI profiler`,
            release: 2013,
            videoSource: "https://utfs.io/f/d730a18b-0c9d-49c6-9f68-ffd4826841b5-le5mnv.mp4",
            category: "show",
            cast: "James Spader, Megan Boone, Diego Klattenhoff",
            genres: "Crime, Drama, Mystery"
          },
          {
            title: "Suits",
            age: 12,
            duration: 0,
            imageString: "https://utfs.io/f/8968eee9-2d15-4400-88d8-172a5281dce3-1tdafa.webp",
            overview: "While running from a drug deal gone bad, Mike Ross, a brilliant young college-dropout, slips into a job interview with one of New York City's best legal closers, Harvey Specter. Tired of cookie-cutter law school grads, Harvey takes a gamble by hiring Mike on the spot after he recognizes his raw talent and photographic memory.",
            release: 2011,
            videoSource: "https://utfs.io/f/aca1cdea-0337-4b1c-a22d-93ebe3d1eb36-iuxv2x.mp4",
            category: "show",
            cast: "Gabriel Macht, Patrick J.Adams, Meghan Markle",
            genres: "Comedy, Drama"
          },
          {
            title: "Chernobyl",
            age: 16,
            duration: 0,
            imageString: "https://utfs.io/f/e3804e71-f552-40ad-81df-03ea50273bf6-o4w7q6.webp",
            overview: "The true story of one of the worst man-made catastrophes in history: the catastrophic nuclear accident at Chernobyl. A tale of the brave men and women who sacrificed to save Europe from unimaginable disaster.",
            release: 2019,
            videoSource: "https://utfs.io/f/45a38bf5-92a5-4a74-8020-3fa7153e3077-djg73u.mp4",
            category: "show",
            cast: "Jared Harris, Jessie Buckley, Stellan Skarsgård",
            genres: "Drama, History, Thriller"
          },
          {
            title: "Monk",
            release: 2002,
            age: 12,
            duration: 0,
            imageString: "https://utfs.io/f/2aaa5a09-09fc-444a-bdc0-a4685f7dad74-1zylb.webp",
            overview: "Adrian Monk was once a rising star with the San Francisco Police Department, legendary for using unconventional means to solve the department's most baffling cases. But after the tragic (and still unsolved) murder of his wife Trudy, he developed an extreme case of obsessive-compulsive disorder. Now working as a private consultant, Monk continues to investigate cases in the most unconventional ways.",
            videoSource: "https://utfs.io/f/adf7b099-d554-4ab6-b8cc-96c01cc331b6-rfp1ma.mp4",
            category: "show",
            cast: "Tony Shalhoub, Jason Gray-Stanford, Ted Levine",
            genres: "Comedy, Crime, Drama"
          },
          {
            title: "Family Guy",
            age: 16,
            duration: 0,
            imageString: "https://utfs.io/f/6cfb0663-3219-4145-9bc2-b2bd3561b161-l76q3g.webp",
            overview: "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
            release: 1999,
            videoSource: "https://utfs.io/f/3f040de7-3b4e-414f-9263-05d525e09980-5rh3b1.mp4",
            category: "show",
            cast: "Seth MacFarlane, Alex Borstein, Seth Green",
            genres: "Animation, Comedy"
          },
          {
            title: "3 Body Problem",
            age: 18,
            duration: 0,
            imageString: "https://utfs.io/f/8bc48fd5-0a53-4537-8184-492a764c7e71-tufrp.webp",
            overview: "Unsettling events put a group of brilliant friends on edge as a mystery unravels with origins tracing back to China during the Cultural Revolution.",
            release: 2024,
            videoSource: "https://utfs.io/f/80829026-549f-4f55-ba98-dbb5097a67cd-rajv4y.mp4",
            category: "show",
            cast: "Jess Hong, Liam Cunningham, Eiza González",
            genres: "Drama, Sci-Fi"
          },
          {
            title: "Lucifer",
            age: 18,
            duration: 0,
            imageString: "https://utfs.io/f/d163861c-0d47-4cb3-b598-6bcd14a5b50c-8fw1ac.webp",
            overview: "This superhero fantasy, based on the exploits of the popular DC Comics creation, features a slew of characters straight out of Sunday school.",
            release: 2021,
            videoSource: "https://utfs.io/f/b92d4ccd-498e-4b3f-b939-e41a6277afb7-w9oiqb.mp4",
            category: "show",
            cast: "Tom Ellis, Lauren German, Kevin Alejandro",
            genres: "Drama, Crime"
          },
          {
            title: "After Life",
            age: 18,
            duration: 0,
            imageString: "https://utfs.io/f/078e2740-dd68-4a77-9767-6b862330e124-ojj1s0.webp",
            overview: "This darkly comedic drama series about a widower struggling with the meaning of life was created by and stars Ricky Gervais.",
            release: 2022,
            videoSource: "https://utfs.io/f/c79f1940-2b5b-42b0-b5dd-b21da2ad888e-rybax4.mp4",
            category: "show",
            cast: "Ricky Gervais, Tom Basden, Tony Way",
            genres: "Drama, Comedies"
          },
          {
            title: "Breaking Bad",
            age: 18,
            duration: 0,
            imageString: "https://utfs.io/f/501059f1-99d7-4de8-8a90-b43835df3003-1a1qir.webp",
            overview: "What does it take to turn a good man bad? Thanks to a cancer diagnosis, a mastery of chemistry and one epic ego, Walter White is about to find out.",
            release: 2013,
            videoSource: "https://utfs.io/f/658eb1aa-05f9-4ac5-ba43-7a0e913ea64e-j4c79n.mp4",
            category: "show",
            cast: "Bryan Cranston, Aaron Paul, Anna Gunn",
            genres: "Drama, Crime"
          },
          {
            title: "Dexter",
            age: 18,
            duration: 0,
            imageString: "https://utfs.io/f/f6c335c4-468c-475c-8dd1-9937d2021139-m2vjo6.webp",
            overview: "In this dark drama series, a forensic analyst works with the police to solve murders while secretly killing criminals who have escaped punishment.",
            release: 2013,
            videoSource: "https://utfs.io/f/f6c96ee9-7ca2-44ae-a74a-a3f10e2f8df7-hkvht7.mp4",
            category: "show",
            cast: "Michael C. Hall, Jennifer Carpenter, David Zayas",
            genres: "Drama, Mysteries"
          },
          {
            title: "The Queen's Gambit",
            age: 18,
            duration: 0,
            imageString: "https://utfs.io/f/4ba5d715-30ba-4488-87bb-2092799edcc5-fou6pl.webp",
            overview: "Winner of 11 Emmys, this smart and stylish drama about a '60s chess prodigy was hailed by The New Yorker as the most satisfying show on television.",
            release: 2020,
            videoSource: "https://utfs.io/f/5ec95ef0-ef8d-4ec0-a092-2fd62cb1c3ab-ejmwt5.mp4",
            category: "show",
            cast: "Anya Taylor-Joy, Bill Camp, Marielle Heller",
            genres: "Drama, Emotional"
          },
          {
            title: "Black Mirror",
            age: 18,
            duration: 0,
            imageString: "https://utfs.io/f/99e52f12-900f-43b8-9e4d-02735c05568c-j2ty7y.webp",
            overview: "Twisted tales run wild in this mind-bending anthology series that reveals humanity's worst traits, greatest innovations and more.",
            release: 2023,
            videoSource: "https://utfs.io/f/0222ccee-32ee-4816-8b54-9b6d30485e4e-mfuulm.mp4",
            category: "show",
            cast: "Jesse Plemons, Cristin Milioti, Jimmi Simpson",
            genres: "Drama, Sci-Fi"
          },
          {
            title: "Friends",
            age: 18,
            duration: 0,
            imageString: "https://utfs.io/f/e82f18a0-d791-4eae-bca0-1024887dfc28-9xa3qj.webp",
            overview: "Rachel runs from her wedding and meets the friends in the coffee place. Ross is depressed about his divorce but he still has a crush on Rachel.",
            release: 2003,
            videoSource: "https://utfs.io/f/dca8f186-07c9-4f95-9db3-f346184a7ed6-9xa3qj.mp4",
            category: "show",
            cast: "Jennifer Aniston, Courteney Cox, Lisa Kudrow",
            genres: "Sitcoms, Comedies"
          },
          {
            title: "Baby Reindeer",
            age: 18,
            duration: 0,
            imageString: "https://utfs.io/f/05ab9cd9-f79f-4171-9683-c66118da9876-n3jwjb.webp",
            overview: "Struggling comedian and barman Donny meets a lonely woman claiming to be a lawyer. He offers her a cup of tea on the house, and she's instantly obsessed.",
            release: 2024,
            videoSource: "https://utfs.io/f/918b61f3-033c-41ec-b2b3-a18bd1a2fe14-i1m7ls.mp4",
            category: "show",
            cast: "Richard Gadd, Jessica Gunning, Nava Mau",
            genres: "Drama, Comedies"
          },
          {
            title: "The Smurfs",
            age: 7,
            duration: 0,
            imageString: "https://utfs.io/f/d4c181c1-149a-437c-bc92-10ecf9d9e62d-23r4e.webp",
            overview: "The Smurfs are up to more zany antics in this fun series of adventures featuring Papa Smurf, Smurfette, Brainy and the evil Gargamel.",
            release: 2021,
            videoSource: "https://utfs.io/f/4996e57d-5302-4331-97b0-5b97e9cb3a2d-bjpyw4.mp4",
            category: "show",
            cast: "Davis Freeman, Bérangère McNeese, Youssef El Kaoukibi",
            genres: "Kids, Comedies"
          },
          {
            title: "Erşan Kuneri",
            age: 18,
            duration: 0,
            imageString: "https://utfs.io/f/21a3da8b-5c18-484c-8a0d-b9660db4c1c6-1lrb3z.webp",
            overview: "In this comedy series from Cem Yılmaz, a famous erotic moviemaker decides to create more layered films. Each episode includes a short spoof on a genre.",
            release: 2022,
            videoSource: "https://utfs.io/f/b5fee1a7-a8c6-45e6-96c5-3b756a7c6b88-drhytp.mp4",
            category: "show",
            cast: "Cem Yılmaz, Zafer Algöz, Ezgi Mola",
            genres: "Comedies, showbiz"
          },
          {
            title: "Our Living World",
            age: 7,
            duration: 0,
            imageString: "https://utfs.io/f/e909c18e-76a8-4d30-a61e-b5aea2735011-2d70.webp",
            overview: "This stunning nature series narrated by Cate Blanchett explores the intelligence, resourcefulness and interconnectedness of life on our planet.",
            release: 2024,
            videoSource: "https://utfs.io/f/07807f3f-1d8f-4988-be85-7e4fb23447ee-7187ju.mp4",
            category: "show",
            cast: "Cate Blanchett",
            genres: "Nature, Docuseries"
          },
          {
            title: "Ölümlü Dünya 2",
            age: 13,
            duration: 1.55,
            imageString: "https://utfs.io/f/ea921a00-8bec-4868-8a94-14dbf64d6e85-47odjf.webp",
            overview: "When Zafer falls into the hands of the Organization, the Mermer clan of amiable assassins comes out of hiding to settle the score once and for all.",
            release: 2023,
            videoSource: "https://utfs.io/f/ad5daa6b-152c-4a4b-a07f-afad123e5ec8-bywlm4.mp4",
            category: "movie",
            cast: "Ahmet Mümtaz Taylan, Alper Kul, Doğu Demirkol",
            genres: "Comedies, Absurd"
          },
          {
            title: "Gran Turismo",
            age: 12,
            duration: 2.15,
            overview: "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
            videoSource: "https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4",
            imageString: "https://utfs.io/f/014237a2-04cd-4a2f-9fda-ec57929b65cb-1w6l4.webp",
            release: 2023,
            category: "movie",
            cast: "Gran Turismo, Orlando Bloom, Archie Madekwe",
            genres: "Action, Adventure, Drama"
          },
          {
            title: "Retribution",
            age: 12,
            duration: 1.31,
            imageString: "https://utfs.io/f/901b71fd-f3e3-4177-8da5-ac869c32df13-7tf6w1.webp",
            overview: "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
            release: 2023,
            videoSource: "https://utfs.io/f/02953459-a3f4-4680-a94c-d4cb275d29a0-7azsrb.mp4",
            category: "movie",
            cast: "Liam Neeson, Noma Dumezweni, Lilly Aspell",
            genres: "Action, Thriller"
          },
          {
            title: "Spider-Man: Across the Spider-Verse",
            age: 12,
            duration: 2.2,
            imageString: "https://utfs.io/f/0d7102f7-38fc-4641-b9f5-3c6203ad2782-etfdwb.webp",
            overview: "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
            release: 2023,
            videoSource: "https://utfs.io/f/406435b3-3b16-4946-977e-2b18d1f59d7e-z5v71f.mp4",
            category: "movie",
            cast: "Shameik Moore, Hailee Steinfeld, Brian Tyree Henry",
            genres: "Animation, Action, Adventure"
          },
          {
            title: "Coco",
            release: 2017,
            age: 0,
            duration: 1.45,
            imageString: "https://utfs.io/f/86d46afa-4521-4691-9a79-69383d2f153a-1tkgo.webp",
            overview: "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
            videoSource: "https://utfs.io/f/2377d939-a80c-48d7-9015-47b2f0cf2736-fgcclx.mp4",
            category: "movie",
            cast: "Anthony Gonzalez, Gael García Bernal, Benjamin Bratt",
            genres: "Animation, Drama, Adventure"
          },
          {
            title: "A Haunting in Venice",
            age: 12,
            duration: 1.44,
            imageString: "https://utfs.io/f/f0af53c7-c06d-4f4b-9943-bb5350e35329-dk8yno.webp",
            overview: "Celebrated sleuth Hercule Poirot, now retired and living in self-imposed exile in Venice, reluctantly attends a Halloween séance at a decaying, haunted palazzo. When one of the guests is murdered, the detective is thrust into a sinister world of shadows and secrets.",
            release: 2023,
            videoSource: "https://utfs.io/f/ad7b35db-3695-4cde-a1f0-935044fae0d5-oisko6.mp4",
            category: "movie",
            cast: "Kenneth Branagh, Michelle Yeoh, Jamie Dornan",
            genres: "Crime, Drama, Horror"
          },
          {
            title: "Five Nights at Freddy's",
            age: 16,
            duration: 1.5,
            overview: "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
            release: 2023,
            videoSource: "https://utfs.io/f/5ed3e365-ba18-4921-8190-a04137f5864f-msq6is.mp4",
            imageString: "https://utfs.io/f/d41ead4d-6436-420f-a199-d915dd43c534-1vdf6.webp",
            category: "movie",
            cast: "Josh Hutcherson, Piper Rubio, Elizabeth Lail",
            genres: "Horror, Mystery, Thriller"
          },
          {
            title: "Lucy",
            age: 18,
            duration: 1.29,
            imageString: "https://utfs.io/f/0809f8e0-5ba6-4223-b6b3-3f8199745075-1zfsv.webp",
            overview: "When a young American in Taiwan unwillingly becomes a drug mule, the high-tech narcotics in her system activate superhuman powers.",
            release: 2014,
            videoSource: "https://utfs.io/f/7fbc3d53-1854-4b5b-bc4f-a80a3365fed1-cj7g1g.mp4",
            category: "movie",
            cast: "Scarlett Johansson, Morgan Freeman, Choi Min-sik",
            genres: "Sci-Fi, Action, Adventure"
          },
          {
            title: "Laal Singh Chaddha",
            age: 16,
            duration: 2.38,
            imageString: "https://utfs.io/f/efe2c81f-cbf9-4d22-94c6-c8ffba866b2c-22me.webp",
            overview: "An earnestly optimistic man recounts his journey through life, love and momentous milestones in Indian history. Adapted from 1994’s Forrest Gump.",
            release: 2022,
            videoSource: "https://utfs.io/f/a0ba64ea-5138-491e-be46-6e1e63d80e0e-v75ypc.mp4",
            category: "movie",
            cast: "Aamir Khan, Kareena Kapoor, Chaitanya Akkineni",
            genres: "Romantic, Drama"
          },
          {
            title: "Honeymoonish",
            age: 13,
            duration: 1.40,
            imageString: "https://utfs.io/f/b18169da-b6fc-43d7-8160-b81ba7888f33-1n7tbv.webp",
            overview: "Desperate to get back at her ex, Noor marries the first willing man she finds. But on their romantic honeymoon, secrets begin to spill out.",
            release: 2024,
            videoSource: "https://utfs.io/f/23394572-850e-483f-af86-76483be530d5-xjzwo0.mp4",
            category: "movie",
            cast: "Nour Al Ghandour, Mahmoud Boushahri, Faisal Almezel",
            genres: "Romantic, Comedies"
          },
          {
            title: "Kuru Otlar Üstüne",
            age: 13,
            duration: 3.17,
            imageString: "https://utfs.io/f/70725db7-b833-40a5-aebd-327f2a409ab4-fvz4s1.webp",
            overview: "Facing allegations of sexual misconduct, a disillusioned teacher in a remote village meets a colleague who may help make sense of the challenges at hand.",
            release: 2023,
            videoSource: "https://utfs.io/f/e595f2e0-9732-45ad-a331-d7a6e2da968e-l0w74w.mp4",
            category: "movie",
            cast: "Deniz Celiloğlu, Merve Dizdar, Musab Ekici",
            genres: "Drama, Social"
          },
          {
            title: "The Pianist",
            age: 18,
            duration: 2.29,
            imageString: "https://utfs.io/f/b762ba67-2ce2-444b-8a80-c672819fb07f-1ya1k3.webp",
            overview: "Famed Polish pianist Wladyslaw Szpilman struggles to survive the onslaught of Nazi tyranny during World War II in this drama based on his memoirs.",
            release: 2002,
            videoSource: "https://utfs.io/f/5660b620-b6ca-446e-b4ed-9dc3fe65b8ff-8qora0.mp4",
            category: "movie",
            cast: "Adrien Brody, Thomas Kretschmann, Frank Finlay",
            genres: "Drama, Violent"
          },
          {
            title: "PK",
            age: 13,
            duration: 2.25,
            imageString: "https://utfs.io/f/d1c87d43-2d1a-4269-9925-23c05ecb4890-2rf.webp",
            overview: "When a naïve alien stranded on Earth is told to pray for a way home, his search for god reveals the follies of blind faith in organized religion.",
            release: 2014,
            videoSource: "https://utfs.io/f/a99435c3-7724-4a46-b358-a35ddce1c228-esglic.mp4",
            category: "movie",
            cast: "Aamir Khan, Anushka Sharma, Sanjay Dutt",
            genres: "Romantic, Fantasy"
          },
          {
            title: "Murder Mystery",
            age: 16,
            duration: 1.38,
            imageString: "https://utfs.io/f/01687198-7032-41e9-bdda-f59013c93707-deocml.webp",
            overview: "In this irreverent action comedy, a New York cop and his wife become murder suspects while vacationing in Europe.",
            release: 2019,
            videoSource: "https://utfs.io/f/358b9f1c-4ca7-4153-be28-8c7043f7eb1d-pz5te1.mp4",
            category: "movie",
            cast: "Adam Sandler, Jennifer Aniston, Luke Evans",
            genres: "Mystery, Comedies, Action, Adventure"
          },
          {
            title: "Fast & Furious 8",
            age: 16,
            duration: 2.16,
            imageString: "https://utfs.io/f/26205228-bfcc-47d9-9b34-450f24c67e1a-1v7fg.webp",
            overview: "A ruthless cyberterrorist forces Dom to turn against Letty and the crew, endangering everything they've built. But they won't let him go so easily.",
            release: 2017,
            videoSource: "https://utfs.io/f/bac27bce-bd55-4e79-a263-66e4e25109b9-cdlmti.mp4",
            category: "movie",
            cast: "Vin Diesel, Dwayne Johnson, Jason Statham",
            genres: "Action, Adventure"
          },
        ],
      })
      console.log('Data seeded successfully')
    } catch (error) {
      console.error('Error seeding data:', error)
    }
    
  }

  return (
    <div className="m-5 flex flex-col">
      <form action={postData}>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

// const movies = [
//   {
//     title: "The Blacklist",
//     age: 16,
//     duration: 0,
//     imageString: "https://utfs.io/f/b953ce61-0155-4c85-a7b1-fe148faa78ac-1juv3z.webp",
//     overview: `Raymond "Red" Reddington, one of the FBI's most wanted fugitives, surrenders in person at FBI Headquarters in Washington, D.C. He claims that he and the FBI have the same interests: bringing down dangerous criminals and terrorists. In the last two decades, he's made a list of criminals and terrorists that matter the most but the FBI cannot find because it does not know they exist. Reddington calls this "The Blacklist". Reddington will co-operate, but insists that he will speak only to Elizabeth Keen, a rookie FBI profiler`,
//     release: 2013,
//     videoSource: "https://utfs.io/f/d730a18b-0c9d-49c6-9f68-ffd4826841b5-le5mnv.mp4",
//     category: "show",
//     cast: "James Spader, Megan Boone, Diego Klattenhoff",
//     genres: "Crime, Drama, Mystery"
//   },
//   {
//     title: "Suits",
//     age: 12,
//     duration: 0,
//     imageString: "https://utfs.io/f/8968eee9-2d15-4400-88d8-172a5281dce3-1tdafa.webp",
//     overview: "While running from a drug deal gone bad, Mike Ross, a brilliant young college-dropout, slips into a job interview with one of New York City's best legal closers, Harvey Specter. Tired of cookie-cutter law school grads, Harvey takes a gamble by hiring Mike on the spot after he recognizes his raw talent and photographic memory.",
//     release: 2011,
//     videoSource: "https://utfs.io/f/aca1cdea-0337-4b1c-a22d-93ebe3d1eb36-iuxv2x.mp4",
//     category: "show",
//     cast: "Gabriel Macht, Patrick J.Adams, Meghan Markle",
//     genres: "Comedy, Drama"
//   },
//   {
//     title: "Chernobyl",
//     age: 16,
//     duration: 0,
//     imageString: "https://utfs.io/f/e3804e71-f552-40ad-81df-03ea50273bf6-o4w7q6.webp",
//     overview: "The true story of one of the worst man-made catastrophes in history: the catastrophic nuclear accident at Chernobyl. A tale of the brave men and women who sacrificed to save Europe from unimaginable disaster.",
//     release: 2019,
//     videoSource: "https://utfs.io/f/45a38bf5-92a5-4a74-8020-3fa7153e3077-djg73u.mp4",
//     category: "show",
//     cast: "Jared Harris, Jessie Buckley, Stellan Skarsgård",
//     genres: "Drama, History, Thriller"
//   },
//   {
//     title: "Monk",
//     release: 2002,
//     age: 12,
//     duration: 0,
//     imageString: "https://utfs.io/f/2aaa5a09-09fc-444a-bdc0-a4685f7dad74-1zylb.webp",
//     overview: "Adrian Monk was once a rising star with the San Francisco Police Department, legendary for using unconventional means to solve the department's most baffling cases. But after the tragic (and still unsolved) murder of his wife Trudy, he developed an extreme case of obsessive-compulsive disorder. Now working as a private consultant, Monk continues to investigate cases in the most unconventional ways.",
//     videoSource: "https://utfs.io/f/adf7b099-d554-4ab6-b8cc-96c01cc331b6-rfp1ma.mp4",
//     category: "show",
//     cast: "Tony Shalhoub, Jason Gray-Stanford, Ted Levine",
//     genres: "Comedy, Crime, Drama"
//   },
//   {
//     title: "Family Guy",
//     age: 16,
//     duration: 0,
//     imageString: "https://utfs.io/f/6cfb0663-3219-4145-9bc2-b2bd3561b161-l76q3g.webp",
//     overview: "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
//     release: 1999,
//     videoSource: "https://utfs.io/f/3f040de7-3b4e-414f-9263-05d525e09980-5rh3b1.mp4",
//     category: "show",
//     cast: "Seth MacFarlane, Alex Borstein, Seth Green",
//     genres: "Animation, Comedy"
//   },
//   {
//     title: "3 Body Problem",
//     age: 18,
//     duration: 0,
//     imageString: "https://utfs.io/f/8bc48fd5-0a53-4537-8184-492a764c7e71-tufrp.webp",
//     overview: "Unsettling events put a group of brilliant friends on edge as a mystery unravels with origins tracing back to China during the Cultural Revolution.",
//     release: 2024,
//     videoSource: "https://utfs.io/f/80829026-549f-4f55-ba98-dbb5097a67cd-rajv4y.mp4",
//     category: "show",
//     cast: "Jess Hong, Liam Cunningham, Eiza González",
//     genres: "Drama, Sci-Fi"
//   },
//   {
//     title: "Lucifer",
//     age: 18,
//     duration: 0,
//     imageString: "https://utfs.io/f/d163861c-0d47-4cb3-b598-6bcd14a5b50c-8fw1ac.webp",
//     overview: "This superhero fantasy, based on the exploits of the popular DC Comics creation, features a slew of characters straight out of Sunday school.",
//     release: 2021,
//     videoSource: "https://utfs.io/f/b92d4ccd-498e-4b3f-b939-e41a6277afb7-w9oiqb.mp4",
//     category: "show",
//     cast: "Tom Ellis, Lauren German, Kevin Alejandro",
//     genres: "Drama, Crime"
//   },
//   {
//     title: "After Life",
//     age: 18,
//     duration: 0,
//     imageString: "https://utfs.io/f/078e2740-dd68-4a77-9767-6b862330e124-ojj1s0.webp",
//     overview: "This darkly comedic drama series about a widower struggling with the meaning of life was created by and stars Ricky Gervais.",
//     release: 2022,
//     videoSource: "https://utfs.io/f/c79f1940-2b5b-42b0-b5dd-b21da2ad888e-rybax4.mp4",
//     category: "show",
//     cast: "Ricky Gervais, Tom Basden, Tony Way",
//     genres: "Drama, Comedies"
//   },
//   {
//     title: "Breaking Bad",
//     age: 18,
//     duration: 0,
//     imageString: "https://utfs.io/f/501059f1-99d7-4de8-8a90-b43835df3003-1a1qir.webp",
//     overview: "What does it take to turn a good man bad? Thanks to a cancer diagnosis, a mastery of chemistry and one epic ego, Walter White is about to find out.",
//     release: 2013,
//     videoSource: "https://utfs.io/f/658eb1aa-05f9-4ac5-ba43-7a0e913ea64e-j4c79n.mp4",
//     category: "show",
//     cast: "Bryan Cranston, Aaron Paul, Anna Gunn",
//     genres: "Drama, Crime"
//   },
//   {
//     title: "Dexter",
//     age: 18,
//     duration: 0,
//     imageString: "https://utfs.io/f/f6c335c4-468c-475c-8dd1-9937d2021139-m2vjo6.webp",
//     overview: "In this dark drama series, a forensic analyst works with the police to solve murders while secretly killing criminals who have escaped punishment.",
//     release: 2013,
//     videoSource: "https://utfs.io/f/f6c96ee9-7ca2-44ae-a74a-a3f10e2f8df7-hkvht7.mp4",
//     category: "show",
//     cast: "Michael C. Hall, Jennifer Carpenter, David Zayas",
//     genres: "Drama, Mysteries"
//   },
//   {
//     title: "The Queen's Gambit",
//     age: 18,
//     duration: 0,
//     imageString: "https://utfs.io/f/4ba5d715-30ba-4488-87bb-2092799edcc5-fou6pl.webp",
//     overview: "Winner of 11 Emmys, this smart and stylish drama about a '60s chess prodigy was hailed by The New Yorker as the most satisfying show on television.",
//     release: 2020,
//     videoSource: "https://utfs.io/f/5ec95ef0-ef8d-4ec0-a092-2fd62cb1c3ab-ejmwt5.mp4",
//     category: "show",
//     cast: "Anya Taylor-Joy, Bill Camp, Marielle Heller",
//     genres: "Drama"
//   },
//   {
//     title: "Black Mirror",
//     age: 18,
//     duration: 0,
//     imageString: "https://utfs.io/f/99e52f12-900f-43b8-9e4d-02735c05568c-j2ty7y.webp",
//     overview: "Twisted tales run wild in this mind-bending anthology series that reveals humanity's worst traits, greatest innovations and more.",
//     release: 2023,
//     videoSource: "https://utfs.io/f/0222ccee-32ee-4816-8b54-9b6d30485e4e-mfuulm.mp4",
//     category: "show",
//     cast: "Jesse Plemons, Cristin Milioti, Jimmi Simpson",
//     genres: "Drama, Sci-Fi"
//   },
//   {
//     title: "Friends",
//     age: 18,
//     duration: 0,
//     imageString: "https://utfs.io/f/e82f18a0-d791-4eae-bca0-1024887dfc28-9xa3qj.webp",
//     overview: "Rachel runs from her wedding and meets the friends in the coffee place. Ross is depressed about his divorce but he still has a crush on Rachel.",
//     release: 2003,
//     videoSource: "https://utfs.io/f/228fa952-1a9a-41ec-9c11-bdec6b7587d2-9xa3qj.mp4",
//     category: "show",
//     cast: "Jennifer Aniston, Courteney Cox, Lisa Kudrow",
//     genres: "Sitcoms, Comedies"
//   },
//   {
//     title: "Baby Reindeer",
//     age: 18,
//     duration: 0,
//     imageString: "https://utfs.io/f/05ab9cd9-f79f-4171-9683-c66118da9876-n3jwjb.webp",
//     overview: "Struggling comedian and barman Donny meets a lonely woman claiming to be a lawyer. He offers her a cup of tea on the house, and she's instantly obsessed.",
//     release: 2024,
//     videoSource: "https://utfs.io/f/918b61f3-033c-41ec-b2b3-a18bd1a2fe14-i1m7ls.mp4",
//     category: "show",
//     cast: "Richard Gadd, Jessica Gunning, Nava Mau",
//     genres: "Drama, Comedies"
//   },
//   {
//     title: "The Smurfs",
//     age: 7,
//     duration: 0,
//     imageString: "https://utfs.io/f/d4c181c1-149a-437c-bc92-10ecf9d9e62d-23r4e.webp",
//     overview: "The Smurfs are up to more zany antics in this fun series of adventures featuring Papa Smurf, Smurfette, Brainy and the evil Gargamel.",
//     release: 2021,
//     videoSource: "https://utfs.io/f/4996e57d-5302-4331-97b0-5b97e9cb3a2d-bjpyw4.mp4",
//     category: "show",
//     cast: "Davis Freeman, Bérangère McNeese, Youssef El Kaoukibi",
//     genres: "Kids, Comedies"
//   },
//   {
//     title: "Erşan Kuneri",
//     age: 18,
//     duration: 0,
//     imageString: "https://utfs.io/f/21a3da8b-5c18-484c-8a0d-b9660db4c1c6-1lrb3z.webp",
//     overview: "In this comedy series from Cem Yılmaz, a famous erotic moviemaker decides to create more layered films. Each episode includes a short spoof on a genre.",
//     release: 2022,
//     videoSource: "https://utfs.io/f/b5fee1a7-a8c6-45e6-96c5-3b756a7c6b88-drhytp.mp4",
//     category: "show",
//     cast: "Cem Yılmaz, Zafer Algöz, Ezgi Mola",
//     genres: "Comedies"
//   },
//   {
//     title: "Ölümlü Dünya 2",
//     age: 13,
//     duration: 1.55,
//     imageString: "https://utfs.io/f/ea921a00-8bec-4868-8a94-14dbf64d6e85-47odjf.webp",
//     overview: "When Zafer falls into the hands of the Organization, the Mermer clan of amiable assassins comes out of hiding to settle the score once and for all.",
//     release: 2023,
//     videoSource: "https://utfs.io/f/ad5daa6b-152c-4a4b-a07f-afad123e5ec8-bywlm4.mp4",
//     category: "movie",
//     cast: "Ahmet Mümtaz Taylan, Alper Kul, Doğu Demirkol",
//     genres: "Comedies"
//   },
//   {
//     title: "Gran Turismo",
//     age: 12,
//     duration: 2.15,
//     overview: "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
//     videoSource: "https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4",
//     imageString: "https://utfs.io/f/014237a2-04cd-4a2f-9fda-ec57929b65cb-1w6l4.webp",
//     release: 2023,
//     category: "movie",
//     cast: "Gran Turismo, Orlando Bloom, Archie Madekwe",
//     genres: "Action, Adventure, Drama"
//   },
//   {
//     title: "Retribution",
//     age: 12,
//     duration: 1.31,
//     imageString: "https://utfs.io/f/901b71fd-f3e3-4177-8da5-ac869c32df13-7tf6w1.webp",
//     overview: "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
//     release: 2023,
//     videoSource: "https://utfs.io/f/02953459-a3f4-4680-a94c-d4cb275d29a0-7azsrb.mp4",
//     category: "movie",
//     cast: "Liam Neeson, Noma Dumezweni, Lilly Aspell",
//     genres: "Action, Thriller"
//   },
//   {
//     title: "Spider-Man: Across the Spider-Verse",
//     age: 12,
//     duration: 2.2,
//     imageString: "https://utfs.io/f/0d7102f7-38fc-4641-b9f5-3c6203ad2782-etfdwb.webp",
//     overview: "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
//     release: 2023,
//     videoSource: "https://utfs.io/f/406435b3-3b16-4946-977e-2b18d1f59d7e-z5v71f.mp4",
//     category: "movie",
//     cast: "Shameik Moore, Hailee Steinfeld, Brian Tyree Henry",
//     genres: "Animation, Action, Adventure"
//   },
//   {
//     title: "Coco",
//     release: 2017,
//     age: 0,
//     duration: 1.45,
//     imageString: "https://utfs.io/f/86d46afa-4521-4691-9a79-69383d2f153a-1tkgo.webp",
//     overview: "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
//     videoSource: "https://utfs.io/f/2377d939-a80c-48d7-9015-47b2f0cf2736-fgcclx.mp4",
//     category: "movie",
//     cast: "Anthony Gonzalez, Gael García Bernal, Benjamin Bratt",
//     genres: "Animation, Drama, Adventure"
//   },
//   {
//     title: "A Haunting in Venice",
//     age: 12,
//     duration: 1.44,
//     imageString: "https://utfs.io/f/f0af53c7-c06d-4f4b-9943-bb5350e35329-dk8yno.webp",
//     overview: "Celebrated sleuth Hercule Poirot, now retired and living in self-imposed exile in Venice, reluctantly attends a Halloween séance at a decaying, haunted palazzo. When one of the guests is murdered, the detective is thrust into a sinister world of shadows and secrets.",
//     release: 2023,
//     videoSource: "https://utfs.io/f/ad7b35db-3695-4cde-a1f0-935044fae0d5-oisko6.mp4",
//     category: "movie",
//     cast: "Kenneth Branagh, Michelle Yeoh, Jamie Dornan",
//     genres: "Crime, Drama, Horror"
//   },
//   {
//     title: "Five Nights at Freddy's",
//     age: 16,
//     duration: 1.5,
//     overview: "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
//     release: 2023,
//     videoSource: "https://utfs.io/f/5ed3e365-ba18-4921-8190-a04137f5864f-msq6is.mp4",
//     imageString: "https://utfs.io/f/d41ead4d-6436-420f-a199-d915dd43c534-1vdf6.webp",
//     category: "movie",
//     cast: "Josh Hutcherson, Piper Rubio, Elizabeth Lail",
//     genres: "Horror, Mystery, Thriller"
//   },
//   {
//     title: "Lucy",
//     age: 18,
//     duration: 1.29,
//     imageString: "https://utfs.io/f/0809f8e0-5ba6-4223-b6b3-3f8199745075-1zfsv.webp",
//     overview: "When a young American in Taiwan unwillingly becomes a drug mule, the high-tech narcotics in her system activate superhuman powers.",
//     release: 2014,
//     videoSource: "https://utfs.io/f/7fbc3d53-1854-4b5b-bc4f-a80a3365fed1-cj7g1g.mp4",
//     category: "movie",
//     cast: "Scarlett Johansson, Morgan Freeman, Choi Min-sik",
//     genres: "Sci-Fi, Action, Adventure"
//   },
//   {
//     title: "Laal Singh Chaddha",
//     age: 16,
//     duration: 2.38,
//     imageString: "https://utfs.io/f/efe2c81f-cbf9-4d22-94c6-c8ffba866b2c-22me.webp",
//     overview: "An earnestly optimistic man recounts his journey through life, love and momentous milestones in Indian history. Adapted from 1994’s Forrest Gump.",
//     release: 2022,
//     videoSource: "https://utfs.io/f/a0ba64ea-5138-491e-be46-6e1e63d80e0e-v75ypc.mp4",
//     category: "movie",
//     cast: "Aamir Khan, Kareena Kapoor, Chaitanya Akkineni",
//     genres: "Romantic"
//   },
//   {
//     title: "Honeymoonish",
//     age: 13,
//     duration: 1.40,
//     imageString: "https://utfs.io/f/b18169da-b6fc-43d7-8160-b81ba7888f33-1n7tbv.webp",
//     overview: "Desperate to get back at her ex, Noor marries the first willing man she finds. But on their romantic honeymoon, secrets begin to spill out.",
//     release: 2024,
//     videoSource: "https://utfs.io/f/23394572-850e-483f-af86-76483be530d5-xjzwo0.mp4",
//     category: "movie",
//     cast: "Nour Al Ghandour, Mahmoud Boushahri, Faisal Almezel",
//     genres: "Romantic, Comedies"
//   },
//   {
//     title: "Kuru Otlar Üstüne",
//     age: 13,
//     duration: 3.17,
//     imageString: "https://utfs.io/f/70725db7-b833-40a5-aebd-327f2a409ab4-fvz4s1.webp",
//     overview: "Facing allegations of sexual misconduct, a disillusioned teacher in a remote village meets a colleague who may help make sense of the challenges at hand.",
//     release: 2023,
//     videoSource: "https://utfs.io/f/e595f2e0-9732-45ad-a331-d7a6e2da968e-l0w74w.mp4",
//     category: "movie",
//     cast: "Deniz Celiloğlu, Merve Dizdar, Musab Ekici",
//     genres: "Drama"
//   },
//   {
//     title: "The Pianist",
//     age: 18,
//     duration: 2.29,
//     imageString: "https://utfs.io/f/b762ba67-2ce2-444b-8a80-c672819fb07f-1ya1k3.webp",
//     overview: "Famed Polish pianist Wladyslaw Szpilman struggles to survive the onslaught of Nazi tyranny during World War II in this drama based on his memoirs.",
//     release: 2002,
//     videoSource: "https://utfs.io/f/5660b620-b6ca-446e-b4ed-9dc3fe65b8ff-8qora0.mp4",
//     category: "movie",
//     cast: "Adrien Brody, Thomas Kretschmann, Frank Finlay",
//     genres: "Drama"
//   },
//   {
//     title: "PK",
//     age: 13,
//     duration: 2.25,
//     imageString: "https://utfs.io/f/d1c87d43-2d1a-4269-9925-23c05ecb4890-2rf.webp",
//     overview: "When a naïve alien stranded on Earth is told to pray for a way home, his search for god reveals the follies of blind faith in organized religion.",
//     release: 2014,
//     videoSource: "https://utfs.io/f/a99435c3-7724-4a46-b358-a35ddce1c228-esglic.mp4",
//     category: "movie",
//     cast: "Aamir Khan, Anushka Sharma, Sanjay Dutt",
//     genres: "Romantic"
//   },
//   {
//     title: "Murder Mystery",
//     age: 16,
//     duration: 1.38,
//     imageString: "https://utfs.io/f/01687198-7032-41e9-bdda-f59013c93707-deocml.webp",
//     overview: "In this irreverent action comedy, a New York cop and his wife become murder suspects while vacationing in Europe.",
//     release: 2019,
//     videoSource: "https://utfs.io/f/358b9f1c-4ca7-4153-be28-8c7043f7eb1d-pz5te1.mp4",
//     category: "movie",
//     cast: "Adam Sandler, Jennifer Aniston, Luke Evans",
//     genres: "Mystery, Comedies, Action, Adventure"
//   },
//   {
//     title: "Fast & Furious 8",
//     age: 16,
//     duration: 2.16,
//     imageString: "https://utfs.io/f/26205228-bfcc-47d9-9b34-450f24c67e1a-1v7fg.webp",
//     overview: "A ruthless cyberterrorist forces Dom to turn against Letty and the crew, endangering everything they've built. But they won't let him go so easily.",
//     release: 2017,
//     videoSource: "https://utfs.io/f/bac27bce-bd55-4e79-a263-66e4e25109b9-cdlmti.mp4",
//     category: "movie",
//     cast: "Vin Diesel, Dwayne Johnson, Jason Statham",
//     genres: "Action, Adventure"
//   },

// ]

// async function seedMovies() {
//   try {
//     for (const movie of movies) {
//       await prisma.movie.upsert({
//         where: { title: movie.title}, 
//         update: movie, 
//         create: movie,
//       });
//     }
//     console.log("Movies seeded successfully");
//   } catch (error) {
//     console.error("Error seeding data:", error);
//   }
// }

// export default function SeedDatabase() {
//   async function postData() {
//     "use server";
//     try {
//       await seedMovies();
//     } catch (error) {
//       console.error("Error seeding data:", error);
//     }
//   }

//   return (
//     <div className="m-5 flex flex-col">
//       <form action={postData}>
//         <Button type="submit">Submit</Button>
//       </form>
//     </div>
//   );
// }
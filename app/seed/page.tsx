import { Button } from "@/components/ui/button";
import prisma from "../utils/db";

export default function SeedDatabase() {
  async function postData() {
    "use server";
    try {
      await prisma.movie.createMany({
        data: [
          {
            id: 0,
            title: "Gran Turismo",
            age: 12,
            duration: 2.15,
            overview: "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
            videoSource: "https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4",
            imageString: "https://utfs.io/f/014237a2-04cd-4a2f-9fda-ec57929b65cb-1w6l4.webp",
            release: 2023,
            category: "recent",
            cast: "Gran Turismo, Orlando Bloom, Archie Madekwe",
            genres: "Action, Adventure, Drama"
          },
          {
            id: 1,
            title: "A Haunting in Venice",
            age: 12,
            duration: 1.44,
            imageString: "https://utfs.io/f/f0af53c7-c06d-4f4b-9943-bb5350e35329-dk8yno.webp",
            overview: "Celebrated sleuth Hercule Poirot, now retired and living in self-imposed exile in Venice, reluctantly attends a Halloween séance at a decaying, haunted palazzo. When one of the guests is murdered, the detective is thrust into a sinister world of shadows and secrets.",
            release: 2023,
            videoSource: "https://utfs.io/f/ad7b35db-3695-4cde-a1f0-935044fae0d5-oisko6.mp4",
            category: "recent",
            cast: "Kenneth Branagh, Michelle Yeoh, Jamie Dornan",
            genres: "Crime, Drama, Horror"
          },
          {
            id: 2,
            title: "Five Nights at Freddy's",
            age: 16,
            duration: 1.5,
            overview: "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
            release: 2023,
            videoSource: "https://utfs.io/f/5ed3e365-ba18-4921-8190-a04137f5864f-msq6is.mp4",
            imageString: "https://utfs.io/f/d41ead4d-6436-420f-a199-d915dd43c534-1vdf6.webp",
            category: "recent",
            cast: "Josh Hutcherson, Piper Rubio, Elizabeth Lail",
            genres: "Horror, Mystery, Thriller"
          },
          {
            id: 3,
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
            id: 4,
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
            id: 5,
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
            id: 6,
            title: "Retribution",
            age: 12,
            duration: 1.31,
            imageString: "https://utfs.io/f/0d7102f7-38fc-4641-b9f5-3c6203ad2782-etfdwb.webp",
            overview: "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
            release: 2023,
            videoSource: "https://utfs.io/f/02953459-a3f4-4680-a94c-d4cb275d29a0-7azsrb.mp4",
            category: "recent",
            cast: "Liam Neeson, Noma Dumezweni, Lilly Aspell",
            genres: "Action, Thriller"
          },
          {
            id: 7,
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
            id: 8,
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
            id: 9,
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
            id: 10,
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

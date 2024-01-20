import { v4 as uuidv4 } from 'uuid';

interface linkProps {
  name: string;
  href: string;
  id: string
}

export const links: linkProps[] = [
  { id: uuidv4(), name: "Home", href: "/home" },
  { id: uuidv4(), name: "Tv Shows", href: "/home/shows" },
  { id: uuidv4(), name: "Movies", href: "/home/movies" },
  { id: uuidv4(), name: "Recently Added", href: "/home/recently" },
  { id: uuidv4(), name: "My List", href: "/home/user/list" },
]
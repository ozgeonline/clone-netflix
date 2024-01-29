import { v4 as uuidv4 } from 'uuid';

interface linkProps {
  name: string;
  href: string;
  id: string
}

export const links: linkProps[] = [
  { id: uuidv4(), name: "Home", href: "/home" },
  { id: uuidv4(), name: "TV Shows", href: "/home/shows" },
  { id: uuidv4(), name: "Movies", href: "/home/movies" },
  { id: uuidv4(), name: "New & Popular", href: "/home/new" },
  { id: uuidv4(), name: "My List", href: "/home/user/list" },
  { id: uuidv4(), name: "Browse by Languages", href: "/home/recently" },
 
]
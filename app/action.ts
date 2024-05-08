"use server";

import { revalidatePath } from "next/cache";
import prisma from "./utils/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./utils/auth";

export async function addTowatchlist(formData: FormData) {
  "use server";

  const movieId = formData.get("movieId");
  const pathname = formData.get("pathname") as string;
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email as string;

  const existingEntry = await prisma.watchList.findFirst({
    where: {
      userId,
      movieId: Number(movieId),
    },
  });

  if (existingEntry) {
    console.log("Movie is already in the watchlist");
    return;
  }

  await prisma.watchList.create({
    data: {
      userId,
      movieId: Number(movieId),
    },
  });

  revalidatePath(pathname);
}

export async function deleteFromWatchlist(formData: FormData) {
  "use server";

  const watchlistId = formData.get("watchlistId") as string;
  const pathname = formData.get("pathname") as string;

  const existingItem = await prisma.watchList.findUnique({
    where: {
      id: watchlistId,
    },
  });

  if (existingItem) {
    // If the item exists, proceed with deletion
    await prisma.watchList.delete({
      where: {
        id: watchlistId,
      },
    });
  }

  revalidatePath(pathname);
}


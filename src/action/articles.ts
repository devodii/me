"use server"

import { parse } from "rss-to-json"

export const getArticles = async () => {
  try {
    const response = await parse("https://medium.com/feed/@emmanuelodii80", {
      headers: {
        "Content-Type": "application/json",
      },
    })

    return response
  } catch (error) {
    console.error("An errror occured while fetching article.")
  }
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const BOOKS = [
  {
    title: "BE POSITIVE!: Choosing Joy, Faith, and Resilience No Matter What Life Sends Your Way",
    author: "VERONICA NASH “Pooh”",
    cover: "https://m.media-amazon.com/images/I/51T8JE34b4L._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/0eMh9NpH",
  },
  {
    title: "THE BURIED TRUTH",
    author: "SCOTT J. MILLER",
    cover: "https://m.media-amazon.com/images/I/710RLphkgrL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/08rleSkd",
  },
  {
    title: "WHAT THE HELL IS WRONG WITH MY DOG?: YOU ARE WHAT'S WRONG!",
    author: "ALISA PETERSON-WHITE",
    cover: "https://m.media-amazon.com/images/I/71bjP13zCkL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/0iPTgRoJ",
  },
  {
    title: "Talon: The Great Dragonfly",
    author: " John C Blackford",
    cover: "https://m.media-amazon.com/images/I/71RQJxojWjL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/02RD5Tsi",
  },
  {
    title: "THE VSO PLAYBOOK: Volume 1",
    author: " Pamela K. Robertson",
    cover: "https://m.media-amazon.com/images/I/51RdielPYYL._SY385_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/020nlti6",
  },
  {
    title: "THE VSO PLAYBOOK: Volume 2",
    author: " Pamela K. Robertson",
    cover: "https://m.media-amazon.com/images/I/61LS5RFstNL._SY385_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/05ws6l7C",
  },
  {
    title: "THE VSO PLAYBOOK: Volume 3",
    author: "Pamela K. Robertson",
    cover: "https://m.media-amazon.com/images/I/61HXJmvohaL._SY385_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/0jkmTgSl",
  },
  {
    title: "Returning to the Prayer of Jabez & God Answered: A Spiritual Journey Through Scripture",
    author: " Benjamin Harrison Bennett Jr",
    cover: "https://m.media-amazon.com/images/I/71vn8t9NJPL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/0iNubjwn",
  },
  {
    title: "The Messages of Faith and The Love of God: From Our Blessed Mother",
    author: " J. Bernard Reyes",
    cover: "https://m.media-amazon.com/images/I/61frnxUrH6L._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/0cSyfyU1",
  },
 {
    title: "DON'T CUT the GRASS on Sunday",
    author: "K.Stephen Jumper",
    cover: "https://m.media-amazon.com/images/I/71ia4fQ4a3L._SL1499_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/0ee4hTIt",
  },
  {
    title: "HIP HOP HERMENEUTICS: A TOOL TO HELP THE BLACK CHURCH RECAPTURE AFRICAN AMERICAN YOUTH",
    author: " DR. BURTON LEROY MACK",
    cover: "https://m.media-amazon.com/images/I/61PX0O8kpCL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/0gR8fCxy",
  },
  {
    title: "A LIFERAFT for The SUDDENLY SINGLE PARENT",
    author: "SHARON YODER",
    cover: "https://m.media-amazon.com/images/I/810D2faZOoL._SY385_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/0hPrYFXh",
  },
  {
    title: "On Lightness and Being: Becoming Human: Learning to See",
    author: "Carron Hairabedian",
    cover: "https://m.media-amazon.com/images/I/61bey9pTYEL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/0eVNdG2M",
  },
  {
    title: "On Lightness and Being: Love, Loss, and Letting Go",
    author: "Carron Hairabedian",
    cover: "https://m.media-amazon.com/images/I/71pNKStRVhL._SY425_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/01p7ZBw8",
  },
  {
    title: "On Lightness and Being: Becoming Whole: Healing, Wisdom, and Peace",
    author: "Carron Hairabedian",
    cover: "https://m.media-amazon.com/images/I/61IQQ3DHzxL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/01eDTdbD",
  },
  {
    title: "The Bee's Colony, The Rise of the New Queen",
    author: "Joel B.Gindo",
    cover: "https://m.media-amazon.com/images/I/41q8C4eBeoL._SY445_SX342_FMwebp_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/03dFgTaS",
  },
  {
    title: "Tales of the Hippie Dippie Gardener",
    author: "Jim Fritz",
    cover: "https://m.media-amazon.com/images/I/41qpNvU5baL._SY445_SX342_QL70_FMwebp_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
    // link: "https://a.co/d/01RL87Q4",
  },
  {
    title: "God Carried Me: A Testament to Faith Through Life's Storms",
    author: "Bertha Stumon",
    cover: "https://m.media-amazon.com/images/I/61SwnA42oIL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/084ustJB",
  },
  {
    title: "THE LABYRINTH",
    author: "Keith Cuvo",
    cover: "https://m.media-amazon.com/images/I/613v0rxTVpL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/0fpe2YQe",
  },
  {
    title: "THE TIME CAPSULE MYSTERY",
    author: "Jenny Lynn",
    cover: "https://m.media-amazon.com/images/I/613ypngHL7L._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/0eaNfhXz",
  },
  {
    title: "LAFLAPS: Living A Fruitful Life After Prison System",
    author: "Gary Alan Early",
    cover: "https://m.media-amazon.com/images/I/71juM83U+cL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"], 
    // link: "https://a.co/d/0gZbtRPp",
  },
  {
    title: "THROUGH THE EYE OF THE STORM",
    author: "Andre Goldson",
    cover: "https://m.media-amazon.com/images/I/61HZcMSR5EL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/0ciIvs0L",
  },
  {
    title: "FRESH PATHS UNFOLDING",
    author: "Sara Tessier",
    cover: "https://m.media-amazon.com/images/I/41hiD1dnPwL._SY445_SX342_QL70_FMwebp_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
    // link: "https://a.co/d/0h3gl6A6",
  },
  {
    title: "Forged in the Mountains: A Family's Resilience",
    author: "Wilma Gibson Smith",
    cover: "https://m.media-amazon.com/images/I/71+QHcaqVKL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/02fR7S9m",
  },
  {
    title: "Discovering the Root Causes of Cancer: A Journey of Self-Discovery",
    author: "Valerie B. Irons",
    cover: "https://m.media-amazon.com/images/I/71Dtq5IS8ZL._SY385_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/0eB0OwID",
  },
  {
    title: "Dreams from my Grandfather: An International Inheritance",
    author: "A. D. Bradley",
    cover: "https://m.media-amazon.com/images/I/71bPwpz8H3L._SY425_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/0ie4oXLR",
  },
  {
    title: "THE BOOK OF UNFOLDING INTEGRATION",
    author: "Anthony Deans",
    cover: "https://m.media-amazon.com/images/I/61k9Mvcj71L._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/01TnBqeA",
  },
  {
    title: "BROKEN DREAMS: A Journey Through the Trials and Tribulations of the Texas Gulf Coast",
    author: "Bobby Bee",
    cover: "https://m.media-amazon.com/images/I/71I8zG+CARL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
    // link: "https://a.co/d/07omlcAE",
  },
  {
    title: "The Bounce Back: A Journey of Survival, Identity, and Resilience",
    author: "Craig Powell",
    cover: "https://m.media-amazon.com/images/I/61+6CDkYLuL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/077L9M4Y",
  },
  {
    title: "IT WAS NOT YOUR FAULT: BREAKING THE SILENCE ON MALE SEXUAL ABUSE AND FINDING HEALING THROUGH FAITH",
    author: "Jerry L. Morgan",
    cover: "https://m.media-amazon.com/images/I/51IdDAJKOvL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/00INdTu4",
  },
  {
    title: "The Adventure Of Scott And Lenny: Learn How To Fly",
    author: "Leonard Serratore",
    cover: "https://m.media-amazon.com/images/I/61KHsUOqXwL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/04i1QzPC",
  },
  {
    title: "Proverbial Spirits : Spiritual messages A medium told me to find the Philosopher's stone. I did just that.",
    author: "Ray Kaczar",
    cover: "https://m.media-amazon.com/images/I/814tG0xPcUL._SY425_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/0eTrzJDj",
  },
  {
    title: "Leading With Purpose: A Leadership Framework For Non-Native School Leaders Serving in Predominately Native Schools",
    author: "Dr. Ralph M. Watkins Ph.D.",
    cover: "https://m.media-amazon.com/images/I/51WzU0zNfwL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/02Ghlu41",
  },
  {
    title: "JETHRO & KASHU & FRIENDS PLANT A FOREST",
    author: "Sara Tessier",
    cover: "https://m.media-amazon.com/images/I/614zsxPblEL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/0dowUcE8",
  },
  {
    title: "Kael and the Whale with the Polka-Dot Tail",
    author: "Scott Frank",
    cover: "https://m.media-amazon.com/images/I/81rJAyRvPgL._SY342_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/0aj4vVbz",
  },
  {
    title: "THE ARCHIVE OF A. D. BRADLEY",
    author: "A. D. BRADLEY",
    cover: "https://m.media-amazon.com/images/I/816xIM3kXML._SX445_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/0iMWfNUy",
  },
  {
    title: "Mr. Mogley Muck The House Mouse",
    author: "Janice Balo",
    cover: "https://m.media-amazon.com/images/I/71Io4cttdDL._SY342_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/0aF4lnuo",
  },
  {
    title: "IMPULSE: A Story About Loss, Love, and Life Lessons",
    author: "Dr. Sandra Dennis",
    cover: "https://m.media-amazon.com/images/I/61VoKsdSsnL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/0d9v0ECL",
  },
  {
    title: "THE MAN OF LIGHT AND THE MAN OF DARK",
    author: "Mike The Voice",
    cover: "https://m.media-amazon.com/images/I/61BDjfG7tmL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/014CkQCA",
  },
  {
    title: "Faith Over Feelings: Discovering Purpose in Your Hardest Places",
    author: "Peter E. Martins",
    cover: "https://m.media-amazon.com/images/I/81Dn+Smkv5L._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/0iz5TW4E",
  },
  {
    title: "STILL I RISE: The Life of Rachel",
    author: "Rachel Anderson",
    cover: "https://m.media-amazon.com/images/I/61lOw6kwfJL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/09xqIhbN",
  },
  {
    title: "BEFORE ONE GOD: The Ancient Gods Behind the Biblical Tradition",
    author: "ROB CLIFF LOWE",
    cover: "https://m.media-amazon.com/images/I/61cWQbQ9WQL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/04YBpyNT",
  },
  {
    title: "RHYME WITH REASON",
    author: " Gene Van Alstyne",
    cover: "https://m.media-amazon.com/images/I/61XNBRiq1DL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/0bVw3K7a",
  },
  {
    title: "The Adventures of Jenny: Not What We Expected",
    author: " John H Lake",
    cover: "https://m.media-amazon.com/images/I/71NrTA8TnrL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/025Z9puW",
  },
  {
    title: "ASHES OF THE OBSIDIAN SHORE",
    author: "Roger Dale Faubush II",
    cover: "https://m.media-amazon.com/images/I/71scCT35IyL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
    // link: "https://a.co/d/06XrCqUG",
  },
  {
    title: "SCORCHING WINGS OF AN EMPTY NESTER: An empty nester adventure that I wasn't ready for",
    author: "KEN NOBLE",
    cover: "https://m.media-amazon.com/images/I/71lfsR4AbhL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/0jdoebVy",
  },
  {
    title: "The Keeper of Tears: A Tale of Lost Rain, Brave Hearts, and the Power of Tears",
    author: "John C Blackford",
    cover: "https://m.media-amazon.com/images/I/71KObra5lZL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/098t5Wdp",
  },
  {
    title: "Drawn 2 Danger: A Memoir of Duty, Danger, and Discovery",
    author: "J P Sexton",
    cover: "https://m.media-amazon.com/images/I/71EjxGKCmEL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
    // link: "https://a.co/d/01Bs2kl9",
  },
  {
    title: "THE PUBLICAN",
    author: "David Nava Monreal",
    cover: "https://m.media-amazon.com/images/I/61xM8pwkQkL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
    // link: "https://a.co/d/01SaWxIa",
  },
  {
    title: "OLD LORE & BONES: Poems, Ballads & Adventures of the Sea",
    author: " UNCLE SCOTTY",
    cover: "https://m.media-amazon.com/images/I/717h0aKKWJL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/0hEL6zyk",
  },
  {
    title: "The Table: Conversations Across Time",
    author: " Dr. Carl L. Young PhD",
    cover: "https://m.media-amazon.com/images/I/61ANOQzt8vL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/0hvI02XW",
  },
  {
    title: "Healing Your Heart: Understanding the Root Causes of Breast Cancer",
    author: " Valerie B. Irons",
    cover: "https://m.media-amazon.com/images/I/71uF6YRwfhL._SY385_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/0iPpg8TL",
  },
  {
    title: "JAMIE, HATTIE & JACKIE and the Otherworldly Friends",
    author: "Ankit Arora",
    cover: "https://m.media-amazon.com/images/I/71iHOyp46zL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/08g4V2iB",
  },
  {
    title: "A View from the Palace",
    author: " Robbie Munn Bayler",
    cover: "https://m.media-amazon.com/images/I/81t9ZodeQ-L._SY385_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
    // link: "https://a.co/d/05xtglqn",
  },
  {
    title: "CROWNED in SILENCE",
    author: " Toya Bounds",
    cover: "https://m.media-amazon.com/images/I/61u5a1G4OrL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
    // link: "https://a.co/d/02a32XsM",
  },
  {
    title: "DECEIVED WOMAN",
    author: "LUZ ARDELYS DÍAZ PERALTA",
    cover: "https://m.media-amazon.com/images/I/61cdChR7i2L._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/00S0v12I",
  },
  {
    title: "MUJER ENGAÑADA (Spanish Edition)",
    author: "LUZ ARDELYS DÍAZ PERALTA",
    cover: "https://m.media-amazon.com/images/I/610582YMoxL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/02b8lhUI",
  },
  {
    title: "Can I Survive Widowhood: The struggle With Grief, Shock, and Reestablishing a New Life",
    author: " Robbie Munn Bayler",
    cover: "https://m.media-amazon.com/images/I/81FAqqLB3YL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/00AOB2Hr",
  },
  {
    title: "LAFLAPS: THE BON VOYAGE",
    author: "Gary Alan Early",
    cover: "https://m.media-amazon.com/images/I/61Kd4YLH0CL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/01vp7Adj",
  },
  {
    title: "Preston",
    author: "David Bales",
    cover: "https://m.media-amazon.com/images/I/81GQhuLY7RL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    // link: "https://a.co/d/0eR3izAk",
  },
  {
    title: "The Little Butterfly Girl: Revised Tenth Anniversary Edition",
    author: "Brooke Brown",
    cover: "https://m.media-amazon.com/images/I/61ZmECNYshL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/0j3UkTFL",
  },

  
  {
    title: "Growing Together: A Christian mother and daughter journal",
    author: "Allison Sullins",
    cover: "https://m.media-amazon.com/images/I/714wiOGioqL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/0h1r5jAM",
  },
  {
    title: "MY BUG BOOK",
    author: "Wanda Jenkins Smith",
    cover: "https://m.media-amazon.com/images/I/514s7yxj1FL._SY342_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/09kbk7rw",
  },
  {
    title: "IF I HAD A COW",
    author: "Wanda Jenkins Smith",
    cover: "https://m.media-amazon.com/images/I/51iOyU37yKL._SY342_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/05OKpCCe",
  },
  {
    title: "A SNOWY DAY",
    author: " Wanda Jenkins-smith",
    cover: "https://m.media-amazon.com/images/I/61nGY2mBArL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/07RInouK",
  },
  {
    title: "THE STORMY NIGHT",
    author: "Wanda Jenkins-Smith",
    cover: "https://m.media-amazon.com/images/I/61tou7wZZJL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/01HxUOni",
  },
  {
    title: "Monkey Feet",
    author: "Wanda Jenkins-Smith",
    cover: "https://m.media-amazon.com/images/I/61jaDj6bQAL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    // link: "https://a.co/d/03HzI9Bp",
  },
  {
    title: "El Color del Renacer: Memorias de Fe, Tierra y Renacimiento (Spanish Edition)",
    author: "Luz Diaz",
    cover: "https://m.media-amazon.com/images/I/51kKrXJP3ZL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/080ryfQM",
  },
  {
    title: "THE COLOR OF REBIRTH: Memoirs of Faith, Land, and Renewal",
    author: "Luz Diaz",
    cover: "https://m.media-amazon.com/images/I/51EBMyMqVsL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography / Autobiography"],
    // link: "https://a.co/d/0427EwRh",
  },
];

const INITIAL_VISIBLE_COUNT = 12;

const OurBook = () => {
  const visibleBooks = BOOKS.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <>
      {/* Header Section */}
      <section className="relative overflow-hidden px-4 pt-16 pb-8 sm:px-6 sm:pt-20 sm:pb-12 lg:px-8 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="dm-sans text-lg font-semibold italic text-gray-600 sm:text-xl md:text-2xl">
            Our Work
          </p>
          <h2 className="mt-3 text-3xl font-medium text-[#018752] goneva sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Illustrations That Bring Stories To Life
          </h2>
        </div>
      </section>

      {/* Books Grid Section */}
      <section className="w-full px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10">
          {visibleBooks.map((book, idx) => (
            <div
              rel="noopener noreferrer"
              key={`${book.title}-${idx}`}
              className="group flex w-full max-w-[300px] flex-col items-center text-center mx-auto"
            >
              {/* Book Cover */}
              <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg duration-300">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex flex-col items-center justify-between bg-gradient-to-br from-[#078c52] via-[#05643f] to-[#16352b] px-5 py-7 text-center text-[#fff8de]"
                >
                  <span className="text-[10px] font-semibold tracking-[0.2em]">
                    CRUX PUBLISHING
                  </span>
                  <span className="line-clamp-5 text-base font-bold leading-tight sm:text-lg">
                    {book.title}
                  </span>
                  <span className="line-clamp-2 text-xs tracking-wide">
                    {book.author}
                  </span>
                </div>
                <Image
                  src={book.cover}
                  alt={`Cover of ${book.title} by ${book.author}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, (max-width: 1280px) 25vw, 300px"
                  loading="eager"
                  unoptimized
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Book Info */}
              <div className="mt-5 w-full px-2">
                <h3
                  title={book.title}
                  className="h-7 truncate text-lg font-bold leading-tight text-gray-900 sm:h-8 sm:text-xl"
                >
                  {book.title}
                </h3>
                <span className="mt-2 block text-sm text-gray-600 sm:text-base">
                  {book.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 flex justify-center sm:mt-14 lg:mt-16">
          <Link
            href="/our-books"
            className="group/btn inline-flex items-center gap-2 rounded-full bg-[#FDD118] px-6 py-3 text-sm font-semibold text-[#018752] shadow-md transition-all duration-300 hover:bg-[#ffd44f] hover:shadow-lg sm:px-8 sm:py-3.5 sm:text-base"
          >
            View All Books
            <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default OurBook;

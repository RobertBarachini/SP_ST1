//  TEST PASSWORDS
//  rb: rbPASS12345
//  ah: ahPASS12345
//  av: avPASS12345
//  rm: rmPASS12345

//
////  USER IDENTITIES
//

db.UserIdentities.save({ "_id" : ObjectId("5c0d0e2329324abcde4e2e82"), "email" : "rb@gmail.com", "password" : "72984d93835e8730ffa6ff544e99220bc584af89028655798c63886bcc5d43b6aa167655a95376165cac8bbedd1afb545245d1c2041066bf56f60370094098f3", "userType" : "admin", "salt" : "03b926c2fc1c6275a845e3283389076a" })
db.UserIdentities.save({ "_id" : ObjectId("5c0d0e2329324abcde4e2e83"), "email" : "ah@gmail.com", "password" : "6819cbba1499a0a60e604711a676a7ce04ecb1ebaafc8b8ca32820bd5c9a85f4b7b8b732ff6bf20c689556f3db97aac7b14d03af1f7c7c4c2a0042170a67e510", "userType" : "user", "salt" : "d550bea24425283c43668a253cbb43ad"  })
db.UserIdentities.save({ "_id" : ObjectId("5c0d0e2329324abcde4e2e84"), "email" : "av@gmail.com", "password" : "c08c56840dbfd85028904afa47191273ec52860f32fbee631c542ee19e648ffc40b56a3eb1546ca39a41f89e56a10dcc65816e7942a0808cb5a920b157e64bc4", "userType" : "user", "salt" : "09e49d646b7ce35a5962a4f5fe3350fe"  })
db.UserIdentities.save({ "_id" : ObjectId("5c0d0e2329324abcde4e2e85"), "email" : "rm@gmail.com", "password" : "cec94f6c2234192920e781adc64f24757f756eb59e39160e18c33777aa514f38509cb9b343057b4e69bb4e5ed9bc6f90cf9395d5b40433dd1faab561b597b3e3", "userType" : "user", "salt" : "32a850f0114dc2ef062e0887acfabb66"  })

//
////  USERS
//

db.Users.save({
  "_id" : ObjectId("5c0d165a29324abcde4e2e89"),
  identity: ObjectId("5c0d0e2329324abcde4e2e82"),
  username: "robert_barachini",
  name: "Robert",
  surname: "Barachini",
  profilePicture: "https://scontent.flju1-1.fna.fbcdn.net/v/t1.0-9/12065810_569066336579254_5384630105462652888_n.jpg?_nc_cat=106&_nc_ht=scontent.flju1-1.fna&oh=d5df1d6367f8c3e2c875bc2e645b7edd&oe=5CB25848",
  posts: [ObjectId("5c0d25ba080e4ba7e0389391"), ObjectId("5c0d25bc080e4ba7e0389392")],
  postReactions: [],
  points: 0,
  dateJoined: ISODate("2018-12-09T13:00:06.968Z"),
  dateLastActive: ISODate("2018-12-09T13:00:06.968Z")
})
db.Users.save({
  "_id" : ObjectId("5c0d165a29324abcde4e2e8a"),
  identity: ObjectId("5c0d0e2329324abcde4e2e83"),
  username: "aleksandar_hristov",
  name: "Aleksandar",
  surname: "Hristov",
  profilePicture: "https://scontent.flju1-1.fna.fbcdn.net/v/t1.0-9/31664593_10212828619736427_2148876720642457600_n.jpg?_nc_cat=110&_nc_ht=scontent.flju1-1.fna&oh=774c1899b8a7ee4a8063bdc402a27c4c&oe=5CA083B1",
  posts: [],
  postReactions: [],
  points: 0,
  dateJoined: ISODate("2018-12-09T13:00:07.968Z"),
  dateLastActive: ISODate("2018-12-09T13:00:07.968Z")
})
db.Users.save({
  "_id" : ObjectId("5c0d165a29324abcde4e2e8b"),
  identity: ObjectId("5c0d0e2329324abcde4e2e84"),
  username: "andrija_vučković",
  name: "Andrija",
  surname: "Vučković",
  profilePicture: "https://scontent.flju1-1.fna.fbcdn.net/v/t1.0-9/20637877_10213747564067464_185717290670005001_n.jpg?_nc_cat=100&_nc_ht=scontent.flju1-1.fna&oh=42be72bce0c69cd3f2ece955b7545570&oe=5C64FBCB",
  posts: [],
  postReactions: [],
  points: 0,
  dateJoined: ISODate("2018-12-09T13:00:08.968Z"),
  dateLastActive: ISODate("2018-12-09T13:00:08.968Z")
})
db.Users.save({
  "_id" : ObjectId("5c0d165a29324abcde4e2e8c"),
  identity: ObjectId("5c0d0e2329324abcde4e2e85"),
  username: "robi_markac",
  name: "Robi",
  surname: "Markac",
  profilePicture: "https://scontent.flju1-1.fna.fbcdn.net/v/t1.0-1/46233195_10215091650742966_7502271718136741888_n.jpg?_nc_cat=100&_nc_ht=scontent.flju1-1.fna&oh=f2fbc3ed1519423af8989126c0df08a3&oe=5CA172CA",
  posts: [],
  postReactions: [],
  points: 0,
  dateJoined: ISODate("2018-12-09T13:00:09.968Z"),
  dateLastActive: ISODate("2018-12-09T13:00:09.968Z")
})

//
////  POSTS
//

db.Posts.save({
  "_id" : ObjectId("5c0d25ba080e4ba7e0389391"),
  title: "Live love laugh",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "text",
    content: ""
  },
  description: "Life's like a box of chocolates - you never know what you are going to get!",
  hashtags: ["#natural", "#nofilter"],
  likes: 0,
  dislikes: 0,
  comments: [
    {
      owner: ObjectId("5c0d165a29324abcde4e2e8a"),
      content: "Hvala Robert, zelo kul!"
    }
  ]
})
db.Posts.save({
  "_id" : ObjectId("5c0d25bc080e4ba7e0389392"),
  title: "Top sončni zahod",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: ""
  },
  description: "To sliko sem si za nedoločen čas izposodil iz interneta.",
  hashtags: ["#nature", "#wanderlust", "#home"],
  likes: 0,
  dislikes: 0,
  comments: [
    {
      owner: ObjectId("5c0d165a29324abcde4e2e8a"),
      content: "Ti si res poseben orešček."
    },
    {
      owner: ObjectId("5c0d165a29324abcde4e2e89"),
      content: "Hvala za lepe misli"
    }
  ]
})


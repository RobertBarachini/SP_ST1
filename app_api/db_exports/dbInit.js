db.UserIdentities.save({ "_id" : ObjectId("5c0d0e2329324abcde4e2e82"), "email" : "rb@gmail.com", "password" : "123" })
db.UserIdentities.save({ "_id" : ObjectId("5c0d0e2329324abcde4e2e83"), "email" : "ah@gmail.com", "password" : "234" })
db.UserIdentities.save({ "_id" : ObjectId("5c0d0e2329324abcde4e2e84"), "email" : "av@gmail.com", "password" : "345" })
db.UserIdentities.save({ "_id" : ObjectId("5c0d0e2329324abcde4e2e85"), "email" : "rm@gmail.com", "password" : "456" })

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

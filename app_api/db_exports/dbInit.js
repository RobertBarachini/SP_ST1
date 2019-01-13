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
  posts: [
    ObjectId("5c0d25ba080e4ba7e0389391"), ObjectId("5c0d25bc080e4ba7e0389392"), ObjectId("5c389a49cd49801331ce25c2"),
    ObjectId("5c389a49cd49801331ce25c3"), ObjectId("5c389a49cd49801331ce25c4"),ObjectId("5c389a49cd49801331ce25c5"),

    ObjectId("5c3b5bc9cc55f80c1f4464c9"),ObjectId("5c3b5bc9cc55f80c1f4464ca"),ObjectId("5c3b5bc9cc55f80c1f4464cb"),
    ObjectId("5c3b5bc9cc55f80c1f4464cc"),ObjectId("5c3b5bc9cc55f80c1f4464cd"),ObjectId("5c3b5bc9cc55f80c1f4464ce"),
    ObjectId("5c3b5bc9cc55f80c1f4464cf"),ObjectId("5c3b5bc9cc55f80c1f4464d0"),ObjectId("5c3b5bc9cc55f80c1f4464d1"),
    
    ObjectId("5c3b5bc9cc55f80c1f4464d2"),ObjectId("5c3b5bc9cc55f80c1f4464d3"),ObjectId("5c3b5bc9cc55f80c1f4464d4"),
    ObjectId("5c3b5bc9cc55f80c1f4464d5"),ObjectId("5c3b5bc9cc55f80c1f4464d6"),ObjectId("5c3b5bc9cc55f80c1f4464d7"),
    ObjectId("5c3b5bc9cc55f80c1f4464d8"),ObjectId("5c3b5bc9cc55f80c1f4464d9"),ObjectId("5c3b5bc9cc55f80c1f4464da"),
    
    ObjectId("5c3b5bc9cc55f80c1f4464db"),ObjectId("5c3b5bc9cc55f80c1f4464dc"),ObjectId("5c3b5bc9cc55f80c1f4464dd"),
    ObjectId("5c3b5bc9cc55f80c1f4464de"),ObjectId("5c3b5bc9cc55f80c1f4464df"),ObjectId("5c3b5bc9cc55f80c1f4464e0"),
    ObjectId("5c3b5bc9cc55f80c1f4464e1"),ObjectId("5c3b5bc9cc55f80c1f4464e2"),ObjectId("5c3b5bc9cc55f80c1f4464e3")
  ],
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
  posts: [ObjectId("5c389a49cd49801331ce25c2")],
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
  "_id" : ObjectId("5c0d25bc080e4ba7e0389392"),
  title: "Top sunset",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/90a5c4428d32aafd2ac6a7c1bb25ff1e/5CB4A610/t51.2885-15/e35/46262396_2217871091599117_9142800276601607707_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "I kinda borrowed this one from the internet for some unspecified time...",
  hashtags: ["#nature", "#wanderlust", "#home"],
  likes: 0,
  dislikes: 0,
  comments: [
    {
      owner: ObjectId("5c0d165a29324abcde4e2e8a"),
      content: "Wow, you really are something else, aren't ya?"
    },
    {
      owner: ObjectId("5c0d165a29324abcde4e2e89"),
      content: "Thank you for your kind comments :)"
    }
  ]
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
  hashtags: ["#inspirational", "#moviequotes"],
  likes: 0,
  dislikes: 0,
  comments: [
    {
      owner: ObjectId("5c0d165a29324abcde4e2e8a"),
      content: "Thank you Robert, very cool!"
    }
  ]
})
db.Posts.save({
  "_id" : ObjectId("5c389a49cd49801331ce25c2"),
  title: "Winter infinity",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/ebe2623fedfcc5f7abc7ef3bbfc4341c/5CB2CC32/t51.2885-15/e35/47691768_269107543785473_1678044848587153476_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Walking through the frozen and really brings me peace.",
  hashtags: ["#frozen", "#winter", "#peace", "#muytranquilo"],
  likes: 0,
  dislikes: 0,
  comments: []
})
// row 2
db.Posts.save({
  "_id" : ObjectId("5c389a49cd49801331ce25c3"),
  title: "Daddy Solomun",
  owner: ObjectId("5c0d165a29324abcde4e2e8a"),
  body: {
    bodyType: "embed",
    content: "https://www.youtube.com/embed/bk6Xst6euQk"
  },
  description: "This set was out of this world!",
  hashtags: ["#music", "#is", "#my", "#life"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c389a49cd49801331ce25c4"),
  title: "I ❤️ RH 202",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "embed",
    content: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Frh202%2Frh-202-199-with-tim-urbanya-val-202-26102018%2F"
  },
  description: "This set was out of this world!",
  hashtags: ["#music", "#is", "#my", "#life"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c389a49cd49801331ce25c5"),
  title: "Marko Nastić is the best vinyl DJ",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "embed",
    content: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/523127844&color=%234c3c36&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  description: "This set was out of this world!",
  hashtags: ["#music", "#is", "#my", "#life"],
  likes: 0,
  dislikes: 0,
  comments: []
})

// generic images 1_1
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464c9"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/8a17ddfecb692e9420f3074147478d41/5CCC758D/t51.2885-15/e35/47692915_169874300650109_312716175337510543_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464ca"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/4771e9e8a99800337b558c4dfbd4bb08/5CBDC630/t51.2885-15/e35/49302090_551958628602242_678487439384333697_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464cb"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/d85c35c1fa8ae78c2241aca8bf0277ea/5CCEAB9C/t51.2885-15/e35/49847797_276308726369590_6063637205383340675_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
// generic images 1_2
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464cc"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/4039235ce7d1f90f125fb0434bfb5dd5/5CB90341/t51.2885-15/e35/49906750_796357957423599_4513143945494444939_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464cd"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/07399a8a3c1bd28b7f2b9af99901793f/5CB5236C/t51.2885-15/e35/49656667_2438564909548527_5182355836713141275_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464ce"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/467ba3b12047a0bc0adb3c58bb565fea/5CB90CA8/t51.2885-15/e35/47693977_347557386079755_258520124842861999_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
// generic images 1_3
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464cf"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/b74d30ec404c4d6c9a03c787414f8b93/5CBEC260/t51.2885-15/e35/49718064_808341482835699_2010571301432658150_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464d0"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/c2a93636400f0b20a93b7a04a7eed3b1/5CCDB9DB/t51.2885-15/e35/47693217_2120364778274280_555830605975792709_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464d1"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/f93e4904aa7b86cbe991ca76ccc6609c/5CB32F01/t51.2885-15/e35/p1080x1080/47693675_286058221976445_5619134012466431151_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})

// generic images 2_1
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464d2"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/8a17ddfecb692e9420f3074147478d41/5CCC758D/t51.2885-15/e35/47692915_169874300650109_312716175337510543_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464d3"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/4771e9e8a99800337b558c4dfbd4bb08/5CBDC630/t51.2885-15/e35/49302090_551958628602242_678487439384333697_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464d4"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/d85c35c1fa8ae78c2241aca8bf0277ea/5CCEAB9C/t51.2885-15/e35/49847797_276308726369590_6063637205383340675_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
// generic images 2_2
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464d5"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/4039235ce7d1f90f125fb0434bfb5dd5/5CB90341/t51.2885-15/e35/49906750_796357957423599_4513143945494444939_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464d6"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/07399a8a3c1bd28b7f2b9af99901793f/5CB5236C/t51.2885-15/e35/49656667_2438564909548527_5182355836713141275_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464d7"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/467ba3b12047a0bc0adb3c58bb565fea/5CB90CA8/t51.2885-15/e35/47693977_347557386079755_258520124842861999_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
// generic images 2_3
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464d8"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/b74d30ec404c4d6c9a03c787414f8b93/5CBEC260/t51.2885-15/e35/49718064_808341482835699_2010571301432658150_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464d9"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/c2a93636400f0b20a93b7a04a7eed3b1/5CCDB9DB/t51.2885-15/e35/47693217_2120364778274280_555830605975792709_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464da"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/f93e4904aa7b86cbe991ca76ccc6609c/5CB32F01/t51.2885-15/e35/p1080x1080/47693675_286058221976445_5619134012466431151_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})

// generic images 3_1
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464db"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/8a17ddfecb692e9420f3074147478d41/5CCC758D/t51.2885-15/e35/47692915_169874300650109_312716175337510543_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464dc"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/4771e9e8a99800337b558c4dfbd4bb08/5CBDC630/t51.2885-15/e35/49302090_551958628602242_678487439384333697_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464dd"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/d85c35c1fa8ae78c2241aca8bf0277ea/5CCEAB9C/t51.2885-15/e35/49847797_276308726369590_6063637205383340675_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
// generic images 3_2
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464de"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/4039235ce7d1f90f125fb0434bfb5dd5/5CB90341/t51.2885-15/e35/49906750_796357957423599_4513143945494444939_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464df"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/07399a8a3c1bd28b7f2b9af99901793f/5CB5236C/t51.2885-15/e35/49656667_2438564909548527_5182355836713141275_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464e0"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/467ba3b12047a0bc0adb3c58bb565fea/5CB90CA8/t51.2885-15/e35/47693977_347557386079755_258520124842861999_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
// generic images 3_3
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464e1"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/b74d30ec404c4d6c9a03c787414f8b93/5CBEC260/t51.2885-15/e35/49718064_808341482835699_2010571301432658150_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464e2"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/c2a93636400f0b20a93b7a04a7eed3b1/5CCDB9DB/t51.2885-15/e35/47693217_2120364778274280_555830605975792709_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})
db.Posts.save({
  "_id" : ObjectId("5c3b5bc9cc55f80c1f4464e3"),
  title: "Generic title",
  owner: ObjectId("5c0d165a29324abcde4e2e89"),
  body: {
    bodyType: "image",
    content: "https://instagram.flju1-1.fna.fbcdn.net/vp/f93e4904aa7b86cbe991ca76ccc6609c/5CB32F01/t51.2885-15/e35/p1080x1080/47693675_286058221976445_5619134012466431151_n.jpg?_nc_ht=instagram.flju1-1.fna.fbcdn.net"
  },
  description: "Generic inspirational description...",
  hashtags: ["#generictag"],
  likes: 0,
  dislikes: 0,
  comments: []
})


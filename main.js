// 1. Connecting
use maktab_db


// 2. Insert one to students collection
db.students.insertOne({
  name: "Javlon",
  surname: "Ortiqov",
  age: 16,
  class: "10-B"
})


db.students.insertMany([
  {
    name: "Alisher",
    surname: "Qodirov",
    age: 15,
    class: "9-A",
    subjects: ["Matematika", "Fizika", "Informatika"],
    grade: {
      matematika: 5,
      fizika: 4,
      informatika: 5
    }
  },
  {
    name: "Gulnora",
    surname: "Rahimova",
    age: 14,
    class: "8-B",
    subjects: ["Adabiyot", "Tarix", "Ingliz tili"],
    grade: {
      adabiyot: 5,
      tarix: 5,
      ingliz_tili: 4
    }
  },
  {
    name: "Bobur",
    surname: "Karimov",
    age: 16,
    class: "10-A",
    subjects: ["Matematika", "Kimyo", "Biologiya"],
    grade: {
      matematika: 4,
      kimyo: 5,
      biologiya: 4
    }
  },
  {
    name: "Madina",
    surname: "Toshpulatova",
    age: 15,
    class: "9-B",
    subjects: ["Fizika", "Ingliz tili", "Geografiya"],
    grade: {
      fizika: 3,
      ingliz_tili: 5,
      geografiya: 4
    }
  },
  {
    name: "Sardor",
    surname: "Jorayev",
    age: 17,
    class: "11-A",
    subjects: ["Matematika", "Fizika", "Informatika"],
    grade: {
      matematika: 5,
      fizika: 5,
      informatika: 5
    }
  }
])


db.subjects.insertMany([
  {
    nomi: "Matematika",
    teacher: "Karimov Botir",
    room: "212",
    days: ["Dushanba", "Chorshanba", "Juma"]
  },
  {
    nomi: "Fizika",
    teacher: "Alimova Nilufar",
    room: "310",
    days: ["Seshanba", "Payshanba"]
  },
  {
    nomi: "Informatika",
    teacher: "Usmonov Javohir",
    room: "114",
    days: ["Chorshanba", "Juma"]
  },
  {
    nomi: "Ingliz tili",
    teacher: "Smith John",
    room: "205",
    days: ["Dushanba", "Payshanba"]
  }
])


db.lessons.insertMany([
  {
    class: "9-A",
    week_day: "Dushanba",
    lessons: [
      { time: "08:30", subject: "Matematika" },
      { time: "09:25", subject: "Fizika" },
      { time: "10:20", subject: "Tarix" }
    ]
  },
  {
    class: "9-A",
    week_day: "Seshanba",
    lessons: [
      { time: "08:30", subject: "Kimyo" },
      { time: "09:25", subject: "Adabiyot" },
      { time: "10:20", subject: "Informatika" }
    ]
  }
])


db.grades.insertMany([
  {
    student_id: "o1",
    name: "Alisher",
    subject: "Matematika",
    grades: [4, 5, 5, 4, 5],
    month: "Sentabr"
  },
  {
    student_id: "o1",
    name: "Alisher",
    subject: "Fizika",
    grades: [5, 4, 4, 5],
    month: "Sentabr"
  },
  {
    student_id: "o2",
    name: "Gulnora",
    subject: "Adabiyot",
    grades: [5, 5, 5, 5],
    month: "Sentabr"
  }
])



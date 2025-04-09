use school_db

db.createCollection("students")
db.createCollection("subjects")
db.createCollection("grades")
db.createCollection("lessons")

// INSERT EXERCISE #1
db.students.insertOne({
    "name": "Jasur",
    "surname": "Abdullayev",
    "age": 14,
    "class": "8-A"
})

// INSERT EXERCISE #2
db.students.insertMany([
    {
        "name": "Alisher",
        "surname": "Qodirov",
        "age": 15,
        "class": "9-A",
        "subjects": ["Mathematics", "Physics", "Informatics"],
        "grades": {
            "mathematics": 5,
            "physics": 4,
            "informatics": 5
        }
    },
    {
        "name": "Gulnora",
        "surname": "Rahimova",
        "age": 14,
        "class": "8-B",
        "subjects": ["Literature", "History", "English"],
        "grades": {
            "literature": 5,
            "history": 5,
            "english": 4
        }
    },
    {
        "name": "Bobur",
        "surname": "Karimov",
        "age": 16,
        "class": "10-A",
        "subjects": ["Mathematics", "Chemistry", "Biology"],
        "grades": {
            "mathematics": 4,
            "chemistry": 5,
            "biology": 4
        }
    },
    {
        "name": "Madina",
        "surname": "Toshpulatova",
        "age": 15,
        "class": "9-B",
        "subjects": ["Physics", "English", "Geography"],
        "grades": {
            "physics": 3,
            "english": 5,
            "geography": 4
        }
    },
    {
        "name": "Sardor",
        "surname": "Jorayev",
        "age": 17,
        "class": "11-A",
        "subjects": ["Mathematics", "Physics", "Informatics"],
        "grades": {
            "mathematics": 5,
            "physics": 5,
            "informatics": 5
        }
    }
])

// INSERT EXERCISE #3
db.subjects.insertMany([
    {
        "name": "Mathematics",
        "teacher": "Karimov Botir",
        "room": "212",
        "days": ["Monday", "Wednesday", "Friday"]
    },
    {
        "name": "Physics",
        "teacher": "Alimova Nilufar",
        "room": "310",
        "days": ["Tuesday", "Thursday"]
    },
    {
        "name": "Informatics",
        "teacher": "Usmonov Javohir",
        "room": "114",
        "days": ["Wednesday", "Friday"]
    },
    {
        "name": "English",
        "teacher": "Smith John",
        "room": "205",
        "days": ["Monday", "Thursday"]
    }
])

// INSERT EXERCISE #4
db.lessons.insertMany([
    {
        "class": "9-A",
        "weekday": "Monday",
        "lessons": [
            {"time": "08:30", "subject": "Mathematics"},
            {"time": "09:25", "subject": "Physics"},
            {"time": "10:20", "subject": "History"}
        ]
    },
    {
        "class": "9-A",
        "weekday": "Tuesday",
        "lessons": [
            {"time": "08:30", "subject": "Chemistry"},
            {"time": "09:25", "subject": "Literature"},
            {"time": "10:20", "subject": "Informatics"}
        ]
    }
])

// INSERT EXERCISE #5
db.grades.insertMany([
    {
        "student_id": "o1",
        "name": "Alisher",
        "subject": "Mathematics",
        "grades": [4, 5, 5, 4, 5],
        "month": "September"
    },
    {
        "student_id": "o1",
        "name": "Alisher",
        "subject": "Physics",
        "grades": [5, 4, 4, 5],
        "month": "September"
    },
    {
        "student_id": "o2",
        "name": "Gulnora",
        "subject": "Literature",
        "grades": [5, 5, 5, 5],
        "month": "September"
    }
])

// INSERT EXERCISE #6
db.students.insertOne({
    "name": "Dilshod",
    "surname": "Mirzoyev"
})

// INSERT EXERCISE #7
db.subjects.insertOne({
    "name": "Geography",
    "teacher": "Sobirova Zilola",
    "room": "305",
    "days": ["Tuesday", "Friday"]
})

// INSERT EXERCISE #8
db.lessons.insertMany([
    {
        "class": "10-A",
        "weekday": "Monday",
        "lessons": [
            {"time": "08:30", "subject": "Mathematics"},
            {"time": "09:25", "subject": "Chemistry"},
            {"time": "10:20", "subject": "Biology"},
            {"time": "11:15", "subject": "English"}
        ]
    },
    {
        "class": "10-A",
        "weekday": "Tuesday",
        "lessons": [
            {"time": "08:30", "subject": "Physics"},
            {"time": "09:25", "subject": "Informatics"},
            {"time": "10:20", "subject": "Geography"},
            {"time": "11:15", "subject": "History"}
        ]
    }
])

// INSERT EXERCISE #9
db.grades.insertOne({
    "student_id": "o3",
    "name": "Bobur",
    "subject": "Chemistry",
    "grades": [5, 4, 5, 5],
    "month": "September"
})

// INSERT EXERCISE #10
db.students.insertMany([
    {
        "name": "Zarina",
        "surname": "Ismailova",
        "age": 17,
        "class": "11-B",
        "subjects": ["Mathematics", "English"],
        "grades": {"mathematics": 4, "english": 5}
    },
    {
        "name": "Shohruh",
        "surname": "Yuldashev",
        "age": 17,
        "class": "11-B",
        "subjects": ["Physics", "Informatics"],
        "grades": {"physics": 5, "informatics": 4}
    },
    {
        "name": "Lola",
        "surname": "Saidova",
        "age": 17,
        "class": "11-B",
        "subjects": ["Literature", "History"],
        "grades": {"literature": 5, "history": 5}
    }
])

// FIND EXERCISE #1
db.students.find()

// FIND EXERCISE #2
db.students.find({"class": "9-A"})

// FIND EXERCISE #3
db.students.find({"age": {"$gt": 15}})

// FIND EXERCISE #4
db.students.find({"subjects": "Mathematics"})

// FIND EXERCISE #5
db.students.find({"grades.mathematics": 5})

// FIND EXERCISE #6
db.students.find({"name": {"$regex": /^Alis/}})

// FIND EXERCISE #7
db.students.find({"subjects": {"$all": ["Mathematics", "Physics"]}})

// FIND EXERCISE #8
db.students.find({
    "grades.informatics": {"$gt": 4},
    "age": {"$lt": 16}
})

// FIND EXERCISE #9
db.subjects.find({"days": "Monday"})

// FIND EXERCISE #10
db.grades.aggregate([
    {"$unwind": "$grades"},
    {"$group": {
        "_id": "$name",
        "avg_grade": {"$avg": "$grades"}
    }},
    {"$match": {"avg_grade": {"$gt": 4.5}}}
])

// UPDATE EXERCISE #1
db.students.updateOne({"name": "Alisher"}, {"$set": {"age": 16}})

// UPDATE EXERCISE #2
db.students.updateMany(
    {"class": {"$regex": /^9/}},
    {"$set": {"class": {"$concat": ["10", {"$substr": ["$class", 1, -1}]}}}}
)

// UPDATE EXERCISE #3
db.students.updateOne({"name": "Madina"}, {"$push": {"subjects": "Informatics"}})

// UPDATE EXERCISE #4
db.students.updateOne({"name": "Bobur"}, {"$pull": {"subjects": "Chemistry"}})

// UPDATE EXERCISE #5
db.subjects.updateOne({"name": "Physics"}, {"$set": {"teacher": "Soliyev Jasur"}})

// UPDATE EXERCISE #6
db.students.updateMany({}, {"$set": {"city": "Tashkent"}})

// UPDATE EXERCISE #7
db.students.updateOne({"name": "Gulnora"}, {"$set": {"grades.mathematics": 5}})

// UPDATE EXERCISE #8
db.students.updateMany({"class": "8-B"}, {"$set": {"city": "Samarkand"}})

// UPDATE EXERCISE #9
db.subjects.updateMany({}, {"$set": {"lesson_duration": 45}})

// UPDATE EXERCISE #10
db.subjects.updateOne({"name": "Informatics"}, {"$set": {"room": "220"}})

// DELETE EXERCISE #1
db.students.deleteOne({"name": "Madina"})

// DELETE EXERCISE #2
db.students.deleteMany({"age": 17})

// DELETE EXERCISE #3
db.students.deleteMany({"grades.physics": 3})

// DELETE EXERCISE #4
db.subjects.deleteOne({"name": "History"})

// DELETE EXERCISE #5
db.students.deleteMany({"class": "11-A"})

// DELETE EXERCISE #6
db.students.deleteMany({"subjects": {"$ne": "Informatics"}})

// DELETE EXERCISE #7
db.grades.aggregate([
    {"$unwind": "$grades"},
    {"$group": {
        "_id": {"student_id": "$student_id", "subject": "$subject"},
        "avg_grade": {"$avg": "$grades"}
    }},
    {"$match": {"avg_grade": {"$lt": 4}}},
    {"$project": {"student_id": "$_id.student_id", "subject": "$_id.subject"}}
]).forEach(doc => {
    db.grades.deleteOne({"student_id": doc.student_id, "subject": doc.subject})
})

// DELETE EXERCISE #8
db.lessons.deleteMany({"weekday": "Friday"})

// DELETE EXERCISE #9
db.students.deleteMany({"grades.english": {"$exists": false}})

// DELETE EXERCISE #10
db.students.aggregate([
    {"$group": {
        "_id": "$class",
        "count": {"$sum": 1}
    }},
    {"$match": {"count": 1}}
]).forEach(doc => {
    db.students.deleteMany({"class": doc._id})
})

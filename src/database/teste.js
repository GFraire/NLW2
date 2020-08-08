const Database = require('./db')
const createProffy = require('./createProffy')

Database.then( async (db) => {

    proffyValue = { 
        name: 'Gabriel Fraire',
        avatar: 'https://avatars3.githubusercontent.com/u/69168164?s=460&u=0fa252e12f5f9e77422241895cf927edf62cec6a&v=4',
        whatsapp: '1191232425',
        bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
    }

    classValue = {
        subject: 1,
        cost: '20'
        // O proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar dados
    const selectedProffys =  await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // Consultar as classes de um determinado professor
    // Trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `)
    // console.log(selectedClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = '1'
        AND class_schedule.weekday = '0'
        AND class_schedule.time_from <= '520'
        AND class_schedule.time_to > '520'
    `)

    // console.log(selectClassesSchedules)
} )
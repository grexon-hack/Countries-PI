const { Router } = require('express');
var express = require('express');
const {Op} = require('sequelize')
const { Countries, TouristActivities } = require('../db.js');
const { saveAll } = require('./controllers.js')




const router = Router();
router.use(express.json())
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// accion del bulkCreate a la base de datos
// funcion saveAll es traida de controllers.js y obtiene los datos requeridos 
// de la api 
router.post('/', async (req, res) => {
    try {
        const dataBd = await Countries.findAll();
        const datos = await saveAll();
        if (dataBd.length === 0 && datos.length !== 0) {
            await Countries.bulkCreate(datos);

        }
        res.send('succesfull')

    } catch (error) {
        res.status(400).send(error);

    }


})


router.get('/countries', async (req, res) => {
    const { name, ID, filterC, mode, popul, filterA } = req.query;

    try {

        if (name) {
            try {
                const byName = await Countries.findAll({
                    where: {
                        Name: {
                            [Op.iLike] : `%${name}%`
                        }
                    },
                    include: [{
                        model: TouristActivities,
                        through: {
                            attributes: []
                        }
                    }]
                })
    
                
                return res.send(byName)
            } catch (error) {
                res.status(404).send({msg: error})
            }
            
        }

        if (ID) {
            const byId = await Countries.findByPk(ID, {
                include: [{
                    model: TouristActivities,
                    through: {
                        attributes: []
                    }
                }]
            })

            return res.json(byId)
        }
       
        
        let base = await Countries.findAll({
            where: filterC&&{Continent : filterC},
            include: [{
                model: TouristActivities,
                where:filterA&&{Name : filterA},
                through: {
                    attributes: []
                }
            }],
            order: mode ? [["Name", mode]] : popul ? [["Population", popul]] : null
        });


        
        res.send(base)
    } catch (error) {
        res.status(404).send(error)
    }


})

router.post('/activity', async (req, res) => {
    const { Name, Difficult, Duration, Season, nombrePais} = req.body;

    try {

        await TouristActivities.create({
            Name,
            Difficult,
            Duration,
            Season
        })
        nombrePais.forEach (async element => {
            
            const Act = await TouristActivities.findOne({
                where: {
                    Name: Name
                }
            })
            const country = await Countries.findOne({
                where: {
                    Name : element
                }
            });
            await country.addTouristActivities(Act)
        });
        
        res.status(200).send('was created your activity succesfully')
    }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;

const { Router} = require('express');
var express = require('express');
const { Countries, TouristActivities } = require('../db.js');
const { saveAll } = require('./controllers.js')




const router = Router();
router.use(express.json())
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/', async(req, res) => {
    try {
        const dataBd = await Countries.findAll();
        const datos = await saveAll();
        if(dataBd.length === 0 && datos.length !== 0){
            await Countries.bulkCreate(datos);
            
        }
        res.send('succesfull')
   
    } catch (error) {
        res.status(400).send(error);
    
    }

 
})


router.get('/countries', async (req, res) => {
    const { name, ID , size, page} = req.query;
    
    try {
        
        if(name) {
            const byName = await Countries.findOne({
                where:{
                    Name : name
                }
            })
           return res.json(byName.toJSON())
        }

        if(ID) {
            const byId = await Countries.findByPk(ID , {
                include : [{
                    model : TouristActivities,
                    through: {
                        attributes: []
                    }
                }]
            })
            
           return res.json(byId)
        }

        //paginación

        let base = await Countries.findAndCountAll({
            limit: size,
            offset: page * size
        });
            
            res.send(base)
    } catch (error) {
        res.status(404).send(error)
    }
    
    
})

router.post('/activity', async (req, res) => {
    const {ID, Name, Difficult, Duration, Season } = req.body;

    try{

        await TouristActivities.create({
                Name,
                Difficult,
                Duration,
                Season
        })
        const Act = await TouristActivities.findOne({
            where:{
                Name : Name
            }
        })

        const country = await Countries.findByPk(ID);
        await country.addTouristActivities(Act)
        res.status(200).send('was created your activity succesfully')
    }
    catch(error) {
        res.send(error)
    }
})

module.exports = router;

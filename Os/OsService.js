var os = require('os')
function osInfo(req,res,next)
{ res.json
    
({
    hostname : os.hostname(),
    type: os.type(),

    platfrorm: os.platform()


})
}

function osCpuById(req, res, next) {
    const id = parseInt(req.params.id, 10); 
    const cpus = os.cpus();

    if (id >= 0 && id < cpus.length) {
        res.json(cpus[id]);  
    } else {
        res.status(404).json({ error: 'Processor not found' });
    }
}

function osCpus(req,res,next)
{res.json
    ({ 
     cpus:os.cpus()
    });

}
module.exports={osInfo, osCpus, osCpuById}
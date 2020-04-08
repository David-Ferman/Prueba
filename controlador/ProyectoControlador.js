const Proyecto=require('../modelo/Transacciones');
const Saldo=require('../modelo/Saldo');

exports.proyectoHome=async(req,res,next)=>{
    const fromAccount=req.body.fromAccount;
    const toAccount=req.body.toAccount;
    const amount=req.body.amount;
    
    const operadores=await Saldo.findOne({
        where:{
            cuenta:fromAccount
        }
    });
    const resta_verificaSaldo=Number(operadores.saldo.replace("$",""))-Number(amount);
    
    const enviar=await Saldo.findOne({
        where:{
            cuenta:toAccount
        }
    });
    if(operadores && enviar){
    
    if(req.body.fromAccount=='' || req.body.toAccount=='' || req.body.amount==''){
        res.json({message: 'invalid data'});
        return next();
    }else{
    if(resta_verificaSaldo > 0){
        let saldoExistente=operadores.saldo.replace("$","");
        let saldoResta=Number(saldoExistente)-Number(amount);

        let cuenta=operadores.cuenta;
        let saldo="$"+saldoResta;
        const agregar=await Saldo.update({cuenta,saldo},{where:{id:operadores.id}});

        let saldoExistenteEnvio=enviar.saldo.replace("$","");
        let saldoRestaEnvio=Number(saldoExistenteEnvio)+Number(amount);
        cuenta=enviar.cuenta;
        saldo="$"+saldoRestaEnvio;
        const agregar2=await Saldo.update({cuenta,saldo},{where:{id:enviar.id}});
        //console.log(saldoResta);
        
        await Proyecto.create({fromAccount,toAccount,amount}).then(()=>{
        });
        res.json({
            message: 'OK',
            fromAccount: fromAccount,
            toAccount: toAccount,
            amount:amount
        }) 
    }else{
        res.json({message: 'insufficient balance'});
    }
        }
        
        return next();
    }else{
        res.json({message: 'fromAccount or toAccount no valid '});
        return next();
    }
    
    }


    exports.Historial=async(req,res,next)=>{
    
        const fromAccount=req.body.fromAccount;
        const validar=await Saldo.findOne({
            where:{
                cuenta:fromAccount
            }
        });
    
    console.log(fromAccount);
    if(validar){
        const proyectos=await Proyecto.findAll({where:{fromAccount:fromAccount}});
        res.json({transactions: proyectos});
    }else{
        res.json({message: 'fromAccount no valid '});
    }
    }
    exports.Saldo=async(req,res,next)=>{
    
        const fromAccount=req.body.fromAccount;
        const validar=await Saldo.findOne({
            where:{
                cuenta:fromAccount
            }
        });
    
    console.log(fromAccount);
    if(validar){
        
        res.json({
            balance:{
                account:validar.cuenta,
                balanc:validar.saldo,
                owner:validar.usuario,
                id:validar.id
                
            }
        });
    }else{
        res.json({message: 'fromAccount no valid '});
    }
    }

    exports.Crear=async(req,res,next)=>{
        const usuario=req.body.usuario;
        const cuenta=req.body.cuenta;
        const saldo=req.body.saldo;
        await Saldo.create({usuario,cuenta,saldo}).then(()=>{
        });
        res.json({message: 'count create'});
       
    }
    



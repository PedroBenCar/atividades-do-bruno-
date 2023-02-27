let augusto = 
        {
            nome: 'Augusto Saraiva',
            idade: 16           
        }       
        let benites = 
        {
            nome: 'Pedro Benites',
            idade: 17           
        }
if(augusto.idade > benites.idade)
            console.log('Mais velho: ' + augusto.nome)
        else if(benites.idade > augusto.idade)
            console.log('Mais velho: ' + benites.nome)
        else 
            console.log('Idades iguais')
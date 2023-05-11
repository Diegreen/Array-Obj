const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 6799.33
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 12199.13
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 11099.1
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 14578.25
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 28399.13
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 14350.45
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 22109.21
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 15999.13
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 17251.36
    }
  ]

  function theCars (carList) {
    for(i = 0; i < carList.length; i++) {
        return carList.length
    }
  }

  console.log(theCars(carros))

  function sumValueOfCars (valueCars) {
    let sum = 0
    for(i = 0; i < valueCars.length; i++) {
         sum += valueCars[i].preco
    }
    return sum.toFixed(2)
  }

  console.log(sumValueOfCars(carros))

  //function filterOfBrand (carros, searchBrand) {
  //  const filteredCars = []
    //for(i = 0; i < carros.length; i++) {
      // if(carros[i].marca == searchBrand) {
      // filteredCars.push(carros[i])
       //}
   // }
    //return filteredCars
  //}

  //console.log(filterOfBrand(carros, "VW"))

function searchForAcessory(carros, item) {
    let acessoryArray = []
    for (i = 0; i < carros.length; i++) {
        if (carros[i].acessorios.includes(item)) {
            acessoryArray.push(carros[i])
        }
    }
    return acessoryArray
}

console.log(searchForAcessory(carros, "Vidro Elétrico"))
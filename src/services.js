

const createFacility =  (props) => { new Promise( (resolve) => {
     resolve(localStorage.setItem('facilities', JSON.stringify(props)))
})
    
}



const getFacilities = (data) => {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject(console.log('no data'))
    } else {
      resolve(data)
    }
  })
}




    

       





export {
    createFacility,
    getFacilities
}



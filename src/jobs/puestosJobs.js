import axios from 'axios';



export const getData = async () => {
    try {
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/jobs?_expand=organization")
        return res.data 
    } catch (err) {
        alert('Ocurrió un error ⚠');
    }
};

export const postData = async (data) => {
    console.log(data)
    const configRequest = {
        method: 'post',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/jobs',
        data: data
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        alert('Algo paso =(');
        
    }
};

export const deleteData = async (id) => {
    const configRequest = {
        method: 'delete',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/jobs',
        data: id
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        alert('Ups, algo paso.');
        
    }
};


export const getPais = async () => {
    try {
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/countries")
        return res.data 
    } catch (err) {
        alert('Ups, algo paso');
    }
};

export const postPais = async (countrie) => {
    const configRequest = {
        method: 'post',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/countries',
        data: {name: countrie}
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        alert('Ups, algo paso');
        
    }
};  



export const getCiudadPais = async () => {
    try {
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/places?_expand=countrie")
        return res.data 
    } catch (err) {
        alert('Ups, algo paso');
    }
};

export const getCiudad = async () => {
    try {
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/places")
        return res.data 
    } catch (err) {
        alert('Ups, algo paso');
    }
};

export const postCiudad = async (data) => {
    const configRequest = {
        method: 'post',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/places',
        data: data
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        alert('Ups, algo paso');
        
    }
};

  
// opciones API para Empresa ###############################
export const postEmpresa = async (data) => {
    const configRequest = {
        method: 'post',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/organizations',
        data: data
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        alert('Ups, algo paso');
        
    }
};

export const getEmpresaCiudad = async () => {
    try {
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/organizations/?_expand=place")
        return res.data 
    } catch (err) {
        alert('Ups, algo paso');
    }
};

export const getEmpresa = async () => {
    try {
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/organizations")
        return res.data 
    } catch (err) {
        alert('Ups, algo paso');
    }
}
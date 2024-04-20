import axios from 'axios'

export const url = "https://ticket.metamax.network/api/v1"
export const baseurl = "https://ticket.metamax.network"
// export const Fetchdata = axios.get(url)
export const SendSeats = async (d) => {
    let formdata = new FormData();
    formdata.append("ids", d)

    const response = await axios.post(url, formdata)
    console.log(response.data)
}

export const getData = () => axios.get(url)


export const getSansinfobyID = (concertID) => {
    let formdata = new FormData()
    formdata.append('concert_id', concertID)
    return axios.post(`${url}/sans`, formdata)

}

export const getSeatinginfobyID = (SansID) => {
    let formdata = new FormData()
    formdata.append('sans_id', SansID)
    return axios.post(`${url}/seat`, formdata)

}

export const buySeats = (SansID, name, numbers, bearer) => {
    let formdata = new FormData()
    formdata.append('numbers', JSON.stringify(numbers))
    formdata.append('sans_id', SansID)
    formdata.append('name', name)

    return axios.post(`${url}/user/pay`, formdata, bearer)

}

export const buyVideos = (videoID, name, bearer) => {
    let formdata = new FormData()

    formdata.append('video_id', videoID)
    formdata.append('name', name)

    return axios.post(`${url}/user/videopay`, formdata, bearer)

}


export const getUserVideos = ( bearer) => {


    return axios.get(`${url}/user/videos`, bearer)

}

import { Icategory } from "../interface/categorys";
import instance from "./instance";



const getAllCategory = () => {
    return instance.get("/categorys")
}
const getOne = (_id: string) => {
    return instance.get("/categorys/" + _id)
}
const updatecategory = (data: Icategory) => {
    const { accessToken } = JSON.parse(localStorage.getItem('user')!)
    return instance.put("/categorys/" + data._id, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
const removecategory = (_id: string) => {
    const { accessToken } = JSON.parse(localStorage.getItem('user')!)
    return instance.delete("/categorys/" + _id, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
const addcategory = (data: Icategory) => {
    const { accessToken } = JSON.parse(localStorage.getItem('user')!)
    return instance.post("/categorys", data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

export { getAllCategory, getOne, updatecategory, removecategory, addcategory }
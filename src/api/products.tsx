import instance from "./instance";
import { Iproduct } from "../interface/product";


const getAll = () => {
    return instance.get("/products")
}
const getOne = (_id: string) => {
    return instance.get("/products/" + _id)
}
const updateproduct = (data: Iproduct) => {
    const { accessToken } = JSON.parse(localStorage.getItem('user')!)
    return instance.put("/products/" + data._id, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}


const removeproduct = (_id: string) => {
    const { accessToken } = JSON.parse(localStorage.getItem('user')!)
    return instance.delete("/products/" + _id, {

        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
const addproduct = (data: Iproduct) => {
    const { accessToken } = JSON.parse(localStorage.getItem('user')!)
    return instance.post("/products", data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

export { getAll, getOne, updateproduct, removeproduct, addproduct }
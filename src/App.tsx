import { Routes, Route } from 'react-router-dom'
// import './App.css'
import HomePage from './page/HomePage'
import Productpage from './page/Productpage'
import ProductDetail from './page/ProductDetail'
import { useState, useEffect } from "react"
import { addproduct, getAll, removeproduct, updateproduct } from './api/products'
import DashBoard from './page/admin/DashBoard'
import Listproduct from './page/admin/Listproduct'
import Addproduct from './page/admin/Addproduct'
import UpdateProduct from './page/admin/UpdateProduct'
import LayoutAdmin from './page/Layout/LayoutAdmin'
import Singup from './page/login/Singup'
import Singin from './page/login/Singin'
import { addUser, getallUser } from './api/user'
import { Iuser } from './interface/user'
import { Iproduct } from './interface/product'
import { addcategory, getAllCategory, updatecategory } from './api/category'
import { Icategory } from './interface/categorys'
import ListCategory from './page/admin/ListCategory'
import AddCategory from './page/admin/AddCategory'
import UpdateCategory from './page/admin/UpdateCategory'
import { removecategory } from './api/category'
import ListUser from './page/admin/ListUser'
import LayoutClt from './page/Layout/LayoutClt'

function App() {
  const [users, setUsers] = useState<Iuser[]>([])
  const [categorys, setCategorys] = useState<Icategory[]>([])
  const [products, setProducts] = useState<Iproduct[]>([])
  useEffect(() => {
    getAll().then(({ data }) => setProducts(data))
  }, [])

  useEffect(() => {
    getallUser().then(({ data }) => setUsers(data))
    console.log(users)
  }, [])

  useEffect(() => {
    getAllCategory().then(({ data }) => setCategorys(data))
  }, [])



  const handelAll = (data: Iuser) => {
    addUser(data).then(() => setUsers([data, ...users]))
  }
  const handelremove = (id: any) => {
    removeproduct(id).then(() => setProducts(products.filter((item: Iproduct) => item._id != id)))
  }
  const handeladdproduct = (data: Iproduct) => {
    addproduct(data).then(() => setProducts([data, ...products]))
  }
  const handelupdate = (data: Iproduct) => {
    updateproduct(data).then(() => setProducts(products.map((item) => {
      if (item._id == data._id) {
        return data
      }
      else {
        return item
      }
    })))
  }

  const handeldelete = (id: string) => {
    removecategory(id).then(() => setCategorys(categorys.filter((item) => item._id != id)))
  }
  const addcategorys = (data: Icategory) => {
    addcategory(data).then(() => setCategorys([data, ...categorys]))
  }
  const handelupdatecategory = (data: Icategory) => {
    updatecategory(data).then(() => setCategorys(categorys.map((item) => {
      if (item._id == data._id) {
        return data
      }
      else {
        return item
      }
    })))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutClt />}>
          <Route index element={<HomePage />} />
          <Route path='product'>
            <Route index element={<Productpage product={products} />} />
            <Route path=':id' element={<ProductDetail />} />
          </Route>
          <Route path='singup' element={<Singup adduser={handelAll} />} />
          <Route path='singin' element={<Singin />} />
        </Route>

        <Route path='/admin' element={<LayoutAdmin />}>
          <Route index element={<DashBoard />} />
          <Route path='product'>
            <Route index element={<Listproduct products={products} onremove={handelremove} category={categorys} />} />
            <Route path='add' element={<Addproduct onadd={handeladdproduct} category={categorys} />} />
            <Route path=':id'>
              <Route path='edit' element={<UpdateProduct products={products} onupdate={handelupdate} />} />
            </Route>
          </Route>
          <Route path='category'>
            <Route index element={<ListCategory category={categorys} onremove={handeldelete} />} />
            <Route path='add' element={<AddCategory onadd={addcategorys} />} />
            <Route path=':id'>
              <Route path='edit' element={<UpdateCategory onupdate={handelupdatecategory} category={categorys} />} />
            </Route>
          </Route>
          <Route path='user'>
            <Route index element={<ListUser alluser={users} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App

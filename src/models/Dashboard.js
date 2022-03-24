import { createDashboardCard } from "../utils/functions.js"

export class Dashboard {
  static container = document.querySelector('.tabel_list')
  static products = []

  static async showProducts (products) {
    console.log(products)
    Dashboard.products = products
    
    Dashboard.products.forEach(product => {
      Dashboard.container.innerHTML += createDashboardCard(product)
    })
  }

  static async addProduct (e) {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)
    const productData = Object.fromEntries(formData.entries())
    const authToken = localStorage.getItem('userToken')

    const response = await fetch('https://kenzie-food-api.herokuapp.com/my/products', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      },
      body: JSON.stringify(productData)
    })
      .then(response => response.json())
      .catch(error => error)

    console.log(response)
  }

  static async deleteProduct () {
    
  }
}
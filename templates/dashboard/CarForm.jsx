"use client"
import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

export default function CarForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: null,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function handleChange(e) {
    const { name, value, files } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError("")
    const data = new FormData()
    Object.entries(form).forEach(([key, value]) => data.append(key, value))
    const res = await fetch("/dashboard/cars/create/", {
      method: "POST",
      body: data,
    })
    setLoading(false)
    if (res.ok && onSuccess) onSuccess()
    if (!res.ok) setError("Failed to save car. Please check your input.")
  }

  return (
    <Card className="max-w-lg mx-auto mt-8">
      <CardHeader>
        <CardTitle>Add Car</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <CardContent className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Price</label>
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Image</label>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
        </CardContent>
        <CardFooter>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </CardFooter>
      </form>
    </Card>
  )
}

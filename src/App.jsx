import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const units = {
  length: ['Meters', 'Kilometers', 'Feet', 'Yards', 'Miles'],
  weight: ['Grams', 'Kilograms', 'Ounces', 'Pounds'],
  temperature: ['Celsius', 'Fahrenheit', 'Kelvin']
}

// Conversion factors relative to base unit for length and weight
const conversionFactors = {
  length: {
    Meters: 1,
    Kilometers: 1000,
    Feet: 0.3048,
    Yards: 0.9144,
    Miles: 1609.34
  },
  weight: {
    Grams: 1,
    Kilograms: 1000,
    Ounces: 28.3495,
    Pounds: 453.592
  }
}

function convertLength(value, fromUnit, toUnit) {
  const meters = value * conversionFactors.length[fromUnit]
  return meters / conversionFactors.length[toUnit]
}

function convertWeight(value, fromUnit, toUnit) {
  const grams = value * conversionFactors.weight[fromUnit]
  return grams / conversionFactors.weight[toUnit]
}

function convertTemperature(value, fromUnit, toUnit) {
  let celsius

  // Convert from source unit to Celsius
  if (fromUnit === 'Celsius') celsius = value
  else if (fromUnit === 'Fahrenheit') celsius = (value - 32) * (5/9)
  else if (fromUnit === 'Kelvin') celsius = value - 273.15

  // Convert from Celsius to target unit
  if (toUnit === 'Celsius') return celsius
  else if (toUnit === 'Fahrenheit') return celsius * (9/5) + 32
  else if (toUnit === 'Kelvin') return celsius + 273.15
}

export default function App() {
  const [category, setCategory] = useState('length')
  const [fromUnit, setFromUnit] = useState(units[category][0])
  const [toUnit, setToUnit] = useState(units[category][1])
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState('')

  // Update units when category changes
  const handleCategoryChange = (e) => {
    const cat = e.target.value
    setCategory(cat)
    setFromUnit(units[cat][0])
    setToUnit(units[cat][1])
    setInputValue('')
    setResult('')
  }

  const handleConvert = () => {
    const val = parseFloat(inputValue)
    if (isNaN(val)) {
      setResult('Entrée invalide')
      return
    }

    let res
    if (category === 'length') {
      res = convertLength(val, fromUnit, toUnit)
    } else if (category === 'weight') {
      res = convertWeight(val, fromUnit, toUnit)
    } else if (category === 'temperature') {
      res = convertTemperature(val, fromUnit, toUnit)
    }

    setResult(res.toFixed(4))
  }

  return (
    <div className="container py-5">
      <div className="card shadow-sm mx-auto" style={{maxWidth: '480px'}}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Convertisseur d'unités</h2>

          <div className="mb-3">
            <label htmlFor="category" className="form-label">Catégorie</label>
            <select
              id="category"
              className="form-select"
              value={category}
              onChange={handleCategoryChange}
            >
              {Object.keys(units).map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'length' ? 'Longueur' : cat === 'weight' ? 'Poids' : 'Température'}
                </option>
              ))}
            </select>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-6">
              <label htmlFor="fromUnit" className="form-label">De</label>
              <select
                id="fromUnit"
                className="form-select"
                value={fromUnit}
                onChange={e => setFromUnit(e.target.value)}
              >
                {units[category].map(unit => (
                  <option key={unit} value={unit}>{unit}</option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <label htmlFor="toUnit" className="form-label">Vers</label>
              <select
                id="toUnit"
                className="form-select"
                value={toUnit}
                onChange={e => setToUnit(e.target.value)}
              >
                {units[category].map(unit => (
                  <option key={unit} value={unit}>{unit}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="inputValue" className="form-label">Valeur</label>
            <input
              id="inputValue"
              type="number"
              className="form-control"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder="Entrer la valeur"
            />
          </div>

          <button
            className="btn btn-primary w-100"
            onClick={handleConvert}
          >
            Convertir
          </button>

          {result && (
            <div className="alert alert-success mt-4 text-center" role="alert">
              Résultat : <strong>{result} {toUnit}</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}



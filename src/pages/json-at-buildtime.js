import React from "react"
import JSONData from "../../content/wahlen/europawahl2019.json"

const JSONbuildtime = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>{JSONData.name}</h1>
    <ul>
      {JSONData.theses.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.topic}</li>
      })}
    </ul>
  </div>
)
export default JSONbuildtime
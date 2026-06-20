function History() {

  const history = [
    {
      id: 1,
      type: "Text",
      input: "Hello",
      output: "ISL Sign"
    },
    {
      id: 2,
      type: "Audio",
      input: "audio.mp3",
      output: "ISL Sign"
    },
    {
      id: 3,
      type: "Video",
      input: "video.mp4",
      output: "ISL Sign"
    }
  ]

  return (
    <div style={{ padding: "20px" }}>
      <h1>Translation History</h1>

      <input
        type="text"
        placeholder="Search..."
      />

      <br /><br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Input</th>
            <th>Output</th>
          </tr>
        </thead>

        <tbody>
          {history.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.type}</td>
              <td>{item.input}</td>
              <td>{item.output}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default History
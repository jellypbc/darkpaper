import '../css/app.scss'
import PDFViewer from '../components/PDFViewer/PDFViewer'
import { PDFJs } from '../backends/pdfjs'

function App() {
  return (
    <div id="app">
      <PDFViewer 
        backend={PDFJs}
        src=" /myPDF.pdf"
      />
      {/* <div id="wrapper">
        <h1 className="glitch" data-text="The future is dark_">The future is dark_</h1>
      </div> */}
    </div>
  ) 
}


export default App
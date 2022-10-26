import React from "react";
import "./App.css";
import { Typography } from "@material-ui/core";

import UploadImages from "./components/upload-images.component";

function App() {
  return (
    <div className="container" style={{backgroundColor: 'white'}}>
      <div className="mg20">
        <Typography variant="h6">Image Upload with React.js, ASP.NET Core and Azure Blob Storage</Typography>
      </div>

      <UploadImages />
    </div>
  );
}

export default App;

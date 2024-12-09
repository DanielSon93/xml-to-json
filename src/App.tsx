import { useState, useEffect } from "react";
import { xml2js } from "xml-js";

function App() {
  const [datas, setDatas] = useState(0);

  useEffect(() => {
    fetch("/data/jobkorea.xml")
      .then((res) => res.text())
      .then((data) => {
        const newData = data.replace(
          /&(?!(amp;|lt;|gt;|quot;|apos;))/g,
          "&amp;"
        );
        const jsonData = xml2js(newData, { compact: true });
        setDatas(jsonData);
      });
  }, []);

  datas && console.log(datas);

  return <></>;
}

export default App;

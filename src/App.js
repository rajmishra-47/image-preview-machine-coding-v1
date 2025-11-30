import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [imageArray, setImageArray] = useState([]);
  const [previous, nextButton] = useState(0);
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((data) => {
        let urls = data.map((i) => i.download_url);
        setImageArray(urls);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <img
        src={imageArray[previous]}
        alt=""
        style={{ width: "200px", height: "150px", objectFit: "cover" }}
      />
      {previous != 0 && (
        <button onClick={() => nextButton(previous - 1)}>Previous</button>
      )}
      <button
        onClick={() => {
          if (previous + 1 >= imageArray.length) nextButton(0);
          else nextButton(previous + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}

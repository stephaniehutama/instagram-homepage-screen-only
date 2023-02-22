import FeedsCards from "../components/FeedsCards";
import { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "https://private-d7df8d-instagrammockup.apiary-mock.com";

export default function HomeScreen() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${baseUrl}/posts`)
      .then((response) => setData(response.data.record.data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) return null;
  return (
    <>
      {/* {JSON.stringify(data)} */}
      <div className="row">
        <div className="col-8 d-flex justify-content-end  pe-5">
          {data.map((index, dt) => {
            <FeedsCards
              key={index}
              data={dt}
            />;
          })}
        </div>
        <div className="col-4 ">profile</div>
      </div>
    </>
  );
}

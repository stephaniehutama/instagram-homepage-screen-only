import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = "https://private-d7df8d-instagrammockup.apiary-mock.com";

export default function Profile() {
  const [suggestions, setSuggestion] = useState([]);

  async function fetchSuggestion() {
    try {
      const response = await axios.get(`${baseUrl}/suggestions`);
      setSuggestion(response.data.suggestions);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSuggestion();
  }, []);

  return (
    <>
      {/* {JSON.stringify(suggestions)} */}
      <div style={{ width: 330 }}>
        <div className="d-flex align-items-center mt-4 ">
          <div
            id="profile"
            className=" col-2 d-flex justify-content-start"
          >
            <img
              src="https://tcpetsitting.com/wp-content/uploads/2019/02/town_country_pet_sitting_square_puppy-163a-400x400.jpg"
              alt=""
              style={{
                borderRadius: 50,
                width: 60,
              }}
            />
          </div>
          <div
            className=" col-7 ps-3"
            style={{ fontSize: 14 }}
          >
            <strong id="profile">stephaniehutama</strong>
            <div id="name">Stephanie Hutama</div>
          </div>
          <div
            className="d-flex justify-content-end col-3"
            style={{ fontSize: 12 }}
            id="switch"
          >
            <strong>Switch</strong>
          </div>
        </div>
        <div className="d-flex justify-content-between  my-3">
          <div style={{ fontSize: 14, opacity: 0.5 }}>
            <strong>Suggestion for you</strong>
          </div>
          <div
            style={{ fontSize: 12 }}
            id="icon"
          >
            <strong>See All</strong>
          </div>
        </div>
        {suggestions.map((suggestion, index) => {
          return (
            <div
              key={index}
              className="d-flex align-items-center py-1"
            >
              <div
                id="profile"
                className=" col-1 d-flex justify-content-start"
              >
                <img
                  src={suggestion.profile_picture}
                  alt=""
                  style={{
                    borderRadius: 50,
                    border: 2,
                    width: 40,
                  }}
                  id="border"
                />
              </div>
              <div
                className=" col-8 ps-4"
                style={{ fontSize: 14 }}
              >
                <strong id="profile">{suggestion.username}</strong>
                <div
                  id="name"
                  style={{ fontSize: 12 }}
                >
                  {suggestion.followed_by.length > 1
                    ? `Followed by ${suggestion.followed_by[0]} 
                  and ${suggestion.followed_by.length - 1} others
                  `
                    : `New to Instagram`}
                </div>
              </div>
              <div
                className="d-flex justify-content-end  col-3"
                style={{ fontSize: 12 }}
                id="switch"
              >
                <strong>Follow</strong>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

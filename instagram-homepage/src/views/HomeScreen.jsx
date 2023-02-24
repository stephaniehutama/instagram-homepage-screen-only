import FeedsCards from "../components/FeedsCards";
import { useEffect, useState } from "react";
import axios from "axios";
import Stories from "../components/Stories";
import Profile from "../components/Profile";
const baseUrl = "https://private-d7df8d-instagrammockup.apiary-mock.com";

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [stories, setStory] = useState([]);

  async function fetchPosts() {
    try {
      const response = await axios.get(`${baseUrl}/posts`);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchStories() {
    try {
      const response = await axios.get(`${baseUrl}/stories`);
      setStory(response.data.stories);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <>
      {/* {JSON.stringify(data)} */}
      {/* {JSON.stringify(stories)} */}
      <div className="d-flex justify-content-center py-3">
        <div className=" col-6 d-flex justify-content-end">
          <div className="pe-5">
            <div className="d-flex column py-4">
              {stories.map((story, index) => {
                return (
                  <Stories
                    key={index}
                    story={story}
                  />
                );
              })}
            </div>
            <div>
              {data.map((element, index) => {
                return (
                  <FeedsCards
                    key={index}
                    data={element}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-4 mt-4">
          <Profile />
        </div>
      </div>
    </>
  );
}

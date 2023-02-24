export default function Stories({ story: stories }) {
  return (
    <>
      {/* {JSON.stringify(stories)} */}
      {stories ? (
        <div
          style={{ width: 65, height: 70, justifyContent: "center" }}
          className="my-3 me-3"
        >
          <div
            className="border border-3 border-danger"
            style={{ borderRadius: 50 }}
            id="story"
          >
            <center>
              <img
                src={stories?.profile_picture}
                alt="profile"
                style={{ width: 58, borderRadius: 50 }}
              />
            </center>
          </div>
          <div
            style={{
              fontSize: 10,
              wordWrap: "unset",
              alignSelf: "center",
            }}
          >
            <center>{stories?.username}</center>
          </div>
        </div>
      ) : (
        <div>
          <img
            src="https://avatars3.githubusercontent.com/u/25381150?v=4"
            alt="..."
          />
        </div>
      )}
    </>
  );
}

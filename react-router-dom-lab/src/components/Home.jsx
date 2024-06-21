import PostOffice from './PostOffice.jpeg'

const Home = () => {

    return (
      <div className="home">
        <div>
          <img src={PostOffice} alt="post office"/>
          
        </div>
        <div>
          <h1>Post Office</h1>
          <h2>
            Welcome!! To the local General Assembly branch. Offering you a varity of mail box options at your convenience.
          </h2>
        </div>
      </div>
    )
  }
  
  export default Home
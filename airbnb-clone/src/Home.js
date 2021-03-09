import React from 'react';
import Banner from './Banner';
import Card from './Card';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/1234059/492861b7_original.jpg?im_w=960"
          title="3 Bedroom Flat in Cicago"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="$130/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/3315684/a97df0d5_original.jpg?im_w=960"
          title="Penthouse in CA"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="$250/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/13114457/65b2fd17_original.jpg?im_w=960"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="$270/night"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="$130/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="$350/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="$70/night"
        />
      </div>
    </div>
  )
}

export default Home

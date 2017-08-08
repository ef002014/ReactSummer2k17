import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15
}

const CardHold = () => (
  <Card>
    <CardHeader
      title="Errol Francis II"
      subtitle="Trulia Intern"
      avatar="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAdbAAAAJDYxMDUwOGRhLTViM2EtNDM4NS05ZTgyLThkOGE1NWNiZWRmYw.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="The San Francisco Tech Experience" subtitle="Summer 2017" />}
    >
      <img src="http://www.socketsite.com/wp-content/uploads/2017/03/San-Francisco-Skyline-Rendering-2017-West.jpg" alt="SF SkyLine" />
    </CardMedia>
    <CardTitle title="The Bay Area Lifestyle" subtitle="My First Time in NorCal" />
    <CardText>
      If you're interested in going into the tech industry, everybody knows there are two places that you <b> have </b>
      to be: Silicon Valley or San Francisco. This summer i Was fortunate enough to be able to work in the latter
      location and get a good feel for the city. It was my first time being in Northern California and my first tech
      internship, so needless to say I had a bundle of emotions going into the summer. I was excited for the opportunity,
      worried if I would know enough, hesitant to be living in a place like SF for the first time, etc. But I came
      to the city my first day ready for whatever it had to offer me. However I quickly learned that while San Francisco
      was a pretty nice place to work, it wasn't the best place to live. Like...at all. I was living downtown in a really
      cramped room. I would roll out of my twin size bed in the morning with a yawn accompanied by a big stretch and my fingertips
      could reach from one side of the room to the other. Walking over to my window in the morning, I'd open my blinds
      and instead of being greeted by the warmth of the sun I had a nice view of the red bricks of the outside of the
      building across from me. I was paying way too much for way too little. I had to get out. This is when my journey
      took me to East Oakland. After complaining to one of my good friends about my current living situation, he replied
      with a laugh "Bro, you know I live in Oakland. You can just stay in my room while I'm away."  Man, it's good to
      have friends: if I hadn't had my little vent session and a friend who truly cared about me my
      summer would've been <i> completely </i> different.

    </CardText>
    <CardActions>
      <FlatButton label="Code2040" href="/mentor" />
      <FlatButton label="Zillow Group" href="/zgroup" />
    </CardActions>
  </Card>
);

export default CardHold;
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const TruliaExp = () => (
  <Card>
    <CardHeader
      title="Errol Francis II"
      subtitle="Trulia Intern"
      avatar="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAdbAAAAJDYxMDUwOGRhLTViM2EtNDM4NS05ZTgyLThkOGE1NWNiZWRmYw.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="The San Francisco Tech Experience" subtitle="Summer 2017" />}
    >
      <img src="https://dwtd9qkskt5ds.cloudfront.net/blog/wp-content/uploads/2017/08/Engineering-Intern-Class-1-2018.jpg"
           alt="Trulia Internship" />
    </CardMedia>
    <CardTitle title="The Zillow Group Family" subtitle="Front End Software Engineering" />
    <CardText>
      I had a lot of nerves coming into my summer internship at Zillow Group. This was my first tech internship and
      I wasn't sure exactly what to expect or what I would even be doing. Would I be the stereotypical intern doing busy
      work in between making coffee runs for the team? Or would I be a valued member of the group doing real work and
      making valid contributions? I walked into the Zillow Group office on the first day pondering whether or not I would
      be leaving satisfied with my role later that day. It took a while before I was actually able to get to see what
      I would be doing for the summer: my first week on the job was full of meetings. Between onboarding, Q&A sessions,
      fireside chats, and getting IT to fix the little hiccups in my software and hardware, there was very little time to
      actually sit down at my desk and get some work done. When I finally did have a moment to sit at my desk and be
      productive, my manager met with me to talk about his expectations for the summer and to set some goals with me.
      He looked at me and said, "The biggest thing that I want you to gain from this experience is knowledge. I don't
      want you to leave at the end of the summer and think to yourself 'What the heck did I just do for the last two
      months' after only doing Trulia related work. I want you to leave here and be able to have applicable knowledge
      that you can use anywhere you go after Trulia. We want to make sure that you get the most out of this summer and
      that we're working with you to ensure you leave here fulfilled." Immediately all the nerves I had coming in
      dissipated. The sincerity of his words immediately told me I had made the right choice coming to Zillow Group and
      that I would have an amazing summer. From the company culture to the knowledge I gained in the workplace, ZG
      met my every expectation.
    </CardText>
    <CardActions>
      <FlatButton label="Code2040" href="/mentor" />
      <FlatButton label="Home" href="/" />
    </CardActions>
  </Card>
);

export default TruliaExp;
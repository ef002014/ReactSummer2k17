import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CodeTF = () => (
  <Card>
    <CardHeader
      title="Errol Francis II"
      subtitle="Trulia Intern"
      avatar="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAdbAAAAJDYxMDUwOGRhLTViM2EtNDM4NS05ZTgyLThkOGE1NWNiZWRmYw.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="The San Francisco Tech Experience" subtitle="Summer 2017" />}
    >
      <img src="https://pbs.twimg.com/media/DGpF001W0AA37cz.jpg" alt="Code2040 Mentorship" />
    </CardMedia>
    <CardTitle title="The Code2040 Experience" subtitle="Networking, Uplift and Workshops" />
    <CardText>
      Although my main focus coming to San Francisco was to participate in my summer internship, I soon saw that it wasn't
      the internship that would take up the majority of my time but rather it would be my summer mentorship program that
      would fill up my Tuesday and Thursday evenings as well as render most of my weekends obsolete.
      A nonprofit organization creating pathways to educational, professional, and entrepreneurial
      success in technology for underrepresented minorities,
      <a href="http://www.code2040.org/" target="_blank" rel="nofollow noreferrer noopener"> Code2040 </a>
      focuses on helping those Black and Latinx communities
      interested in technology close the achievement, skills, and wealth gaps in the United States. Their goal:
      "to ensure that by the year 2040 - the start of the decade when the US will be majority people of color -
      we are proportionally represented in America's innovation economy as technologists, investors, thought leaders,
      and entrepreneurs." While the program was very time consuming it was also a very uplifting and informative
      experience. Coming into a room every Tuesday and Thursday full of people color with similar goals and aspirations
      as yourself and being able to imagine a future in which your workspace could reflect and represent these demographics
      is inspiring. But as much as our similarities helped us bond our differences made these relationships even stronger.
      Everyone had something different to bring to the table, something that you could either play off of or learn from
      and improve yourself. Without a doubt, the Code2040 Program was the highlight of my summer.
    </CardText>
    <CardActions>
      <FlatButton label="Zillow Group" href="/zgroup" />
      <FlatButton label="Home" href="/" />
    </CardActions>
  </Card>
);

export default CodeTF;
import React from 'react';
import ChoiceSelector from './ChoiceSelector'

const HomePage = () => (
<div className="selectorDivCenter" id="tempLanding">
  <h1>Welcome to the Rapid Exchange Application</h1><br></br> 
  <div className="selectorDivJustify" id="tempNotes">
    <p>This is a work in progress. The actual application is functional and can be used by clicking on 'App'.</p>
    <p>The 'Profile' and 'Students' links lead to content that is, for the moment, hard coded into the database.</p>
    <p>I'm currently working on implementing authentication / signup / login features to allow users to store student information that will personalize the application.</p>
    <p>***This application is connected to an API that is hosted on Heroku at its free tier, so the first time you try it, the dynamic content may take a while as the dyno spins up.***</p>
    </div>
</div>
)

export default HomePage;
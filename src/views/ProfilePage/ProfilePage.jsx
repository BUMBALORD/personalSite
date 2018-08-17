import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import profile from "assets/img/faces/david.jpg";
import dh from "assets/img/dh.jpg";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const styles = {
      marginBottom: "25px"
    }
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const imagesDirect = classNames(
      classes.imgFluid,
      classes.imgCard,
      classes.imgRaised
    )
    const navImageClasses = classNames(classes.imgRounded, classes.imgRaised);
    return (
      <div>
        
        <Parallax small filter image={require("assets/img/bg7.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>David Hallinan</h3>
                      <h6>Lead Instructor - UC Berkeley Coding Bootcamp</h6>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  Artist and Musician turned Full Stack Software Engineer turned Educator. I am currently the Lead Instructor for Trilogy Education Service's full-time Full Stack Coding Bootcamp at UC Berkeley Extension in Berkeley, Ca.
                </p>
              </div>              
              <div className={classes.description}>
              <a href="http://voices.berkeley.edu/technology-and-information-management/embrace-confusion" target="_blank"><img src={dh} alt="..." className={imagesDirect} />
              </a>
                <h2 className={classes.title}><a className={classes.link}href="http://voices.berkeley.edu/technology-and-information-management/embrace-confusion"> Embracing Confusion </a></h2>
                <p>
                Learning how to code in just 12 weeks takes stamina and fortitude to get through the amount of work that the students have to master. Instructor David Hallinan understands the weight of this curriculum, and shares his mantra with the students: Embrace confusion.
                </p>
              </div>
              <div className={styles.marginBottom}>
                <br/>
                <hr/>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);

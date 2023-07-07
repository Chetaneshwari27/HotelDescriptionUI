import { Container, Box, Typography, withStyles, WithStyles, createStyles, Grid, Badge,Button, Avatar } from "@material-ui/core";
import React from "react";

interface State {
    showAdditionalSkills: boolean;
}

interface HomeProps extends WithStyles<typeof styles> { }

const styles = createStyles({
    mainContainer: {
        marginTop: "20px",
        marginBottom: "20px",
        width: "150%",
        background: '#F7F9FA',
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    Heading: {
        fontWeight: "bold",
        fontSize: "20px",
    },
    boxes: {
        padding: "10px"
    },
    Text: {
        paddingTop: "10px"
    },
    thirdBox: {
        marginTop: "10px",
        fontWeight: "bold",
        fontSize: "20px",
        padding: "10px"
    },
    avatar: {
        backgroundColor: "#0076CE",
        color: "#fff",
        marginRight: "8px",
    },
    fourBox: {
        marginTop:"30px"
    },
    fourBoxText:{
        paddingTop:"20px"
    },
    SkillButton: {
        marginRight: '3px', backgroundColor: '#008E97', color: 'white',height: '35px',
    },
})

class Home extends React.Component<HomeProps, State>{

    constructor(props:HomeProps){
        super(props);
            this.state={
                showAdditionalSkills:false
            }
    }

    toggleAdditionalSkills = () => {
        this.setState((prevState) => ({
            showAdditionalSkills: !prevState.showAdditionalSkills,
        }));
    };

    render() {
        const { showAdditionalSkills } = this.state;
        const additionalSkills = ['PHP', 'SQL', 'Android', 'Android', 'Skill 5', 'Skill 6', 'skill7'];

        const { classes } = this.props;

        const defaultSkills = additionalSkills.slice(0, 3);
        const remainingSkills = additionalSkills.slice(3);

        return (
            <Container maxWidth="md" className={classes.mainContainer}>
                <Box className={classes.boxes}>
                    <Typography variant="h6" className={classes.Heading}>Hotel Management System</Typography>
                    <Typography variant="body1" className={classes.Text}>Hourly Public</Typography>
                    <hr style={{marginTop:"30px"}}/>
                </Box>
                <Box className={classes.boxes}>
                    <Typography variant="h6" className={classes.Heading}>Project Description:</Typography>
                    <Typography variant="body1" style={{ overflow: "auto", height: "200px", paddingTop: "20px" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A deserunt
                        eligendi magnam eaque laboriosam, quisquam fugiat qui, earum
                        pariatur ducimus mollitia at voluptates quidem laudantium quia ab
                        voluptatum laborum esse perspiciatis harum consequatur officia
                        veritatis aliquid? Itaque eligendi, architecto perferendis molestiae
                        rerum, quae porro modi voluptatibus veniam possimus deserunt
                        exercitationem quia. Quibusdam sunt aliquid temporibus impedit
                        beatae eius iusto. Ad icia delectus quibusdam tempora veniam vel
                        consequuntur, quia nobis necessitatibus ad enim! Fugit natus laborum
                        quas eum velit harum repellendus iste aliquam illum qui mollitia
                        officiis quisquam ad, ipsum itaque! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Provident ex quisquam debitis esse
                        autem saepe quod architecto ad atque tempora vitae dolorem voluptate
                        tempore repudiandae veniam quas impedit, natus odit. Sit voluptatem
                        velit maxime officia mollitia expedita, eum corrupti et maiores
                        dolorem eos atque quod, sunt rerum nisi blanditiis dicta saepe ab
                        laborum debitis tenetur aliquam ipsa qui. Excepturi ipsam doloribus
                        dolores numquam ipsum reiciendis alias distinctio corporis, totam
                        dolorem, quos maxime itaque sapiente non. Iusto iste saepe et illo
                        quod voluptates fugiat assumenda facere incidunt nulla nobis vel
                        dolorem velit, quo earum magni amet sed laudantium. Pariatur,
                        impedit ut.
                    </Typography>
                    <hr style={{marginTop:"50px"}}/>
                </Box>
                <Box>
                    <Typography className={classes.thirdBox}>Project Time:</Typography>
                    <Grid container spacing={2} style={{ paddingLeft: "10px", paddingTop: "20px" }}>
                        <Grid item xs={3} sm={3}>
                            <Badge color="primary">
                                <Avatar className={classes.avatar}>1</Avatar>
                                <div>
                                <Typography style={{fontWeight:"bold"}}> Less than 30hrs/week </Typography>
                                <Typography>Hourly</Typography>
                                </div>
                            </Badge>
                        </Grid>
                        <Grid item xs={3} sm={3}>
                            <Badge color="primary">
                                <Avatar className={classes.avatar}>2</Avatar>
                                <div>
                                    <Typography style={{fontWeight:"bold"}}>1 to 3 months</Typography>
                                    <Typography>Project Length</Typography>
                                </div>
                            </Badge>
                        </Grid>
                        <Grid item xs={3} sm={6}>
                            <Badge color="primary">
                                <Avatar className={classes.avatar}>3</Avatar>
                                <div>
                                <Typography style={{fontWeight:"bold"}}>Intermediate</Typography>
                                <Typography>I am looking for mix expirence and value</Typography>
                                </div>
                            </Badge>
                        </Grid>
                    </Grid>
                    <hr style={{marginTop:"50px"}}/>
                </Box>
                <Box className={classes.fourBox}>
                    <Typography className={classes.Heading}>Activity on this Job</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={3} style={{marginTop:"20px"}}>
                            <div>
                                <Typography>Proposals:</Typography><br/>
                                <Typography>Last viwed by the client:</Typography><br/>
                                <Typography>Invited Sends:</Typography><br/>
                                <Typography>Unanswered invites:</Typography>
                            </div>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <div>
                                <Typography>10 to 15</Typography><br/>
                                <Typography>10 minutes ago</Typography><br/>
                                <Typography>0</Typography><br/>
                                <Typography>0</Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <hr style={{marginTop:"30px"}}/>
                </Box>
                <Box className={classes.boxes}>
                    <Typography className={classes.Heading}>Skills and Expertise:</Typography><br/>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {defaultSkills.map((skill, index) => (
                                        <Button key={index} className={classes.SkillButton}>
                                            {skill}
                                        </Button>
                                    ))}
                                    {showAdditionalSkills &&
                                        additionalSkills.map((skill, index) => (
                                            <Button key={index} className={classes.SkillButton}>
                                                {skill}
                                            </Button>
                                        ))}
                                    {!showAdditionalSkills && remainingSkills.length > 0 && (
                                        <Button onClick={this.toggleAdditionalSkills}>+{remainingSkills.length}</Button>
                                    )}
                                </div>
                </Box>
            </Container>
        )
    }
}

export default withStyles(styles)(Home)
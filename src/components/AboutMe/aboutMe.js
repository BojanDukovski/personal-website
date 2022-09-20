import InstagramLogo from '../../images/clipart/instagram.png';
import GithubLogo from '../../images/clipart/githubpng.png';
import FacebookLogo from '../../images/clipart/facebook.png';
import LinkedInLogo from '../../images/clipart/linkedIn.png';
import GmailLogo from '../../images/clipart/gmail.png';
import ProfPic from '../../images/profPic.png';

function AboutMe () {
    return (
        <div id='container' className="p-5 container">
            <div style={{'backgroundColor': 'black', 'color': 'lightgray', 'borderRadius': '5%'}} className="p-4 mt-1">  
                <div className='text-center blockquote'>
                <img className='w-50' src={ProfPic} style={{'borderRadius': '5%'}} /><br/>
                    <p className='mt-5'>
                        Hello, my name is Bojan Dukovski. <br/>
                        I am student at Faculty of Computer Science and Engineering, Skopje. Since this is my final year at the college i decided
                        to make this website as a portfolio for my work - programming and art (drawing, painting and taking photos).
                        If you want to know more about the work that i have done and projects that I've contributed go to 'Projects' section of this website or check out my social media. <br/>
                        ...and as mentioned before if you have anyting to say to me here is how you can find me:
                    </p>
                    <br/>
                    <div className='mt-2'>
                        <a href = "mailto: bojan.dukovski211@gmail.com"> <img height="5%" width="5%"  src={GmailLogo} className="m-1" /></a>
                        <a href='https://github.com/BojanDukovski'><img height="5%" width="5%" src={GithubLogo}  className="m-1" /></a> 
                        <a href='https://www.instagram.com/ip_v5.0/'><img height="5%" width="5%" src={InstagramLogo}  className="m-1" /></a> 
                        <a href='https://www.linkedin.com/in/bojan-dukovski-9487a9153/'><img height="5%" width="5%" src={LinkedInLogo}  className="m-1" /></a> 
                        <a href='https://www.facebook.com/leto.err'><img height="5%" width="5%" src={FacebookLogo}  className="m-1" /></a> 
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;
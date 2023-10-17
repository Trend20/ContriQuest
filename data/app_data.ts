import {INav, Steps} from "@/types/types";
import { SiGnuprivacyguard, SiGithub} from 'react-icons/si'
import { ImProfile} from 'react-icons/im'
import { BsShareFill} from 'react-icons/bs'


// nav data
export const navData: INav[] = [
    {
        item:'Home',
        id: 1,
        itemLink:'/'
    },
    {
        item:'About',
        id: 2,
        itemLink:'/about'
    },
    {
        item:'Login',
        id: 3,
        itemLink:'/login'
    },
    {
        item:'Signup',
        id: 4,
        itemLink:'/signup'
    }
]

// footer data

// steps data
export const stepsData: Steps[] =[
    {
        icon: '<SiGnuprivacyguard />',
        stepName:'Signup',
        stepDescription:'Signup on the platform using your email'
    },
    {
        icon: '<ImProfile />',
        stepName:'Create Profile',
        stepDescription:'Create a profile that describes who you are.'
    },
    {
        icon: '<SiGithub />' ,
        stepName:'Link Github',
        stepDescription:'Connect your Github account to your ContriQuest account.'
    },
    {
        icon: '<BsShareFill />',
        stepName:'Share',
        stepDescription:'Share with your network on your social accounts.'
    }
]

// Feed
import JointGroupFeed from './components/Feed/JointGroupFeed';
import GroupMemberList from './components/Group/GroupMemberList';
import MyGroupFeed from './components/Feed/MyGroupFeed';
import NoneJointGroupFeed from './components/Feed/NoneJointGroupFeed';

// Home
import Home from './components/Home/Home';
import SignInPage from './components/Home/SignInPage';
import SignUpPage from './components/Home/SignUpPage';
import FindPassword from './components/Home/FindPassword';

// Main
import MyGroup from './components/Main/MyGroup';
import SearchResult from './components/Main/SearchResult';
import InvitationModal from './components/Group/InvitationModal';

// Set

//Route Setting
export const routes = [
    //Feed
    {path: '/JointGroupFeed', component: JointGroupFeed},
    {path: '/GroupMemberList', component: GroupMemberList},
    {path: '/MyGroupFeed', component: MyGroupFeed},
    {path: '/NoneJointGroupFeed', component: NoneJointGroupFeed},

    //Home
    {path: '/Home', component: Home},
    {path: '/SignInPage', component: SignInPage},
    {path: '/FindPassword', component: FindPassword},
    {path: '/SignUpPage', component: SignUpPage},

    //Main
    {path: '/MyGroup', component: MyGroup},
    {path: '/SearchResult', component: SearchResult},
    {path: '/InvitationModal', component: InvitationModal},
    
    //Set
]

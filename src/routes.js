//Load Components

// Feed
import JoinedGroupFeed from './components/JoinedGroupFeed';
import MemberList from './components/MemberList';
import MyGroupFeed from './components/MyGroupFeed';
import NoneJointFeed from './components/NoneJointFeed';
import RemoveGroup from './components/RemoveGroup';

// Home
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Password from './components/Password';

// Main
import GroupList from './components/GroupList';
import SearchPage from './components/SearchPage';

// Set

//Route Setting
export const routes = [
    //Feed
    {path: '/JoinedGroupFeed', component: JoinedGroupFeed},
    {path: '/MemberList', component: MemberList},
    {path: '/MyGroupFeed', component: MyGroupFeed},
    {path: '/NoneJointFeed', component: NoneJointFeed},
    {path: '/RemoveGroup', component: RemoveGroup},

    //Home
    {path: '/Home', component: Home},
    {path: '/Login', component: Login},
    {path: '/Password', component: Password},
    {path: '/SignUp', component: SignUp},

    //Main
    {path: '/GroupList', component: GroupList},
    {path: '/SearchPage', component: SearchPage},
    
    //Set
]

// Feed
import Feed from './components/Feed/Feed';
import MyWriteFeed from './components/Feed/MyWriteFeed';
import MyGroupFeed from './components/Feed/MyGroupFeed';
import NoneJointGroupFeed from './components/Feed/NoneJointGroupFeed';

// Group
import JointGroup from './components/Group/JointGroup';
import GroupMemberList from './components/Group/GroupMemberList';
import JointGroupFeed from './components/Group/JointGroupFeed';

// Home
import Home from './components/Home/Home';
import SignInPage from './components/Home/SignInPage';
import SignUpPage from './components/Home/SignUpPage';
import FindPassword from './components/Home/FindPassword';

// Main
import MainPage from './components/Main/MainPage';
import MyGroup from './components/Main/MyGroup';
import SearchResult from './components/Main/SearchResult';
import MobileMyMenu from './components/Header-Footer/MobileMyMenu';

// Set

// Route Setting
export const routes = [
    // Feed
    { path: '/Feed', component: Feed },
    { path: '/MyWriteFeed', component: MyWriteFeed },
    { path: '/MyGroupFeed', component: MyGroupFeed },
    { path: '/NoneJointGroupFeed', component: NoneJointGroupFeed },

    // Group
    // {path: '/JointGroup', component: JointGroup},
  { path: '/JointGroup', component: JointGroup, children: [
      { path: '', component: JointGroupFeed },
      { path: '/JointGroup/GroupMemberList', component: GroupMemberList }
  ] },
    // {path: '/JointGroupFeed', component: JointGroupFeed},
    // {path: '/GroupMemberList', component: GroupMemberList},

    // Home
  {
    path: '/',
    component: Home,
    beforeEnter (to, from, next) {
      const tk = window.localStorage.getItem('token');
      if (tk) {
          next('/MainPage');
        } else {
          next();
        }
    }
  },
    { path: '/FindPassword', component: FindPassword },
  {
    path: '/SignInPage',
    component: SignInPage
  },
    { path: '/SignUpPage', component: SignUpPage },

    // Main
    { path: '/MainPage', component: MainPage },
    { path: '/MyGroup', component: MyGroup },
    { path: '/SearchResult', component: SearchResult },
    // {path: '/InvitationModal', component: InvitationModal},
    { path: '/MyMenu', component: MobileMyMenu },

    // Set

    // *
    { path: '*', component: Home }
];

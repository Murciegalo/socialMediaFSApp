import React from 'react'
import { Route , Switch } from 'react-router-dom'
import PrivateRoute from '../privateRouting/PrivateRoute';
//comps.
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound'
import Login from '../auth/Login';
import Register from '../auth/Register';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-form/CreateProfile';
import EditProfile from '../profile-form/EditProfile';
import AddExperience from '../profile-form/AddExperience';
import AddEducation from '../profile-form/AddEducation';
import Profile from '../profiles/Profile';
import UserProfile from '../userProfile/UserProfile';
import Posts from '../posts/Posts';
import Post from '../post/Post'

const routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path='/login' render={() => <Login/>}/>
        <Route exact path='/register' render={() => <Register/>}/>
        <Route exact path='/profiles' component={Profile} />
        <PrivateRoute exact path='/profile/:userId' component={UserProfile}/>
        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
        <PrivateRoute exact path='/create-profile' component={CreateProfile}/>
        <PrivateRoute exact path='/edit-profile' component={EditProfile}/>
        <PrivateRoute exact path='/add-experience' component={AddExperience}/>
        <PrivateRoute exact path='/add-education' component={AddEducation}/>
        <PrivateRoute exact path='/posts' component={Posts}/>
        <PrivateRoute exact path='/posts/:id' component={Post}/>
        <Route component={NotFound}/>
      </Switch>
    </section>
  )
}

export default routes

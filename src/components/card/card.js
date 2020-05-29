import React from 'react'
import './card.css'
import Footer from '../layout/items/footer'
import { Switch, Route } from 'react-router'
import Dashboard from './items/dashboard/dashboard'
import BookReview from './items/book_review/book_review'
import Home from './items/home/home'

function Card(props) {
    return (
        <div>
            <Switch>
                <Route path='/dashboard'>
                    <Dashboard library={props.library} />
                </Route>
                <Route path='/books'>
                    <BookReview library={props.library} />
                </Route>
                <Route path='/'>
                    <Home library={props.library} />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default Card